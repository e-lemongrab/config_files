# Config_files

Public repo for configuration files used directly and also consumed by `myshell` through its `config_files` profile.

## Contents

### Firefox
- `firefox/user.js`
- privacy-focused Firefox profile defaults and notes about expected compatibility tradeoffs

Target location:
- Firefox profile directory: `~/.mozilla/firefox/<profile>/user.js`

### Home dotfiles
- `home/.vimrc`
- `home/.tmux.conf`
- `home/.inputrc`
- `home/.gitconfig`
- `home/.alacritty.toml`

Target locations:
- `~/.vimrc`
- `~/.tmux.conf`
- `~/.inputrc`
- `~/.gitconfig`
- `~/.alacritty.toml`

### Hyprland
- `hyprland/hyprland.conf`
- `hyprland/hyprpaper.conf`

Expected locations depend on your setup. This repository stores the source files, but deployment / copy / symlink strategy may be handled externally.

Recommended paths when deploying locally:
- `~/.config/hypr/hyprland.conf`
- `~/.config/hypr/hyprpaper.conf`

Hyprland notes:
- monitor definitions are reference values and may need local adjustment
- external programs such as IDE, browser, launcher/menu, and file manager are not a `myshell` integration contract; they are reference values and can be changed or removed locally
- screenshot output paths are local preference
- keyboard layout and other input preferences are local preference
- `hyprpaper.conf` is now the source of truth for wallpaper assignment and timed rotation through native `hyprpaper` config
- wallpaper handling is expected to run through `hyprpaper.service` instead of a custom rotation script
- NVIDIA fan control can also be deployed as a user service instead of being launched from `hyprland.conf`

### Services
- `services/nvidia/nvidia-fan.service`
- `services/nvidia/nvidiafan.sh`

Recommended paths when deploying locally:
- `~/.config/systemd/user/nvidia-fan.service`
- `~/.config/nvidia/nvidiafan.sh`

Service notes:
- `nvidia-fan.service` is a user service definition for NVIDIA fan control
- service scripts are versioned in this repo and can be deployed by consumer repos such as `myshell`

#### Service prerequisites

`nvidia-fan.service`:
- `nvidia-smi`
- `nvidia-settings`
- `sudo`
- `xhost`
- the deployed script path must match the service `ExecStart` path
- `sudo` for `nvidia-settings` must work non-interactively in the user-session context
- the service depends on the graphical session being ready; a startup delay is used to avoid race conditions at login

### WSL
- `wsl/.wslconfig`

Target location:
- Windows user profile: `%UserProfile%\\.wslconfig`

## Integration with `myshell`

This repository is also consumed by `myshell` through the `config_files` profile. In that model, `myshell` is the bootstrap / installer side, while this repository acts as the source of truth for the configuration files.

That means portability matters here: unnecessary machine-specific assumptions in these files can affect `myshell` installs too.

## Firefox `user.js`

This Firefox profile keeps `network.cookie.cookieBehavior = 1` for day-to-day compatibility.

It is intended to be used together with:
- NoScript
- Firefox Multi-Account Containers
- the anti-fingerprinting and partitioning settings already enabled in `firefox/user.js`

In this setup, privacy hardening does not rely on stricter cookie blocking alone, but on the combination of:
- `privacy.resistFingerprinting`
- `privacy.fingerprintingProtection`
- Firefox internal partitioning / isolation preferences
- container-based separation

### Notes on breakage / expected behavior

The profile intentionally blocks or restricts several browser capabilities.

Blocked or denied by default:
- camera
- microphone
- screen sharing
- geolocation
- desktop notifications
- WebXR / XR APIs

This can affect:
- browser-based video calls
- meeting tools that need mic or camera access
- screen sharing from the browser
- sites that request geolocation for maps or local results
- sites that rely on push / desktop notifications
- WebXR demos or browser VR / AR experiences

Additional privacy-hardening prefs already present in `firefox/user.js` may also affect behavior:
- `network.websocket.enabled = false` can impact some real-time web apps, chats, dashboards, terminals, collaborative tools, or similar live features
- `media.navigator.streams.fake = true` can cause unusual behavior in some media-capability checks or websites expecting normal camera / microphone failure modes
- DRM is disabled, so some protected streaming services may not work
- WebGL is disabled, so some 3D or graphics-heavy websites may not work correctly

This profile is intentionally opinionated and favors privacy / isolation over maximum website compatibility.

## Notes on machine-specific config

Some files in this repository may still contain personal or environment-specific paths. Where that happens, they should be treated as custom config, and ideally cleaned up over time if they are expected to be reused through `myshell` or on other machines.
