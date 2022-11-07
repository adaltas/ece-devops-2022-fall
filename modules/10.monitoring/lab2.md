
# Lab

The goal of this lab is to setup a Prometheus database and connect it to various applications.

At the end of the workshop you will also connect a vizualisation tool to your Prometheus server to get insight on your monitoring. 

## Ressources

- The official Prometheus website: https://prometheus.io/
- The Prometheus repo: https://github.com/prometheus/prometheus
- The Express framework repo: https://github.com/expressjs/express to make a REST api quickly

## Objectives

1. Setup prometheus & monitor an app

## 1. Setup prometheus & monitor an app

1. Setup a prometheus server with Docker Compose

  - Make sure the ports are properly forwarded
  - Find a way to keep your prometheus configuration on restart

2. Monitor the GitLab instance on your machine

  - Prometheus should contact the gitlab server and pull its status
  - You should be able to see the the status of the Gitlab on prometheus

## 2. Write a small app and monitor it

1. Write a (really) small app that exposes a REST api with a single
endpoint which return the app state.

2. (Optionally) The application can check a database is online and give
information about this database on an endpoint. (This requires to start
another docker-compose with an empty database)

3. (Optionally) Write tests for this application using the testing framework of
your choice.

4. Monitor this application with Prometheus

## 3. See your monitoring

1. Start a Grafana container (using docker-compose)

2. Link it to the prometheus server and display the monitored applications

3. Create alerts and trigger them by shutting down your applications.
