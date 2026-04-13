#!/bin/bash

WALLPAPER_DIR="/usr/share/hypr"
INTERVAL=600  # 10 minutes
MONITORS=("DP-6" "HDMI-A-2")

start_hyprpaper() {
  echo "[script] Starting hyprpaper..."
  hyprpaper >/dev/null 2>&1 &
  sleep 1
}

ensure_hyprpaper() {
  if ! pgrep -x hyprpaper >/dev/null; then
    start_hyprpaper
  fi
}

while true; do
  ensure_hyprpaper

  # Pick a random wallpaper (image or video)
  FILE=$(find "$WALLPAPER_DIR" -maxdepth 1 -type f \( -iname '*.jpg' -o -iname '*.png' -o -iname '*.jpeg' -o -iname '*.mp4' \) | shuf -n 1)

  if [ -z "$FILE" ]; then
    echo "[error] No wallpapers found in $WALLPAPER_DIR"
    sleep "$INTERVAL"
    continue
  fi

  # Kill any running mpvpaper instance (for video wallpapers)
  pkill mpvpaper 2>/dev/null

  # Unload all current hyprpaper wallpapers; if hyprpaper is not responding, restart it once
  if ! hyprctl hyprpaper unload all >/dev/null 2>&1; then
    echo "[script] hyprpaper not responding, restarting..."
    pkill hyprpaper 2>/dev/null
    start_hyprpaper
    if ! hyprctl hyprpaper unload all >/dev/null 2>&1; then
      echo "[error] hyprpaper still not responding after restart."
      sleep "$INTERVAL"
      continue
    fi
  fi

  if [[ "$FILE" == *.mp4 ]]; then
    echo "[mpvpaper] Setting video wallpaper: $FILE"
    for MON in "${MONITORS[@]}"; do
      mpvpaper "$MON" "$FILE" --loop --no-audio --no-input-default-bindings --quiet &
    done
  else
    echo "[hyprpaper] Setting static wallpaper: $FILE"
    if ! hyprctl hyprpaper preload "$FILE" >/dev/null 2>&1; then
      echo "[script] preload failed, restarting hyprpaper..."
      pkill hyprpaper 2>/dev/null
      start_hyprpaper
      if ! hyprctl hyprpaper preload "$FILE" >/dev/null 2>&1; then
        echo "[error] Failed to preload wallpaper after restart: $FILE"
        sleep "$INTERVAL"
        continue
      fi
    fi

    for MON in "${MONITORS[@]}"; do
      hyprctl hyprpaper wallpaper "$MON,$FILE" >/dev/null 2>&1
    done
  fi

  sleep "$INTERVAL"
done
