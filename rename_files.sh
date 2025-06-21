#!/bin/bash

# --- Configuration ---
# The directory where your generated protobuf .js files are located.
# This path should be relative to your project's root directory.
TARGET_DIR="src/generated"


# --- Script Logic ---
# Do not edit below this line

# Check if the target directory exists
if [ ! -d "$TARGET_DIR" ]; then
  echo "Error: Directory '$TARGET_DIR' not found."
  echo "Please run this script from your project's root directory."
  exit 1
fi

# Navigate into the target directory, or exit if it fails
cd "$TARGET_DIR" || exit

echo "Checking files in $(pwd)..."
COUNT=0

# Loop through all files ending in _pb.js
for file in *_pb.js; do
  # Check if the file is a regular file and does NOT already start with the prefix
  if [ -f "$file" ] && [[ ! "$file" == rv_data_* ]]; then
    # Rename the file by prepending "rv_data_"
    mv -- "$file" "rv_data_$file"
    echo "Renamed: $file  ->  rv_data_$file"
    ((COUNT++))
  fi
done

if [ "$COUNT" -eq 0 ]; then
    echo "No files needed renaming. Everything looks correct."
else
    echo "Rename process complete. $COUNT files were renamed."
fi