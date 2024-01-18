import cv2
import numpy as np
from PIL import Image
from multiprocessing import Pool

def is_uniform_color(image, color_range=20):
    data = np.array(image)
    min_color = np.min(data, axis=(0, 1))
    max_color = np.max(data, axis=(0, 1))
    return np.all(max_color - min_color < color_range)
def is_blurry(image, blur_threshold=100):
    gray = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2GRAY)
    laplacian_var = cv2.Laplacian(gray, cv2.CV_64F).var()
    return laplacian_var < blur_threshold

def process_video(video_path):
    cap = cv2.VideoCapture(video_path)
    fps = cap.get(cv2.CAP_PROP_FPS)
    frame_interval = int(1 * fps)  # Number of frames to skip

    frame_idx = 0
    while True:
        ret, frame = cap.read()
        if not ret:
            break

        if frame_idx % frame_interval == 0:
            image = Image.fromarray(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))

            if is_uniform_color(image):
                timestamp = frame_idx / fps
                print(f"Uniform color detected in '{video_path}' at {timestamp:.2f} seconds.")

            if is_blurry(image):
                timestamp = frame_idx / fps
                print(f"Blurry frame detected in '{video_path}' at {timestamp:.2f} seconds.")

        frame_idx += 1

    cap.release()

def main():
    video_paths = ['BlackoutDetection\\video2.mp4','BlackoutDetection\\video3.mp4']  

    with Pool(len(video_paths)) as pool:
        pool.map(process_video, video_paths)

if __name__ == '__main__':
    main()
