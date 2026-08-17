-- Hyprland config (Lua format, required from 0.57 onwards).
-- Migrated by hand from the previous hyprland.conf (hyprlang).
-- hyprlang support was removed from Hyprland in PR #15539, so this file
-- is the only config format the compositor still reads.
--
-- Refer to the wiki for more information.
-- https://wiki.hypr.land/Configuring/Start/


-----------------
---- DARK MODE ----
-----------------
-- sudo pacman -S xdg-desktop-portal-gtk xdg-desktop-portal-hyprland qt6ct
hl.env("QT_QPA_PLATFORMTHEME", "qt6ct")
-- sudo pacman -S qt6ct qt5ct kvantum-qt5
-- sudo reboot to apply dark mode :D


------------------
---- MONITORS ----
------------------

-- See https://wiki.hypr.land/Configuring/Basics/Monitors/

-- ASUS on DP-6, primary, scale 1
hl.monitor({
    output   = "DP-6",
    mode     = "preferred",
    position = "0x0",
    scale    = "1",
})

-- Samsung TV on HDMI-A-2, set to 1920x1080@60Hz, placed at origin (right of ASUS)
hl.monitor({
    output   = "HDMI-A-2",
    mode     = "1920x1080@59.94",
    position = "2560x0",
    scale    = "1",
})


---------------------
---- MY PROGRAMS ----
---------------------

-- Set programs that you use
local terminal    = "kitty"
local fileManager = "dolphin"
local menu        = "wofi --show drun"
local ide         = "~/idea/bin/idea"
local browser     = "firefox"


-------------------
---- AUTOSTART ----
-------------------

-- See https://wiki.hypr.land/Configuring/Basics/Autostart/
-- Replaces the old `exec-once` keyword: this fires once when the compositor
-- starts, not on every config reload.
hl.on("hyprland.start", function()
    hl.exec_cmd("gsettings set org.gnome.desktop.interface gtk-theme \"Breeze_Dark\"")
    hl.exec_cmd("gsettings set org.gnome.desktop.interface color-scheme \"prefer-dark\"")

    hl.exec_cmd("waybar")
    hl.exec_cmd("swaync")
    hl.exec_cmd("betterbird")
    hl.exec_cmd("pypr")
    hl.exec_cmd("hyprpaper")
end)

-- hyprpaper.service (systemd --user) is enabled but its
-- ConditionEnvironment=WAYLAND_DISPLAY loses the race against the
-- compositor exporting that var at session start, so it never actually
-- launches hyprpaper — hence the exec above instead of relying on it.
-- NVIDIA fan control: start via systemd user service (recommended)
--   systemctl --user enable --now nvidia-fan.service
-- or manually: ~/Documents/config_files/services/nvidia/nvidiafan.sh


-------------------------------
---- ENVIRONMENT VARIABLES ----
-------------------------------

-- See https://wiki.hypr.land/Configuring/Advanced-and-Cool/Environment-variables/

hl.env("XCURSOR_SIZE", "24")
hl.env("HYPRCURSOR_SIZE", "24")


-----------------------
----- PERMISSIONS -----
-----------------------

-- See https://wiki.hypr.land/Configuring/Advanced-and-Cool/Permissions/
-- Please note permission changes here require a Hyprland restart and are not applied on-the-fly
-- for security reasons

-- hl.config({
--   ecosystem = {
--     enforce_permissions = true,
--   },
-- })

-- hl.permission("/usr/(bin|local/bin)/grim", "screencopy", "allow")
-- hl.permission("/usr/(lib|libexec|lib64)/xdg-desktop-portal-hyprland", "screencopy", "allow")
-- hl.permission("/usr/(bin|local/bin)/hyprpm", "plugin", "allow")


-----------------------
---- LOOK AND FEEL ----
-----------------------

-- Refer to https://wiki.hypr.land/Configuring/Basics/Variables/
hl.config({
    general = {
        gaps_in  = 5,
        gaps_out = 20,

        border_size = 2,

        col = {
            active_border   = { colors = { "rgba(33ccffee)", "rgba(00ff99ee)" }, angle = 45 },
            inactive_border = "rgba(595959aa)",
        },

        -- Set to true to enable resizing windows by clicking and dragging on borders and gaps
        resize_on_border = false,

        -- Please see https://wiki.hypr.land/Configuring/Advanced-and-Cool/Tearing/ before you turn this on
        allow_tearing = false,

        layout = "dwindle",
    },

    decoration = {
        rounding = 10,

        -- Change transparency of focused and unfocused windows
        active_opacity   = 1.0,
        inactive_opacity = 1.0,

        shadow = {
            enabled      = true,
            range        = 4,
            render_power = 3,
            color        = "rgba(1a1a1aee)",
        },

        blur = {
            enabled  = true,
            size     = 3,
            passes   = 1,

            vibrancy = 0.1696,
        },
    },

    animations = {
        enabled = true,
    },
})

