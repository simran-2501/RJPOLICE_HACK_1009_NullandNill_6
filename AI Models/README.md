
# System for Geo-Tagging of privately owned cameras - AI Models

This folder contains the idealogy as well as the execution till date for Rajasthan Police Hackathon 1.0

The given problem statement prompted us to explore the different models which could be explored in the case of CCTV footages.
These include 

- Object detection models like YOLO, SSD, or Faster R-CNN to identify and locate people, vehicles, etc. in video streams. This enables proactive monitoring and alerts.
- Image classification models like ResNet or Inception to categorize objects in the camera's field of view. This provides metadata on the contents of the video footage.
- Object tracking models like DeepSort or SORT to follow objects across multiple video frames. Useful for gathering evidence and analyzing incidents.
- Geospatial models like Spatial Transformer Networks to encode location coordinates and camera orientations. Crucial for geo-tagging each camera.
- Natural language processing models like Transformer or LSTM to transcribe audio and generate metadata from video footage.
- Anomaly detection models to identify unusual events and trigger alerts.
- Face recognition models like FaceNet or DeepFace to identify individuals. Important for gathering evidence.
- Computer vision models like structure from motion to estimate camera displacement and orientation changes.


Out of these we have implemented the following:
- Object Detection Models: YOLOv8 and SSD models for recognizing the car type, speed, colour and license plate.

Basic Model Stack:
![Stack](https://i.imgur.com/LYoL04V.jpg)

Training Process Images for custom YOLOv8 License plate  detection:

| | | |
|:-------------------------:|:-------------------------:|:-------------------------:|
|<img width="" alt="Train 1" src="https://i.imgur.com/0Yahytu.gif">|  <img width="" alt="Train 2" src="https://i.imgur.com/rZ30QMh.gif">|<img width="" alt="Train Complete" src="https://i.imgur.com/aSJG82x.gif">|

Result of Vehicle Type, Colour and Speed
[Demo](https://i.imgur.com/7cw2U4W.gifv)

Result of custome detection of license plates:
| | | |
|:-------------------------:|:-------------------------:|:-------------------------:|
|<img width="" alt="Train 1" src="https://i.imgur.com/J6ZyqCF.jpg">|  <img width="" alt="Train 2" src="https://i.imgur.com/4OfURFD.jpg">|<img width="" alt="Train Complete" src="https://i.imgur.com/isBOS91.jpg">|

Current System of Deployment:
![System](https://i.imgur.com/1N6GZWu.jpg)

Future Work:
- Work on more recent models and increasing accuracy specifically for indian cars brands, colours etc.
- Introduce more prepocessing options such as light balance, night mode for CCTV capture.
- Implement FaceDetector as well as suspicious object detector from datasets like [this](https://www.kaggle.com/datasets/ajibsbaba/dangerousobjects)

  Major updation of models as well as cloud implementation will be achieved by 8th January 2024.
