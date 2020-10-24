# Docker Containerized NodeJS Application
Sample project made to apply some of my knowledge on the Automation topic.

## Contains
  - Simple Express API that has one endpoint.
  - A test case made with Mocha & Chai.
  - Dockerfile to containerize the app with Docker.
  - Jenkinsfile pipline that performs the following steps:
    1. Clones this repo.
    2. builds then runs the test cases.
    3. Builds the Docker image.
    4. Pushes the image to a private repo on Docker Hub registry.

## Needs
  - Jenkins instance with the following plugins:
    - [NodeJS Jenkins Plugin](https://plugins.jenkins.io/nodejs/)
    <br>(install then follow the config instructions)
    - [Docker Pipeline Plugin](https://plugins.jenkins.io/docker-workflow/)
  - Private Docker Hub repository
    <br>(change ```registry``` variable inside Jenkinsfile)
  - Jenkins credentials entry with the ID: ```docker-cred```
  - New Jenkins pipeline job that pulls definition from git scm.
