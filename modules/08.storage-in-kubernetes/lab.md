
# Lab

## Objectives

1. Use `emptyDir` storage
2. Use `hostPath` storage
3. Use PersistentVolume

## Before starting

Before starting the lab, you have to:

1. Install [Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/) following the instructions depending on your OS.

2. Start Minikube with:

```
minikube start
```

3. Verify that everything is OK with:

```
minikube status
```

4. Clone the current Git repository and go to [`lab/`](lab/).

## 1. Use `emptyDir` storage

1. Complete the [`lab/emptyDir/deployment.yml`](lab/emptyDir/deployment.yml) file.

References:
- `emptyDir` usage - https://kubernetes.io/docs/concepts/storage/volumes/#emptydir
- Nginx Docker image usage - https://hub.docker.com/_/nginx

> **Hint.** Nginx will start an HTTP web server and respond with the content of HTML files located in `/usr/share/nginx/html` directory.

2. Run a pod applying configuration:

```
kubectl apply -f lab/emptyDir/deployment.yml
```

3. Enter to a container and `curl` localhost

List all the pods and find a name of a created pod

```
kubectl get pods
```

Enter to the container:

```
kubectl exec -it <POD_NAME> bash
```

Run `curl localhost` (or `curl localhost/index.html`, because by default of Nginx will point to `index.html` if you do not specify the filename)

It will output the page of the 403 error if there is no `index.html` file to respond with:

```html
<html>
<head><title>403 Forbidden</title></head>
<body>
<center><h1>403 Forbidden</h1></center>
<hr><center>nginx/1.19.2</center>
</body>
</html>
```

Or it outputs the content of the file `index.html` if there is one:

```html
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
<style>
    body {
        width: 35em;
        margin: 0 auto;
        font-family: Tahoma, Verdana, Arial, sans-serif;
    }
</style>
</head>
<body>
<h1>Welcome to nginx!</h1>
<p>If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.</p>

<p>For online documentation and support please refer to
<a href="http://nginx.org/">nginx.org</a>.<br/>
Commercial support is available at
<a href="http://nginx.com/">nginx.com</a>.</p>

<p><em>Thank you for using nginx.</em></p>
</body>
</html>
```

4. Create `index.html` file with some content **inside a container**

Being inside the container, run:
```
echo 'Hello from Kubernetes storage!' > /usr/share/nginx/html/index.html
```

Now, by running `curl localhost` it will output:

```
Hello from Kubernetes storage!
```

5. Verify

- When a **Pod is removed** from a node for any reason, the data in the `emptyDir` is deleted forever.   
  You can remove a pod using Kubernetes Dashboard that is started with `minikube dashboard` command or `kubectl delete pod/<POD_NAME>`.

- When a **container in a Pod is removed**, Kubernetes will create a new container and will mount the existing `emptyDir` volume to it.   
  Learn the Container ID with the command `kubectl describe pod/<POD_NAME>`. Then you can enter to Minikube Node with `minikube ssh` and manually remove the container with `docker rm -f CONTAINER_ID`.

## 2. Use `hostPath` storage

1. Complete the [`lab/hostPath/deployment.yml`](lab/hostPath/deployment.yml) file.

Use `/mnt/hostPath/` folder as the path on your virtual node file system.

References:
- `hostPath` usage - https://kubernetes.io/docs/concepts/storage/volumes/#hostpath

2. Run a pod applying configuration:

```
kubectl apply -f lab/hostPath/deployment.yml
```

Ensure that `curl localhost` responds with 403 error (step 3 in the previous task).

3. Create `/mnt/hostPath/index.html` file with some content **inside a VM**

Enter the VM with `minikube ssh` command. Then run:

```
sudo mkdir /mnt/hostPath
sudo chmod -R 777 /mnt/hostPath
sudo echo 'Hello from Kubernetes storage!' > /mnt/hostPath/index.html
```

Make sure you have successfully written to file: `cat /mnt/hostPath/index.html`

Run `curl localhost` from the container (not from the VM). It will output:

```
Hello from Kubernetes storage!
```

4. Verify

- When a **Pod is removed** from a node for any reason, the data in the `hostPath` will still remain.
- When multiple replicas of a **Pod** are created, they all bind to the same volume.   
  You can configure many replicas using `spec.replicas` parameter in the deployment configuration yaml file.

## 3. Use PersistentVolume

Reference to this tutorial and reproduce all of the steps - https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/

## Bonus tasks

1. Configure a Pod to use Secret - https://kubernetes.io/docs/concepts/configuration/secret/
2. Configuring Redis using a ConfigMap - https://kubernetes.io/docs/tutorials/configuration/configure-redis-using-configmap/
