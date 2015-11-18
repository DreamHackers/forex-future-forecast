#!/bin/bash

readonly PORT=3000
readonly HTTP_STATUS='%{http_code}\n'
readonly SUCCESS=200

function pm2_start() {
  pm2 start bin/www $2>/dev/null
  sleep 1
}

function error_check() {
  curl -LI --user 'dream:hackers' localhost:${PORT} -o /dev/null -w ${HTTP_STATUS} -s | grep ${SUCCESS} $2>/dev/null
}

pm2_start
error_check
echo $?
