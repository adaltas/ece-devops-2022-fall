
# Lab

Container orchestration with Kubernetes

## Objectives

1. Install Minikube
2. Learn to use `kubectl` commands
3. Learn to expose a Kubernetes service to the outside
4. Learn to scale up and down a Kubernetes deployment
5. Run a multiple pod application in Kubernetes
6. Deploy an app using Manifest yaml files

## 1. Install **BETA VERSION** of Minikube

[Install Minikube](https://minikube.sigs.k8s.io/docs/start/) following the instructions depending on your OS. There is a useful bugfix in the BETA version so please choose that.

- Ensure Hyper-V is enabled on Windows with Powershell command `Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V-All` (right click powershell icon and select 'run as administrator' from the launch options)
- Set hyperv as your minikube container runtime with `minikube config set driver hyperv`
- Start Minikube with:
```
minikube start --driver=docker
```

Verify that everything is OK with:
```
minikube status
```

## 2. Learn to use `kubectl` commands

1. Open a terminal

2. Run a `deployment` with one `pod` with the following command:
   ```
   kubectl create deployment kubernetes-bootcamp --image=gcr.io/google-samples/kubernetes-bootcamp:v1
   ```
   `gcr.io/google-samples/kubernetes-bootcamp:v1` is a Docker image of a basic Node.js web application.
   
3. List all the running pods with:
   ```
   kubectl get pods
   ```
   Wait until Pod readiness reaches 1/1 and save the Pod name somewhere
   
4. Display the pod logs with:
   ```
   kubectl logs $POD_NAME
   ```
   
5. Run a command inside the pod with:
   ```
   kubectl exec $POD_NAME -- cat /etc/os-release
   ```
   
6. Open a shell inside the pod with:
   ```
   kubectl exec -ti $POD_NAME -- /bin/bash
   ```
   
7. List the content of the directory you are in and try to find the JavaScript source code file

8. Make sure that the web app is responding inside the container by querying it with `curl`

   > **Hint.** The port on which the app responds is defined in the `/server.js` JavaScript file
   
9. Are you able to query the web app outside of the pod (from your local machine)?

## 3. Learn to expose a Kubernetes service to the outside

1. Expose the deployment you created in the first part of the lab with:
   ```
   kubectl expose deployments/$DEPLOYMENT_NAME --type="NodePort" --port $PORT_NUMBER
   ```
   
   > **Hint.** You need to replace `$DEPLOYMENT_NAME` with the actual name of the `deployment` as well as `$PORT_NUMBER`
   
2. Find out on which port the service has been attached with:
   ```
   kubectl get services
   ```
3. Get the IP of your Minikube VM with:
   ```
   minikube ip
   ```
4. Using the answers of questions 2, 3 and 4, open your web browser and try to reach the web app.

> **Note!** If you are using Docker driver in Minikube, you can also create a tunnel to the cluster node (that is running as a Docker container). Run the following command (replace `$SERVICE_NAME` with your service name) but don't be concerned if it doesn't work. Port forwarding is fine:

   ```
   minikube service $SERVICE_NAME
   ```

## 4. Learn to scale up and down a Kubernetes deployment

1. Scale up your deployment to a total number of 5 pods with:
  ```
  kubectl scale deployments/kubernetes-bootcamp --replicas=5
  ```

2. Make sure that you have 5 pods running using one of the commands we have seen in part 2 of the lab. Which command did you use?

3. Open the exposed service through your web browser again.
   Force refresh a couple of times using `CTRL+F5`
   What is happening? Why?
   
4. Scale down again your deployment to 2 pods and confirm the other 3 are not running anymore.

## 5. Run a multiple pod application in Kubernetes

1. Prepare to hit `CTRL+F5` on your browser multiple times right after launching the following command:
2. Update the Docker image used by the `deployment` with:
   ```
   kubectl set image deployments/$DEPLOYMENT_NAME kubernetes-bootcamp=jocatalin/kubernetes-bootcamp:v2
   ```
3. What happened to the web page?
4. Update the Docker image used by the `deployment` again by setting the image to `jocatalin/kubernetes-bootcamp:v3`
5. List all of the running pods, what is happening here?
6. Cancel the previous operation by running:
   ```
   kubectl rollout undo deployments/kubernetes-bootcamp
   ```
7. Roll back the service to the image we first chose in part 2 of the lab.

## 6. Deploy an app using Manifest yaml files

1. Clean up what you did in the previous part with:
   ```
   kubectl delete service $SERVICE_NAME
   kubectl delete deployment $DEPLOYMENT_NAME
   ```
2. Using the [deployment documentation](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/), fill out the blank (`TO COMPLETE #1`) in [`./lab/deployment.yaml`](./lab/deployment.yaml) to define a deployment based on the one we ran in part 2.
3. Once you completed the file, run:
   ```
   kubectl apply -f deployment.yaml
   ```
   Are the pods running?
4. Using the [service documentation](https://kubernetes.io/docs/concepts/services-networking/service/), fill out the blank in [`./lab/service.yaml`](./lab/service.yaml)
5. Once you completed the file, run:
   ```
   kubectl apply -f service.yaml
   ```
   Can you access the service through your web browser?
6. Fill out `TO COMPLETE #2` inside [`./lab/deployment.yaml`](./lab/deployment.yaml) to create 3 replicas of your app.
7. Once you completed the file, run:
   ```
   kubectl apply -f deployment.yaml
   ```
   Force refresh on the browser a couple of times. Are you hitting different replicas?
