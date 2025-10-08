#!/bin/bash

# Copy public and static files to standalone directory
if [ -d "public" ]; then
  cp -r public .next/standalone/
fi

if [ -d ".next/static" ]; then
  cp -r .next/static .next/standalone/.next/
fi

# Start the standalone server
PORT=5000 HOSTNAME=0.0.0.0 node .next/standalone/server.js
