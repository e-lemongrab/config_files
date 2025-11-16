#!/bin/bash
CURRENT_SINK=$(pactl info | grep "Default Sink" | awk '{print $3}')
CURRENT_VOL=$(pactl get-sink-volume "$CURRENT_SINK" | awk '{print $5}' | head -n1)
SINKS=$(pactl list short sinks | awk '{print $2}')
MENU=$(echo "$SINKS" | zenity --list --title="Select Audio Sink" --column="Sinks" --height=300 --width=400)
if [[ -n "$MENU" ]]; then
    pactl set-default-sink "$MENU"
    pactl set-sink-volume "$MENU" "$CURRENT_VOL"
    pactl set-sink-mute "$MENU" 0
    for INPUT in $(pactl list short sink-inputs | awk '{print $1}'); do
        pactl move-sink-input "$INPUT" "$MENU"
    done

    notify-send "Audio switched to $MENU (volume: $CURRENT_VOL)"
fi
