#!/bin/bash -e

interval=20  # Time between each temperature check (in seconds)

setfan() {
  {
    xhost si:localuser:root
    sudo /usr/bin/nvidia-settings -a "[gpu:0]/GPUFanControlState=1" \
                                  -a "[fan:0]/GPUTargetFanSpeed=$1" \
                                  -a "[fan:1]/GPUTargetFanSpeed=$1"
    xhost -si:localuser:root
  } > /dev/null
}

for(( ; ; ))
do
  # Get the current GPU temperature
  temp=$(nvidia-smi --query-gpu=temperature.gpu --format=csv,noheader)

  # Set fan speed based on temperature ranges
  if (( temp <= 30 ))
  then
      fan_speed=30
  elif (( temp > 30 && temp <= 40 ))
  then
      fan_speed=40
  elif (( temp > 40 && temp <= 50 ))
  then
      fan_speed=50
  elif (( temp > 50 && temp <= 60 ))
  then
      fan_speed=60
  elif (( temp > 60 && temp <= 70 ))
  then
      fan_speed=70
  elif (( temp > 70 && temp <= 80 ))
  then
      fan_speed=80
  elif (( temp > 80 && temp <= 90 ))
  then
      fan_speed=90
  else
      fan_speed=100
  fi

  # Set the fan speed
  setfan "$fan_speed"

  # Sleep for the defined interval
  sleep "$interval"
done
