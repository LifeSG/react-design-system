#!/bin/sh
set -eu

cat > /tmp/launch-server-config.json << 'EOF'
{
  "port": 3011,
  "host": "0.0.0.0",
  "wsPath": "/custom-font",
  "headless": true,
  "args": ["--blink-settings=defaultFontSize=16,minimumFontSize=24"]
}
EOF

npx -y playwright@1.58.2 launch-server --browser chromium --config /tmp/launch-server-config.json
