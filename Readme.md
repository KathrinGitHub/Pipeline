# Pipeline

## Technologies used

- babel for build
- jest for tests
- docker for containerization

## Dockerfile

![](resources/Dockerfile.png)

The dockerfile is for the setup of the docker container. First the node version and the working directory are declared, then the dependencies and the code get copied. In the last step the port is exposed and the commands which the docker runs are declared.

## Yaml - file

![](resources/Yaml_file.png)

- on: gets run on every push to the master branch
- jobs: build and deploy jobs, jobs are executed seperately
- build: 
    - checks out the repository
    - sets up node version 18 and builds the dependencies
    - runs the build and tests
    - builds docker image
- deploy:
    - needs a finished build to work
    - simulates a deploy by just printing a string to the console

