import cv2
import numpy as np
from ultralytics import YOLO
from ultralytics.utils.plotting import Annotator
import imutils

crash_detector = YOLO('C:/Users/prana/Desktop/New folder/RJPOLICE_HACK_1009_NullandNill_6/AI Models/Crash Detection/crash.pt')
cap = cv2.VideoCapture("C:/Users/prana/Desktop/New folder/RJPOLICE_HACK_1009_NullandNill_6/AI Models/Crash Detection/cr.mp4")
ret = True

while ret:
    _, frame = cap.read()
    result1 = crash_detector.track(frame, persist=True, save=True)
    frame_ = np.array(result1[0].plot(), dtype=np.uint8)
    cv2.imshow('Frame', result1[0].plot())

    if cv2.waitKey(1) & 0xFF == ord('q'): 
        break

cap.release()
cv2.destroyAllWindows()