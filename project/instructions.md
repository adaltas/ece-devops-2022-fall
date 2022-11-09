# Project

## Deadline

*Will define this later*

## Opportunities

1. The DevOps project is based on all of the labs passed during the course, it is allowed to use them.

2. Work on the project can be carried out and presented by 1 or 2 students.

## Instructions

### 1. Create a web application

Create a web application on any programming language (NodeJS, Java, Ruby, Python, etc.), storing data in a database (Redis, MongoDB, MySQL, ...) and cover it with tests of different levels.

**Are proposed:**

- a little user API application with [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) user functionality
- storage in Redis database
- tests: unit, API, configuration, connection.
- health check endpoint ensuring an application is functional

**Note!** You are allowed to use the draft application located in the [courses/devops/modules/03.continuous-testing/lab](courses/devops/modules/03.continuous-testing/lab) folder, but you have to enrich it by **at least** completing all comment sections marked "TODO". You can also use the more complete version in: [Userapi in Corrections](https://github.com/adaltas/ece-devops-2022-fall-corrections/tree/main/userapi)

### 2. Apply CI/CD pipeline 

Configure and apply CI/CD (including deployment) pipeline using any platforms (GitHub Actions, GitLab CI/CD, Jenkins, Netlify, Heroku, etc.).

**Note!** If the chosen deployment platform (like Heroku) requires a subscription to make use of their database service to connect to your app, you can skip using this service. In this case, your application won't be running properly, but it must successfully display the homepage. 

### 3. Configure and provision a virtual environment and run your application using the IaC approach

1. Configure with Vagrant: 1 VM running on any Linux distribution 
2. Provision the VM with Ansible, which includes installing and running:
  - language runtime
  - database
  - your application (use [sync folders](https://www.vagrantup.com/docs/synced-folders))
  - health check of your application

### 4. Build Docker image of your application

1. Create a Docker image of your application
2. Push the image to Docker Hub

**Note!** You must [ignore](https://docs.docker.com/engine/reference/builder/#dockerignore-file) all the files and folders that do not need to be included in the image.

### 5. Make container orchestration using Docker Compose

1. Create `docker-compose.yml` file that will start your application

### 6. Make docker orchestration using Kubernetes

1. Install Kubernetes cluster using Minikube
2. Create Kubernetes Manifest YAML files:
  - deployments
  - services
  - persistent volume and persistent volume claim

### 7. Make a service mesh using Istio

1. Deploy your application using Istio
2. Create configuration:
  - route requests between 2 different versions of your app
  - traffic shifting between 2 different versions of your app
  
### 8. Implement Monitoring to your containerized application

1. Install Prometheus and Grafana to your K8s cluster

2. Set up monitoring with Prometheus:

  - Prometheus should contact the application (eg. health check endpoint) and pull its status
  - You should be able to see the status of the application on Prometheus

3. Set up monitoring with Grafana:

  - Link it to the Prometheus server and display the monitored applications
  - Create alerts and trigger them by shutting down your applications.

> Note. You can imagine something different and set up monitoring (eg. memory usage, CPU time, ...)

### 9. Document your project 

Write a sort of report in the `README.md` file which includes the following:

1. List all the work performed (briefly, describing features and bonus tasks).

2. Screenshots (pictures of your screen when you are running a web page, K8s resources, VMs, etc... Provide maximum screenshots)

> Tip. Keep screenshots in a separate folder. Ex.: see how pictures are linked in the `index.md` files of the modules.

3. Provide instructions (commands) of how to:
  - Install (or prepare environment)
  - Use (your application, run your Docker container or Docker Compose cluster, on K8s cluster, ...)
  - Test (your application)
  
4. All the necessary links with the platforms and tools integrated:
  - Heroku
  - Docker Hub
  - ...
  
5. Author

6. Other additional info that you want to include...

> **Note!** Use the correct Markdown syntax to keep your `README.md` file looking good.

## Structure

Here is an example structure of your project repository:

```
.github/
labs/
  lab-5
  lab-6
  lab-7
userapi/
  src/
  test/
  conf/
  CHANGELOG.md
  package.json
  Dockerfile
  ...
iac/
  Vagrantfile
  playbooks/
k8s/
istio/
image/
README.md
docker-compose.yaml
...
```

## How to get bonuses?

Every initiative will be counted, just don't forget to describe it in your `README.md`.

List of bonus tasks proposed:

1. Use different tools and platforms instead of what has been passed in the labs, for example, GitLab CI/CD, Netlify, etc. This will give you a bigger overview of technologies.
2. Use different languages (Java, Ruby, Python, etc.) to develop the application of part 1.
3. If you use the NodeJS application provided in the [modules/04.ct-ci-cd/assets/userapi](modules/04.ct-ci-cd/assets/userapi) folder, bring it with additional features:
  - more different API methods
  - more different unit/functional/integration tests
  - using another database (like MongoDB, MySQL, ...)
  - integrate a documenting package to your source code, for example, [Swagger UI](https://www.npmjs.com/package/express-swagger-generator)
4. Any Kubernetes tasks from [this list](https://kubernetes.io/docs/tasks/). 
5. [Securing microservice communication](https://istio.io/latest/docs/tasks/security/) or any other task with Istio.
6. Etc.

## How to send a project for evaluation?

1. **ATTENTION!** Make sure your repository is **PRIVATE** and **you have sent an invitation** to teacher's GitHub account - https://github.com/gonzaloetjo. Otherwise, **if it isn't PRIVATE the final grade will be reduced to 0**.

2. After you have sent the invitation, send an email to [gonzaloetjo@gmail.com](mailto:gonzaloetjo@gmail.com) containing the following:

  - **Subject format:** "DSTI - DevOps project - \<LASTNAME Firstname\> - \<Group number (ex: SI03)\>"
  - **Message:**
    - **The link to the repository** on GitHub/GitLab
    - List of authors and **the group number**

## Grading system

| Subject                                                         |   Code    | Max. grade|
|:----------------------------------------------------------------|:---------:|:---------:|
| Enriched web application with automated tests                   |   APP     |    +1     |
| Continuous Integration and Continuous Delivery (and Deployment) |   CICD    |    +3     |
| Containerisation with Docker                                    |   D       |    +1     |
| Orchestration with Docker Compose                               |   DC      |    +2     |
| Orchestration with Kubernetes	                                  |   KUB     |    +3     |
| Service mesh using Istio                                        |   IST     |    +2     |
| Infrastructure as code using Ansible                            |   IAC     |    +3     |
| Monitoring                                                      |   MON     |    +2     |
| Accurate project documentation in README.md file                |   DOC     |    +3     |
| Each bonus task                                                 |   BNS     |    +1     |
| Each penalty                                                    |   PNL     |    -1     |

It is also taken into account:

- richness of the commit history
- accuracy and purity of the project (descriptions, source code, files structure)
- activity during course sessions
