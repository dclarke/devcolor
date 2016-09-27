# devcolor

# Prerequisites
You have installed docker / docker-machine (mac) 
https://docs.docker.com/engine/installation/
On a Mac you may also need to figure out how to setup port forwarding on virtual box. 
I have included a [setup image](https://github.com/dclarke/devcolor/setup.png), that shows how port forwarding should be configure.d 


# Demo1
The first demo attempts to show a basic Dockerfile, and how you can use it to start a server as well as run tests: 
## Getting the demo going
```
   docker-compose build
   docker-compose run test
   To make the test fail simply change the environment variable
   docker-compose run -e"SUT_HOST=foo" test
```

# Demo2 
A more complex scenario where you can run both functional tests against a service api, as well as run a load test. 

```
  cd demo2
  docker-compose build
  docker-compose -f docker-compose.yml run test
  docker-compose -f docker-compose.yml -f load/docker-load.yml run test
```
