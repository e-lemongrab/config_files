#!/bin/bash

# Network interface (adjust if needed)
INTERFACE=$(ip route | awk '/default/ {print $5; exit}')
if [ -z "$INTERFACE" ]; then
    echo "⚠ No network"
    exit
fi

# Temporary file to store previous state
STATE="/tmp/waybar_net_$INTERFACE"

# Current bytes received and sent
RX=$(cat /sys/class/net/$INTERFACE/statistics/rx_bytes)
TX=$(cat /sys/class/net/$INTERFACE/statistics/tx_bytes)
NOW=$(date +%s)

# Read previous state if exists
if [ -f "$STATE" ]; then
    read PREV_TIME PREV_RX PREV_TX < "$STATE"
    DT=$((NOW - PREV_TIME))
    RX_DIFF=$((RX - PREV_RX))
    TX_DIFF=$((TX - PREV_TX))

    if [ "$DT" -gt 0 ]; then
        RX_MB=$(awk "BEGIN { printf \"%.2f\", $RX_DIFF / $DT / 1048576 }")
        TX_MB=$(awk "BEGIN { printf \"%.2f\", $TX_DIFF / $DT / 1048576 }")
        echo "󰇚 ↓${RX_MB}MB/s ↑${TX_MB}MB/s"
    else
        echo "󰇚 ↓0.00MB/s ↑0.00MB/s"
    fi
else
    echo "󰇚 ↓0.00MB/s ↑0.00MB/s"
fi

# Save current state
echo "$NOW $RX $TX" > "$STATE"