-- Curves must be declared before any animation that references them.
-- See https://wiki.hypr.land/Configuring/Advanced-and-Cool/Animations/
hl.curve("easeOutQuint",   { type = "bezier", points = { { 0.23, 1 },    { 0.32, 1 } } })
hl.curve("easeInOutCubic", { type = "bezier", points = { { 0.65, 0.05 }, { 0.36, 1 } } })
hl.curve("linear",         { type = "bezier", points = { { 0, 0 },       { 1, 1 } } })
hl.curve("almostLinear",   { type = "bezier", points = { { 0.5, 0.5 },   { 0.75, 1.0 } } })
hl.curve("quick",          { type = "bezier", points = { { 0.15, 0 },    { 0.1, 1 } } })

hl.animation({ leaf = "global",        enabled = true, speed = 10,   bezier = "default" })
hl.animation({ leaf = "border",        enabled = true, speed = 5.39, bezier = "easeOutQuint" })
hl.animation({ leaf = "windows",       enabled = true, speed = 4.79, bezier = "easeOutQuint" })
hl.animation({ leaf = "windowsIn",     enabled = true, speed = 4.1,  bezier = "easeOutQuint", style = "popin 87%" })
hl.animation({ leaf = "windowsOut",    enabled = true, speed = 1.49, bezier = "linear",       style = "popin 87%" })
hl.animation({ leaf = "fadeIn",        enabled = true, speed = 1.73, bezier = "almostLinear" })
hl.animation({ leaf = "fadeOut",       enabled = true, speed = 1.46, bezier = "almostLinear" })
hl.animation({ leaf = "fade",          enabled = true, speed = 3.03, bezier = "quick" })
hl.animation({ leaf = "layers",        enabled = true, speed = 3.81, bezier = "easeOutQuint" })
hl.animation({ leaf = "layersIn",      enabled = true, speed = 4,    bezier = "easeOutQuint", style = "fade" })
hl.animation({ leaf = "layersOut",     enabled = true, speed = 1.5,  bezier = "linear",       style = "fade" })
hl.animation({ leaf = "fadeLayersIn",  enabled = true, speed = 1.79, bezier = "almostLinear" })
hl.animation({ leaf = "fadeLayersOut", enabled = true, speed = 1.39, bezier = "almostLinear" })
hl.animation({ leaf = "workspaces",    enabled = true, speed = 1.94, bezier = "almostLinear", style = "fade" })
hl.animation({ leaf = "workspacesIn",  enabled = true, speed = 1.21, bezier = "almostLinear", style = "fade" })
hl.animation({ leaf = "workspacesOut", enabled = true, speed = 1.94, bezier = "almostLinear", style = "fade" })

-- See https://wiki.hypr.land/Configuring/Layouts/Dwindle-Layout/ for more
-- `pseudotile` was removed in 0.55, it did nothing.
-- hl.config({
--     dwindle = {
--         preserve_split = true, -- You probably want this
--     },
-- })

-- See https://wiki.hypr.land/Configuring/Layouts/Master-Layout/ for more
hl.config({
    master = {
        new_status = "master",
    },
})

