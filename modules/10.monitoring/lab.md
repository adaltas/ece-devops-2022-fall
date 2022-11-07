
# Lab

The goal of this lab is to use Prometheus with Istio to record metrics that track the health of Istio and of applications within the service mesh. You will also visualize metrics using tools like Grafana and Kiali.

## Objectives

1. Quickstart with Istio
2. Route requests
3. Traffic shifting (canary rollout)

## Before starting

1. Install Minikube and start a Kubernetes cluster

After Minikube installation run:

- `minikube config set vm-driver virtualbox` (or `vmware`, or `kvm2`)
- `minikube start --memory=16384 --cpus=4 --kubernetes-version=v1.18.0`

**Note!** If you don’t have enough RAM to allocate to the minikube virtual machine then try to put the maximum you have on your laptop.

Reference - https://istio.io/docs/setup/platform-setup/minikube/

## 1. Quick start with Istio

Instructions - https://istio.io/docs/setup/getting-started/. (Do everything until [Next steps](https://istio.io/docs/setup/getting-started/#next-steps) section.)

**Results:**

- running [Bookinfo example application](https://istio.io/docs/examples/bookinfo/) and available at `http://$GATEWAY_URL/productpage` (where $GATEWAY_URL - is the specific IP and PORT for every deployment)
- running [Kiali dashboard](https://kiali.io/) with an overview of your mesh with the relationships between the services

![Kiali dashboard](image/kiali-example2.jpg)

## 2. Install and use Prometheus

Instructions - https://istio.io/latest/docs/ops/integrations/prometheus/

## 3. Install and use Grafana

Instruction - https://istio.io/latest/docs/ops/integrations/grafana/
