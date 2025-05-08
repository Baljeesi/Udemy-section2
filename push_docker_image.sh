#!/bin/bash
git pull
sudo docker build -t docker-deployment .
#create a docker hub account before pushing image to docker hub
#make sure you did docker login with docker command "sudo docker login"
sudo docker tag react-nginx sagarkakkalasworld/docker-deployment
sudo docker push sagarkakkalasworld/docker-deployment
