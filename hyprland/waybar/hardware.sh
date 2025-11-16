#!/bin/bash

# CPU temp
cpu_temp=$(sensors | awk '/k10temp-pci-00c3/,/^$/ { if ($1 == "Tctl:") print $2 }' | sed 's/+//;s/°C//')

# Since you have AMD GPU, disable nvidia-smi or remove it (replace with amdgpu temp)
# For now, let's get GPU temp from amdgpu:
gpu_temp=$(sensors | awk '/amdgpu-pci-1000/,/^$/ { if ($1 == "edge:") print $2 }' | sed 's/+//;s/°C//')

# NVIDIA GPU fan speed in percent using nvidia-smi
fan_speed=$(nvidia-smi --query-gpu=fan.speed --format=csv,noheader,nounits 2>/dev/null || echo "N/A")

# CPU usage percentage
cpu_usage=$(top -bn1 | grep "Cpu(s)" | awk '{print 100 - $8}' | cut -d'.' -f1)

# Memory usage in GB with 1 decimal
mem_used=$(free -m | awk '/^Mem:/ {printf "%.1f", $3/1024}')
mem_total=$(free -m | awk '/^Mem:/ {printf "%.1f", $2/1024}')

echo " GPU: ${gpu_temp}°C   Fan: ${fan_speed} %  |  CPU: ${cpu_temp}°C  CPU: ${cpu_usage}% |  RAM: ${mem_used}G/${mem_total}GB |"
