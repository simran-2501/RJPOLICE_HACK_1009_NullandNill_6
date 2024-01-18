import cv2
import numpy as np
from ultralytics import YOLO
from sort.sort import Sort
from util import get_car, read_license_plate, write_csv
import easyocr
import pytesseract
from pytesseract import Output
import pymongo
from bson.binary import Binary
import os

# Connect to MongoDB
client = pymongo.MongoClient("mongodb+srv://pm2694:875YVXiwF3k0dnLZ@safelens.9ryjuoa.mongodb.net/")
db = client["your_database"]
collection = db["your_collection"]

reader = easyocr.Reader(['en'])

pytesseract.pytesseract.tesseract_cmd = 'C:/Program Files/Tesseract-OCR/tesseract.exe'

# Set environment variable
import os
os.environ["KMP_DUPLICATE_LIB_OK"] = "TRUE"

results = {}
mot_tracker = Sort()

# Load models
coco_model = YOLO('yolov8n.pt')
license_plate_detector = YOLO('best.pt')

# Load video
cap = cv2.VideoCapture("./please.mp4")

# List of vehicle class IDs
vehicles = [2, 3, 5, 7]

vehicle_name={2: 'car',
 3: 'motorcycle',
 5: 'bus',
 7: 'truck',}

def check(s1):
    s1.replace(" ", "")
    if len(s1)==10:
        return s1
    else:
        return None

# Read frames
frame_nmr = -1
ret = True
while ret:
    frame_nmr += 1
    ret, frame = cap.read()
    if ret:
        results[frame_nmr] = {}

        # Detect vehicles
        detections = coco_model(frame)[0]
        detections_ = []
        for detection in detections.boxes.data.tolist():
            x1, y1, x2, y2, score, class_id = detection
            if int(class_id) in vehicles:
                detections_.append([x1, y1, x2, y2, score])

        # Track vehicles
        track_ids = mot_tracker.update(np.asarray(detections_))
        print(track_ids)
        # Detect license plates
        license_plates = license_plate_detector(frame)[0]
        for license_plate in license_plates.boxes.data.tolist():
            x1, y1, x2, y2, score, class_id = license_plate

            # Assign license plate to car
            xcar1, ycar1, xcar2, ycar2, car_id = get_car(license_plate, track_ids)

            if car_id != -1:
                # Crop license plate
                license_plate_crop = frame[int(y1):int(y2), int(x1): int(x2), :]

                
                # Convert the frame to binary data
                _, buffer = cv2.imencode(".jpg", license_plate_crop)
                frame_binary = Binary(buffer)

                # Create a document to insert into MongoDB
                document = {"image": frame_binary}

                # Insert the document into the MongoDB collection
                collection.insert_one(document)

                # Process license plate
                license_plate_crop_gray = cv2.cvtColor(license_plate_crop, cv2.COLOR_BGR2GRAY)
                # ocr_result = reader.readtext(license_plate_crop_gray)

                ocr_result = pytesseract.image_to_string(license_plate_crop_gray,lang='eng')
                cv2.imwrite("test.jpg",license_plate_crop_gray)

                print(ocr_result)

                _, license_plate_crop_thresh = cv2.threshold(license_plate_crop_gray, 64, 255, cv2.THRESH_BINARY_INV)

                # Read license plate number
                license_plate_text, license_plate_text_score = read_license_plate(license_plate_crop_thresh)

                if ocr_result is not None:
                    results[frame_nmr][car_id] = {'caqr': {'bbox': [xcar1, ycar1, xcar2, ycar2]},
                                                  'license_plate': {'bbox': [x1, y1, x2, y2],
                                                                    'text': ocr_result}}

                    # Display frame with bounding boxes
                    cv2.rectangle(frame, (int(xcar1), int(ycar1)), (int(xcar2), int(ycar2)), (0, 255, 0), 2)
                    cv2.rectangle(frame, (int(x1), int(y1)), (int(x2), int(y2)), (0, 0, 255), 2)
                    cv2.putText(frame, f"ID: {car_id}, Plate: {ocr_result}", (int(xcar1), int(ycar1) - 10),
                                cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 2)
    cv2.imshow('Frame', detections[0].plot())
    if cv2.waitKey(1) & 0xFF == ord('q'): 
        break

# Write results
write_csv(results, './test.csv')
print(results)
# Release video capture and close windows
# cap.release()
# cv2.destroyAllWindows()
