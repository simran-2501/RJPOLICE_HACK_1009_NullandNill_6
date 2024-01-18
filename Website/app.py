from flask import Flask, request
from flask_cors import CORS
import subprocess

app = Flask(__name__)

CORS(app)

@app.route('/run-script', methods=['POST'])
def run_crash_detection_script():
    # Run the crash detection Python script using Anaconda
    subprocess.run(["python", "C:/Users/prana/Desktop/New folder/RJPOLICE_HACK_1009_NullandNill_6/AI Models/Crash Detection/crash_detection.py"])
    return "Crash Detection Script executed"

@app.route('/run-live-detection', methods=['POST'])
def run_vehicle_detection_script():
    # Run the vehicle detection Python script using Anaconda
    subprocess.run(["python", "C:/Users/prana/Desktop/New folder/RJPOLICE_HACK_1009_NullandNill_6/AI Models/Realtime Identification from live YT video/Live_Yt_Fetch.py"])
    return "Vehicle Detection Script executed"

@app.route('/run-anpr', methods=['POST'])
def run_anpr_script():
    # Run the vehicle detection Python script using Anaconda
    subprocess.run(["python", "C:/Users/prana/Desktop/New folder/RJPOLICE_HACK_1009_NullandNill_6/AI Models/number_plate+ocr/main.py"])
    return "Vehicle Detection Script executed"

if __name__ == '__main__':
    app.run(debug=True)
