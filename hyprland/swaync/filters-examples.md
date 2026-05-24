# SwayNC filters examples

## Base

In config.json, this line means: receive everything.

"notification-visibility": {}

## Mute an app

It should not show a popup, but it may still appear in the notification center.

"notification-visibility": {
  "thunderbird-muted": {
    "state": "muted",
    "app-name": "Thunderbird"
  }
}

## Ignore an app completely

It will not appear as a popup or in the notification history.

"notification-visibility": {
  "some-app-ignored": {
    "state": "ignored",
    "app-name": "some-app"
  }
}

## Real Thunderbird values seen with dbus-monitor

app-name: Thunderbird
desktop-entry: org.mozilla.Thunderbird

## States

muted = silenced / less intrusive
ignored = completely blocked
