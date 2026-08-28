import cv2
import os
import sys

input_video_path = r"C:\Users\adith\Desktop\virtual.mp4"
output_dir = r"c:\Users\adith\Desktop\AietVerse\public\videos\tour_thumbnails"
os.makedirs(output_dir, exist_ok=True)

cap = cv2.VideoCapture(input_video_path)
if not cap.isOpened():
    print("Error: Could not open video.")
    sys.exit(1)

total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
fps = cap.get(cv2.CAP_PROP_FPS) or 30.0

print(f"Video Source Resolution: {width}x{height} @ {fps} fps, total frames: {total_frames}")

# Keyframe percentages for authentic AIET campus locations
location_stamps = {
    "main_entrance": 0.02,
    "courtyard": 0.22,
    "main_facade": 0.44,
    "lobby": 0.68,
    "dept_corridor": 0.88
}

for name, pct in location_stamps.items():
    target_frame = int(total_frames * pct)
    cap.set(cv2.CAP_PROP_POS_FRAMES, target_frame)
    ret, frame = cap.read()
    if ret:
        # Save pristine uncompressed PNG and max quality JPG
        png_path = os.path.join(output_dir, f"{name}_hd.png")
        jpg_path = os.path.join(output_dir, f"{name}_hd.jpg")
        
        cv2.imwrite(png_path, frame)
        cv2.imwrite(jpg_path, frame, [cv2.IMWRITE_JPEG_QUALITY, 100])
        print(f"Extracted Pristine Full-Res {frame.shape[1]}x{frame.shape[0]} HD Panorama for '{name}' -> {jpg_path}")
    else:
        print(f"Failed to read frame at index {target_frame} for {name}")

cap.release()
print("Done extracting ultra HD panorama frames!")
