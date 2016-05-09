#!/bin/bash

ab -p postdata -T application/json -c 10 -n 1000 -e benchmark.csv http://localhost:3000/find