hl.config({
    misc = {
        force_default_wallpaper = -1,    -- Set to 0 or 1 to disable the anime mascot wallpapers
        disable_hyprland_logo   = false, -- If true disables the random hyprland logo / anime girl background. :(
    },
})


---------------
---- INPUT ----
---------------

hl.config({
    input = {
        kb_layout  = "es",
        kb_variant = "",
        kb_model   = "",
        kb_options = "",
        kb_rules   = "",

        follow_mouse = 1,

        sensitivity = 0, -- -1.0 - 1.0, 0 means no modification.

        touchpad = {
            natural_scroll = false,
        },
    },
})

-- hl.gesture({ fingers = 3, direction = "horizontal", action = "workspace" })

-- Per-device config: see https://wiki.hypr.land/Configuring/Advanced-and-Cool/Devices/
-- Add a `hl.device({ name = ... })` call here for real hardware if needed.


---------------------
---- KEYBINDINGS ----
---------------------

local mainMod = "SUPER" -- Sets "Windows" key as main modifier

-- Open programs
hl.bind(mainMod .. " + 1", hl.dsp.exec_cmd(ide))
hl.bind(mainMod .. " + 2", hl.dsp.exec_cmd(browser))
hl.bind("SUPER + SHIFT + S", hl.dsp.exec_cmd('grim -g "$(slurp)" ~/Pictures/screenshot_$(date +%s).png'))

-- Window switching with Alt + TAB
-- Native dispatcher now, no `hyprctl dispatch` subprocess needed.
hl.bind("ALT + TAB", hl.dsp.window.cycle_next())

-- Maximize window with Super
hl.bind(mainMod .. " + D", hl.dsp.window.fullscreen())

-- Move window left
hl.bind(mainMod .. " + left", hl.dsp.window.move({ direction = "left" }))

-- Move window right
hl.bind(mainMod .. " + right", hl.dsp.window.move({ direction = "right" }))

-- Change window to left monitor
hl.bind(mainMod .. " + SHIFT + left", hl.dsp.window.move({ workspace = 2 }))

-- Change window to right monitor
hl.bind(mainMod .. " + SHIFT + right", hl.dsp.window.move({ workspace = 1 }))

-- Open fast terminal
hl.bind("CTRL + code:49", hl.dsp.exec_cmd("pypr toggle term"))

-- See https://wiki.hypr.land/Configuring/Basics/Binds/ for more
-- Open terminal
hl.bind(mainMod .. " + Q", hl.dsp.exec_cmd(terminal))
-- Kill active window
-- hl.bind(mainMod .. " + C", hl.dsp.window.close())
hl.bind("ALT + F4", hl.dsp.window.close())
-- Open file manager, Dolphin
hl.bind(mainMod .. " + E", hl.dsp.exec_cmd(fileManager))
-- Opens wofi, like Windows R in Windows
hl.bind(mainMod .. " + R", hl.dsp.exec_cmd(menu))
-- Toggle Split
hl.bind(mainMod .. " + J", hl.dsp.layout("togglesplit")) -- dwindle

-- Requires playerctl
hl.bind("XF86AudioNext",  hl.dsp.exec_cmd("playerctl next"),       { locked = true })
hl.bind("XF86AudioPause", hl.dsp.exec_cmd("playerctl play-pause"), { locked = true })
hl.bind("XF86AudioPlay",  hl.dsp.exec_cmd("playerctl play-pause"), { locked = true })
hl.bind("XF86AudioPrev",  hl.dsp.exec_cmd("playerctl previous"),   { locked = true })

hl.bind("XF86AudioRaiseVolume", hl.dsp.exec_cmd("pactl set-sink-volume @DEFAULT_SINK@ +5%"), { locked = true })
hl.bind("XF86AudioLowerVolume", hl.dsp.exec_cmd("pactl set-sink-volume @DEFAULT_SINK@ -5%"), { locked = true })
hl.bind("XF86AudioMute",        hl.dsp.exec_cmd("env XDG_RUNTIME_DIR=/run/user/1000 /usr/bin/pactl set-sink-mute @DEFAULT_SINK@ toggle"), { locked = true })


--------------------------------
---- WINDOWS AND WORKSPACES ----
--------------------------------

-- See https://wiki.hypr.land/Configuring/Basics/Window-Rules/

-- Ignore maximize requests from apps. You'll probably like this.
-- hl.window_rule({
--     name  = "suppress-maximize-events",
--     match = { class = ".*" },
--     suppress_event = "maximize",
-- })

-- Fix some dragging issues with XWayland
-- hl.window_rule({
--     name  = "fix-xwayland-drags",
--     match = {
--         class      = "^$",
--         title      = "^$",
--         xwayland   = true,
--         float      = true,
--         fullscreen = false,
--         pin        = false,
--     },
--     no_focus = true,
-- })


------------------------------
---------- CUSTOM ------------
------------------------------

-- NVIDIA FAN

-- THEMES
-- require("themes.cyber.theme")  -- replaces the old `source=` keyword
-- sudo pacman -S mpvpaper hyprpaper
-- Wallpaper rotation handled by hyprpaper's native `timeout` directive in hyprpaper.conf (600s interval)
-- No external rotation script needed — hyprpaper rotates automatically.
-- hyprpaper keeps using hyprlang, only Hyprland itself moved to Lua.


---
-- hl.window_rule({
--     name  = "dropdown-term-border",
--     match = { class = "dropdown-term" },
--     border_color = { colors = { "rgba(33ccffee)", "rgba(00ff99ee)" }, angle = 45 },
-- })
-- (dropdown-term custom module no longer present in waybar config)
