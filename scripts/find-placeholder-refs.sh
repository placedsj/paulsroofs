#!/usr/bin/env bash
set -e

# Search for common placeholder image hosts / keywords
grep -R --line-number --ignore-case "placehold\|picsum\.photos\|placehold\.co\|postimg\.cc\|postimg\.cc" || true
