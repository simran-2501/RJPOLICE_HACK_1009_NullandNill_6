import cv2
import numpy as np
from ultralytics import YOLO
from ultralytics.utils.plotting import Annotator
import imutils
from vidgear.gears import CamGear

crash_detector = YOLO('yolov8n.pt')
stream = CamGear(source='https://www.youtube.com/watch?v=1EiC9bvVGnk&ab_channel=SeeJacksonHole', stream_mode = True, logging=True).start() # YouTube Video URL as input

while True:
    
    frame = stream.read()
    frame = imutils.resize(frame, width=1200)
    result1 = crash_detector.track(frame, persist=True)
    if frame is None:
        break
    cv2.imshow("Output Frame", result1[0].plot())
    key = cv2.waitKey(1) & 0xFF
    # check for 'q' key-press
    if key == ord("q"):
        #if 'q' key-pressed break out
        break

cv2.destroyAllWindows()
stream.stop()