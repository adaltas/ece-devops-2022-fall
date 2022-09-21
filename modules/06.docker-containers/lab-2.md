
# Lab

Containers with Docker

## Objectives 

1. Install Docker
2. Write a `Dockerfile` and build a Docker image
3. Run a Docker container with multiple options
4. Share your Docker container with a classmate
5. Build and run a multiple container app with Docker Compose

## Useful links

- [Dockerfile best practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)

## Resources

**[`lab/hello-world-docker`](lab/hello-world-docker) directory contains:**
- `server.js` - the code for a simple "Hello World" [Node.js](https://nodejs.org/) web app
- `package.json` - describes the Node.js web app and its dependencies
- `Dockerfile` - describes the previous Node.js web app as a Docker container

**[`lab/hello-world-docker-compose`](lab/hello-world-docker-compose) directory contains:**
- `server.js` - the code for a simple "Hello World" [Node.js](https://nodejs.org/) web app
- `dbClient.js` - the module that creates a connection to Redis.
- `package.json` - describes the Node.js web app and its dependencies
- `Dockerfile` - describes the previous Node.js web app as a Docker container
- `docker-compose.yaml` - describes Docker Compose configuration

## 1. Install Docker

Before you can start the lab, you have to:
1. Install [Docker Desktop](https://www.docker.com/get-started) following the instructions depending on your OS.
2. Make sure your docker installation is working properly by running the following command in a terminal:
   ```
   docker run hello-world
   ```

## 2. Write a Dockerfile and build a Docker image

1. Open [`lab/hello-world-docker`](lab/hello-world-docker) directory and check out the `server.js`, `package.json` and `Dockerfile` files
2. Check out the explanations for each line in the Dockerfile from [the documentation](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#dockerfile-instructions) 
3. Build the docker container   
  1. Open a terminal (CMD or PowerShell for Windows)
  2. Navigate to the [`lab/hello-world-docker`](lab/hello-world-docker) directory in the cloned repository
  3. Run the following command:
     ```
     docker build -t hello-world-docker .
     ```
     - Don't forget the `.` at the end of the command. It is here to tell Docker it should look for the `Dockerfile` in the current directory. 
     - `-t` tag - to build container with the name you want (here `hello-world-docker`)
4. Check if your Docker container appears in the local Docker images:
   ```
   docker images
   ```

## 3. Run a Docker container with multiple options

1. Run the container with the following command:   
   ```
   docker run -p 12345:8080 -d hello-world-docker
   ```
   1. `-p` maps a port on your local machine to a port inside the container
   2. `-d` makes the container run in the background
2. Check if the container is running (and save the container ID) with the following command:
   ```
   docker ps
   ```
3. Open your web browser and go to `http://localhost:12345`
4. Print the logs of the container with:
   ```
   docker logs <CONTAINER_ID>
   ```
   where `CONTAINER_ID` - is the ID of the container.
3. Stop the container with:
   ```
   docker stop <CONTAINER_ID>
   ```

## 4. Share your Docker container with a classmate

1. Modify the message printed in the `server.js` (you can add your name for example)
2. Rebuild the Docker container (with a different name) with this modified code and see if you can run it, then navigate to the web app in your browser
3. Register on [Docker Hub](https://hub.docker.com/)
4. Tag your container with the following command:
   ```
   docker tag hello-world-docker <DOCKER_ACCOUNT_NAME>/<CUSTOM_IMAGE_NAME>
   ```
   where `DOCKER_ACCOUNT_NAME` - is your account on Docker Hub, `CUSTOM_IMAGE_NAME` - the custom name of the image.
5. Log in to Docker Hub from your terminal:
   ```
   docker login
   ```
6. Push the docker image to Docker Hub:
   ```
   docker push <DOCKER_ACCOUNT_NAME>/<CUSTOM_IMAGE_NAME>
   ```
7. See if you can find the image in your [repositories](https://hub.docker.com/repositories) in the Docker Hub
8. Ask a classmate to retrieve your Docker container and run it:
   ```
   docker pull <DOCKER_ACCOUNT_NAME>/<CUSTOM_IMAGE_NAME>
   docker run -p 12345:8080 -d <DOCKER_ACCOUNT_NAME>/<CUSTOM_IMAGE_NAME>
   ```

## 5. Build and run a multiple container app with Docker Compose

1. Docker Compose should be included in your Docker installation (on Windows and Mac at least). If not, install it using the official [instructions](https://docs.docker.com/compose/install/).
2. Navigate to the [`lab/hello-world-docker-compose`](lab/hello-world-docker-compose) directory and check out the `dbClient.js`, `server.js`, `package.json` and `Dockerfile` files.
3. Build the Docker image inside this directory with the name on your choice
4. Fill the missing part of the `docker-compose.yaml` file to make it use the container you just built. You can take inspiration from [that example](index.md#docker-compose-example).
5. Start the containers with `docker-compose up`
6. Visit `localhost:5000` in your web browser and hit refresh a couple of times
7. Stop the containers by running `CTRL+C` in the previous terminal
8. Delete the containers with:
   ```
   docker-compose rm
   ```
9. Start the containers again   
   1. What happened to the counter? Why?
   2. Delete the containers again
10. Make the necessary changes in the Docker compose file so that when you delete and create the containers again the counter keeps its value

**Hint**: Use [Docker Volumes](https://docs.docker.com/storage/volumes/), the Redis container stores its data in the `/data` directory

## Bonus tasks

1. Run WordPress with MySQL using Docker Compose
