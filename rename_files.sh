#!/bin/bash

# This script navigates to the generated files directory and corrects
# the capitalization of the filenames.
# For example, it renames 'rv_data_action_pb.js' to 'rv_data_Action_pb.js'.

# --- Configuration ---
TARGET_DIR="src/generated"


# --- Script Logic ---
# Do not edit below this line

# Check if the target directory exists
if [ ! -d "$TARGET_DIR" ]; then
  echo "Error: Directory '$TARGET_DIR' not found."
  echo "Please run this script from your project's root directory."
  exit 1
fi

cd "$TARGET_DIR" || exit

echo "Navigated to $(pwd)"
echo "Starting case-correction rename process..."

RENAMED_COUNT=0
SKIPPED_COUNT=0

# Loop through all files that have the prefix.
for file in rv_data_*_pb.js; do
  # Check if the file exists and is a regular file.
  if [ -f "$file" ]; then
    # This regex checks if the character after 'rv_data_' is a lowercase letter.
    # This makes the script safe to re-run (idempotent).
    if [[ "$file" =~ rv_data_[a-z] ]]; then
      
      # 1. Isolate the part of the name to be modified (e.g., 'action_pb.js')
      local_part=${file#rv_data_} 
      
      # 2. Capitalize the very first letter of that part ('action_pb.js' -> 'Action_pb.js')
      # The ${variable^} syntax capitalizes the first character.
      capitalized_part="${local_part^}"
      
      # 3. Reassemble the new filename
      new_name="rv_data_${capitalized_part}"
      
      # 4. Perform the rename and provide feedback
      echo "Renaming '$file' to '$new_name'"
      mv -- "$file" "$new_name"
      ((RENAMED_COUNT++))
    else
      # The file appears to be already capitalized, so we skip it.
      ((SKIPPED_COUNT++))
    fi
  fi
done

echo "---------------------------------"
echo "Rename process complete."
echo "Corrected: $RENAMED_COUNT files."
echo "Skipped: $SKIPPED_COUNT files (already correct)."