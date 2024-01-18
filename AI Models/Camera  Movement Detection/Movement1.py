import cv2
import numpy as np
from PIL import Image

def capture_webcam_image(cam):
    ret, frame = cam.read()
    if not ret:
        print("Failed to capture image")
        return None
    return Image.fromarray(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))

def extract_border_pixels(image, border_width):
    image_array = np.array(image)
    top_border = image_array[:border_width, :]
    bottom_border = image_array[-border_width:, :]
    left_border = image_array[border_width:-border_width, :border_width]
    right_border = image_array[border_width:-border_width, -border_width:]

    left_border = np.concatenate([top_border[:, :border_width], left_border, bottom_border[:, :border_width]], axis=0)
    right_border = np.concatenate([top_border[:, -border_width:], right_border, bottom_border[:, -border_width:]], axis=0)

    return np.concatenate((left_border, right_border), axis=0)

def compare_images(original, modified, border_width):
    original_border = extract_border_pixels(original, border_width)
    modified_border = extract_border_pixels(modified, border_width)
    difference = np.sum(original_border != modified_border) / float(original_border.size)
    return difference

def generate_alert():
    print("Alert: More than 95% of the border pixels have changed!")

# Open the webcam
cam = cv2.VideoCapture(0)

# Capture the initial reference image
reference_image = capture_webcam_image(cam)
if reference_image is None:
    cam.release()
    raise Exception("Failed to capture the reference image")

try:
    while True:
        current_image = capture_webcam_image(cam)
        if current_image is None:
            break

        difference_percentage = compare_images(reference_image, current_image, 10)
        if difference_percentage > 0.90:
            print(difference_percentage)
            generate_alert()

        # Optional: show the current image
        cv2.imshow('Webcam', np.array(current_image))
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
        
        reference_image=current_image

finally:
    cam.release()
    cv2.destroyAllWindows()