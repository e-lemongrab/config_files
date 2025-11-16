#!/bin/bash

WALLPAPER_DIR="/usr/share/hypr"
INTERVAL=600  # 10 minutes
MONITORS=("DP-6" "HDMI-A-2")

while true; do
  # Pick a random wallpaper (image or video)
  FILE=$(find "$WALLPAPER_DIR" -maxdepth 1 -type f \( -iname '*.jpg' -o -iname '*.png' -o -iname '*.jpeg' \) | shuf -n 1)

  # Kill any running mpvpaper instance (for video wallpapers)
  pkill mpvpaper

  # Unload all current hyprpaper wallpapers
  hyprctl hyprpaper unload all

  if [[ "$FILE" == *.mp4 ]]; then
    echo "[mpvpaper] Setting video wallpaper: $FILE"
    for MON in "${MONITORS[@]}"; do
      mpvpaper "$MON" "$FILE" --loop --no-audio --no-input-default-bindings --quiet &
    done
  else
    echo "[hyprpaper] Setting static wallpaper: $FILE"
    # preload once before loop to avoid redundant preload calls
    hyprctl hyprpaper preload "$FILE"
    for MON in "${MONITORS[@]}"; do
      hyprctl hyprpaper wallpaper "$MON,$FILE"
    done
  fi

  sleep $INTERVAL
done
