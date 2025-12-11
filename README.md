# Body Pose Detection

Body Pose Detection is a computer vision application that identifies and tracks human body keypoints in images or video. The system utilizes a pre-trained pose recognition model to detect body joints and skeleton structures in real time. It can be used for applications such as motion analysis, fitness tracking, human-computer interaction, and animation.

This project demonstrates an end-to-end pipeline for detecting human body poses, visualizing keypoints and skeleton connections, and processing visual input from static images or live camera feeds.

---

## Table of Contents

- Project Overview  
- Features  
- Demo  
- Technology Stack  
- Installation  
- Usage  
- Example Output  
- Project Structure  
- Contribution  
- License  

---

## Project Overview

The goal of this project is to provide a robust and easy-to-use body pose detection system. It loads a pre-trained deep learning model to analyze visual data and identify important body keypoints such as shoulders, elbows, wrists, hips, knees, and ankles.

The detected points are then connected to form a skeleton representing the pose, which can be visualized or further processed for analysis.

---

## Features

- Detects major human body joints  
- Visualizes skeleton overlay on images or video frames  
- Real-time pose detection using webcam input  
- Works with static images and live video feeds  
- Lightweight and easy to extend  

---


## Technology Stack

- Python  
- OpenCV  
- Deep Learning Framework (e.g., TensorFlow / PyTorch)  
- Pre-trained pose detection model  
- NumPy  

---

## Installation

1. Clone the repository

```bash
git clone https://github.com/SS-Pradeep/Body_Pose_detection.git
cd Body_Pose_detection
