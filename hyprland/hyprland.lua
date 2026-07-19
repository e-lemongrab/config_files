return {
  hyprland = {
    start = function()
      -- Waybar
      io.popen("waybar &")

      -- SwayNC notifications daemon
      io.popen("swaync &")

      -- Betterbird (email client)
      io.popen("betterbird &")

      -- Pypr (floating terminal toggle)
      io.popen("pypr &")

      -- NVIDIA fan control (start via systemd user service instead)
      -- systemctl --user enable --now nvidia-fan.service
    end,
  },
}
