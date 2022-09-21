
# Lab

Containers with Docker

## Objectives 

1. Build a docker image and run a container
2. Use docker volumes

## 1. Build a docker image and run a container

**1. Configure the Docker image**

Create a `Dockerfile` (without any extension) under the root of your project.

Example:

```
FROM node:12

WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
```

**2. Build a docker image (don't forget a dot at the end of the command)**

```
docker build -t <docker-account-name>/<custom-image-name> .
```

**3. Run docker container**

```
docker run -p <PORT_1>:<PORT_2> <docker-account-name>/<custom-image-name>
```

Binding ports ([more info](https://runnable.com/docker/binding-docker-ports)):

- `PORT_1` - an external port which will be listened by you host
- `PORT_2` - en internal port inside the container

**4. Test your running app on `http://localhost:<PORT_1>`**

## 2. Use docker volumes

1. Run your docker container with the option `-v`

```
docker run -p [PORT_1]:[PORT_2] -v <path_to_dir_on_your_host>:<path_to_dir_inside_container> <your name>/<image name>
```

Binding volumes ([more info](https://docs.docker.com/storage/bind-mounts/)):

- `path_to_dir_on_your_host` - where you want to allocate your file storage
- `path_to_dir_inside_container` - where is located your storage inside the container

2. Test your running app on `http://localhost:<PORT_1>`

3. Create users and check your storage directory `path_to_dir_on_your_host`

4. Run one more container with different `PORT_1` and the same `path_to_dir_on_your_host`, then test how the both containers are shearing one volume.
