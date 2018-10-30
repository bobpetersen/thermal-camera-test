#!/bin/bash
sudo kill -9 `ps ax | grep -i "python ./thermal-daemon" | awk '{print $1}' | xargs` 2> /dev/null;