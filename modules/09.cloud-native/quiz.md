# Quiz

## 1. Choose correct option(s) where "web" service is accessible and "redis" service attaches data.

1. You have the following docker-compose.yml file:

```yaml
version: "3.8"
services:
  web:
    build: .
    ports:
      - "3000:5000"
  redis:
    image: redis
    volumes:
      - /usr/data:/data
```

1. On host: URL - `localhost:3000`, folder - `/usr/data`
2. On host: URL - `localhost:5000`, folder - `/data`
3. In container: URL - `localhost:3000`, folder - `/data`
4. In container: URL - `localhost:5000`, folder - `/usr/data`


## 2. Which Kubernetes Volume type(s) can be used for stateful services?

1. `emptyDir`
2. `hostPath`
3. `nfs`
4. `persistentVolumeClaim`

## 3. Which statement(s) is(are) correct when applying the following manifest file:

3. You have the following manifest file:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: hello
spec:
  selector:
    matchLabels:
      app: hello
  replicas: 6
  template:
    metadata:
      labels:
        app: hello
    spec:
      containers:
        - name: hello
          image: nginx
          ports:
            - name: http
              containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: hello
spec:
  type: NodePort
  selector:
    app: hello
  ports:
  - port: 80
```

1. It creates 6 Deployments, 1 Pod, 1 Service
2. We don't manage what port of a worker node is allocated to Nginx web server
3. Nginx web server is accessible on `localhost:80` from Kubernetes cluster
4. The service "hello" is stateless
