#!/bin/bash

ab -p postdata -T application/json -c 100 -n 20000 http://localhost:3000/find