#!/bin/bash

# CPU temp — match the Tctl: line directly instead of anchoring to a PCI
# address, which can renumber across BIOS/kernel updates.
cpu_temp=$(sensors | awk '$1 == "Tctl:" { print $2; exit }' | sed 's/+//;s/°C//')

# NVIDIA GPU temperature and fan speed using nvidia-smi
gpu_temp=$(nvidia-smi --query-gpu=temperature.gpu --format=csv,noheader,nounits 2>/dev/null || echo "N/A")
fan_speed=$(nvidia-smi --query-gpu=fan.speed --format=csv,noheader,nounits 2>/dev/null || echo "N/A")

# CPU usage percentage
cpu_usage=$(top -bn1 | grep "Cpu(s)" | awk '{print 100 - $8}' | cut -d'.' -f1)

# Memory usage in GB with 1 decimal
mem_used=$(free -m | awk '/^Mem:/ {printf "%.1f", $3/1024}')
mem_total=$(free -m | awk '/^Mem:/ {printf "%.1f", $2/1024}')

echo " GPU: ${gpu_temp}°C   Fan: ${fan_speed} %  |  CPU: ${cpu_temp}°C  CPU: ${cpu_usage}% |  RAM: ${mem_used}G/${mem_total}GB |"
