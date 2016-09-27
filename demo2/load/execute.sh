#!/bin/sh 

val="/usr/bin/locust --host=http://$SUT_HOST:$SUT_PORT --no-web -n 1000 -r 30 -c 200 --only-summary" 
echo $val

eval $val
