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
  echo "[1/4] shellcheck done"
else
  echo "[1/4] WARN: shellcheck not installed, skipped"
fi

# ── 2. JSON validity (strict .json only; waybar 'config' may be JSONC, skipped) ──
if command -v python3 >/dev/null 2>&1; then
  while IFS= read -r j; do
    python3 -c "import sys,json; json.load(open(sys.argv[1]))" "$j" 2>/dev/null || fail "invalid JSON: $j"
  done < <(find . -path ./.git -prune -o -name '*.json' -print)
  echo "[2/4] json valid"
else
  echo "[2/4] WARN: python3 not installed, JSON check skipped"
fi

# ── 3. user.js syntax (they are JS files of user_pref() calls) ──
if command -v node >/dev/null 2>&1; then
  for j in firefox/user.js betterbird/user.js; do
    [ -f "$j" ] || continue
    node --check "$j" 2>/dev/null || fail "user.js syntax: $j"
  done
  echo "[3/4] user.js syntax ok"
else
  echo "[3/4] WARN: node not installed, user.js check skipped"
fi

# ── 4. PUBLIC-repo secret guard: no private keys committed ──
if grep -rlE 'BEGIN (OPENSSH|RSA|EC|DSA|PGP)? ?PRIVATE KEY' . --exclude-dir=.git 2>/dev/null | grep -q .; then
  fail "private key material committed (this is a PUBLIC repo)"
else
  echo "[4/4] no private keys committed"
fi

echo ""
if [ "$fails" -eq 0 ]; then echo "OK — all checks passed"; else echo "$fails check(s) FAILED"; exit 1; fi
