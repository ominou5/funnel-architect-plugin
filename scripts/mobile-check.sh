#!/bin/bash
# mobile-check.sh — Validates mobile responsiveness of HTML files
# Receives hook JSON input on stdin, checks the edited file for mobile patterns

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // .tool_input.TargetFile // empty')

# Only check HTML files
if [[ -z "$FILE_PATH" ]] || [[ "$FILE_PATH" != *.html ]]; then
  exit 0
fi

# Check if file exists
if [[ ! -f "$FILE_PATH" ]]; then
  exit 0
fi

ISSUES=()

# Check for viewport meta tag
if ! grep -qi 'name="viewport"' "$FILE_PATH" 2>/dev/null; then
  ISSUES+=("Missing viewport meta tag: add <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">")
fi

# Check for fixed widths that break mobile
if grep -qE 'width:\s*[0-9]{4,}px' "$FILE_PATH" 2>/dev/null; then
  ISSUES+=("Found fixed widths over 999px — these will break on mobile. Use max-width, %, or vw units instead")
fi

# Check for horizontal scroll risk (fixed position elements with large widths)
if grep -qE 'position:\s*fixed.*width:\s*[0-9]+px' "$FILE_PATH" 2>/dev/null; then
  ISSUES+=("Fixed position elements with pixel widths may cause horizontal scroll on mobile")
fi

# Check for touch target sizes (buttons/links smaller than 44px)
if grep -qiE '<button|<a ' "$FILE_PATH" 2>/dev/null; then
  if grep -qE 'font-size:\s*[0-9]px|font-size:\s*1[01]px' "$FILE_PATH" 2>/dev/null; then
    ISSUES+=("Small font sizes detected — ensure touch targets are at least 44x44px for mobile accessibility")
  fi
fi

# Check for responsive images
if grep -qi '<img' "$FILE_PATH" 2>/dev/null; then
  if ! grep -qiE 'srcset|max-width:\s*100%|width:\s*100%' "$FILE_PATH" 2>/dev/null; then
    ISSUES+=("Images may not be responsive — consider adding max-width: 100% or srcset for responsive images")
  fi
fi

# Report results
if [ ${#ISSUES[@]} -eq 0 ]; then
  echo "{\"systemMessage\": \"✅ Mobile check passed for $(basename "$FILE_PATH")\"}"
else
  ISSUE_TEXT=$(printf '• %s\\n' "${ISSUES[@]}")
  echo "{\"systemMessage\": \"⚠️ Mobile issues in $(basename "$FILE_PATH"):\\n${ISSUE_TEXT}\"}"
  exit 1
fi
