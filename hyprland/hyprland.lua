-- Hyprland auto-loads this file from the config dir; keep it present (even
-- empty) so reload doesn't error. Autostart is handled by exec-once in
-- hyprland.conf instead — the hyprland.start Lua event did not reliably
-- fire on 0.56.0, which is what silently broke waybar/swaync/betterbird/pypr.
return {}
