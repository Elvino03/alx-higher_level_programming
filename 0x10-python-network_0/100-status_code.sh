#!/bin/bash
# sends a request to a URL, and displays only the status code of the response.
if [ $# -eq 0 ]; then
  echo "Error: URL argument missing."
  exit 1
fi

URL="$1"
STATUS_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$URL")

echo "Status code: $STATUS_CODE"
