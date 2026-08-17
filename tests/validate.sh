#!/usr/bin/env bash
# config_files validation gate — run from anywhere: bash tests/validate.sh
# Checks: shellcheck the scripts, JSON validity, user.js syntax, and a PUBLIC-repo secret guard.
set -uo pipefail
cd "$(dirname "$0")/.." || exit 1

fails=0
fail() { printf 'FAIL: %s\n' "$1"; fails=$((fails + 1)); }

# ── 1. shell scripts: syntax + shellcheck ──
mapfile -t scripts < <(find . -path ./.git -prune -o -name '*.sh' -print)
for f in "${scripts[@]}"; do bash -n "$f" 2>/dev/null || fail "syntax: $f"; done
if command -v shellcheck >/dev/null 2>&1; then
  shellcheck -S warning "${scripts[@]}" || fail "shellcheck"
  echo "[1/5] shellcheck done"
else
  echo "[1/5] WARN: shellcheck not installed, skipped"
fi

# ── 2. JSON validity (strict .json only; waybar 'config' may be JSONC, skipped) ──
if command -v python3 >/dev/null 2>&1; then
  while IFS= read -r j; do
    python3 -c "import sys,json; json.load(open(sys.argv[1]))" "$j" 2>/dev/null || fail "invalid JSON: $j"
  done < <(find . -path ./.git -prune -o -name '*.json' -print)
  echo "[2/5] json valid"
else
  echo "[2/5] WARN: python3 not installed, JSON check skipped"
fi

# ── 3. user.js syntax (they are JS files of user_pref() calls) ──
if command -v node >/dev/null 2>&1; then
  for j in firefox/user.js betterbird/user.js; do
    [ -f "$j" ] || continue
    node --check "$j" 2>/dev/null || fail "user.js syntax: $j"
  done
  echo "[3/5] user.js syntax ok"
else
  echo "[3/5] WARN: node not installed, user.js check skipped"
fi

# ── 4. Lua syntax (Hyprland 0.57+ config format) ──
luac_bin=""
for c in luac luac5.4 luac5.3 luajit; do command -v "$c" >/dev/null 2>&1 && { luac_bin="$c"; break; }; done
if [ -n "$luac_bin" ]; then
  while IFS= read -r l; do
    if [ "$luac_bin" = "luajit" ]; then
      luajit -bl "$l" /dev/null >/dev/null 2>&1 || fail "lua syntax: $l"
    else
      "$luac_bin" -p "$l" >/dev/null 2>&1 || fail "lua syntax: $l"
    fi
  done < <(find . -path ./.git -prune -o -name '*.lua' -print)
  echo "[4/5] lua syntax ok ($luac_bin)"
else
  echo "[4/5] WARN: no lua compiler installed, lua check skipped"
fi

# ── 5. PUBLIC-repo secret guard: no private keys committed ──
if grep -rlE 'BEGIN (OPENSSH|RSA|EC|DSA|PGP)? ?PRIVATE KEY' . --exclude-dir=.git 2>/dev/null | grep -q .; then
  fail "private key material committed (this is a PUBLIC repo)"
else
  echo "[5/5] no private keys committed"
fi

echo ""
if [ "$fails" -eq 0 ]; then echo "OK — all checks passed"; else echo "$fails check(s) FAILED"; exit 1; fi
