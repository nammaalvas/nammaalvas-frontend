import cv2
import numpy as np
import os
import sys

input_video_path = r"C:\Users\adith\Desktop\virtual.mp4"
output_dir = r"c:\Users\adith\Desktop\AietVerse\public\videos"
thumb_dir = os.path.join(output_dir, "tour_thumbnails")

os.makedirs(output_dir, exist_ok=True)
os.makedirs(thumb_dir, exist_ok=True)

output_video_path = os.path.join(output_dir, "virtual-tour.mp4")

print(f"Opening HD source video: {input_video_path}")
cap = cv2.VideoCapture(input_video_path)

if not cap.isOpened():
    print("Error: Could not open video file.")
    sys.exit(1)

total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
fps = cap.get(cv2.CAP_PROP_FPS) or 60.0
width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

print(f"Original Video Info: {width}x{height} @ {fps} fps, total frames: {total_frames}")

# Output high definition 1920x1080 HD
target_w, target_h = 1920, 1080
target_fps = 30.0
frame_stride = max(1, int(fps / target_fps))

# Setup VideoWriter with high quality MP4 encoding
fourcc = cv2.VideoWriter_fourcc(*'mp4v')
out_writer = cv2.VideoWriter(output_video_path, fourcc, target_fps, (target_w, target_h))

# Setup Background Subtractor to remove people and moving vehicles
bg_subtractor = cv2.createBackgroundSubtractorMOG2(history=300, varThreshold=25, detectShadows=False)

# GPS Locations timestamps
location_stamps = {
    "main_entrance": 0.05,
    "courtyard": 0.20,
    "main_facade": 0.40,
    "lobby": 0.65,
    "dept_corridor": 0.85
}

keyframe_indices = {name: int(total_frames * pct) for name, pct in location_stamps.items()}
saved_keyframes = {}

processed_count = 0
frame_idx = 0

print("Encoding Pristine HD 1080p Video with people & vehicle removal...")

while True:
    ret, frame = cap.read()
    if not ret:
        break
    
    if frame_idx % frame_stride == 0:
        # High quality resize to 1080p HD
        resized_frame = cv2.resize(frame, (target_w, target_h), interpolation=cv2.INTER_LANCZOS4)
        
        # Detect moving people/vehicles
        fg_mask = bg_subtractor.apply(resized_frame)
        
        kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
        cleaned_mask = cv2.morphologyEx(fg_mask, cv2.MORPH_OPEN, kernel)
        cleaned_mask = cv2.dilate(cleaned_mask, kernel, iterations=2)
        
        non_zero = cv2.countNonZero(cleaned_mask)
        if non_zero > 400:
            final_frame = cv2.inpaint(resized_frame, cleaned_mask, 3, cv2.INPAINT_TELEA)
        else:
            final_frame = resized_frame

        out_writer.write(final_frame)
        processed_count += 1
        
        # Save high resolution HD keyframe thumbnails
        for loc_name, target_idx in keyframe_indices.items():
            if loc_name not in saved_keyframes and abs(frame_idx - target_idx) < frame_stride * 2:
                thumb_path = os.path.join(thumb_dir, f"{loc_name}.jpg")
                cv2.imwrite(thumb_path, cv2.resize(final_frame, (960, 540)))
                saved_keyframes[loc_name] = thumb_path
                print(f"Saved HD keyframe thumbnail for {loc_name} -> {thumb_path}")
        
        if processed_count % 300 == 0:
            pct = (frame_idx / total_frames) * 100
            print(f"Progress: {pct:.1f}% ({processed_count} HD frames written)")

    frame_idx += 1

cap.release()
out_writer.release()
print(f"Finished processing! Pristine HD 1080p Video saved at: {output_video_path}")
