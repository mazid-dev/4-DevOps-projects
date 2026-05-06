# 📘 Combined DevOps Projects (1, 2 & 3)

This repository contains the first three foundational DevOps projects covering Docker, Kubernetes, and Helm. These projects demonstrate containerization, orchestration, and deployment automation using modern DevOps tools.

---

# 🐳 Project 1: Docker + Docker Compose (Visitor Counter with Redis)

## 🎯 Objective

* Containerize a Node.js application and Redis database
* Use Docker Compose to run multi-container applications
* Understand container networking and service communication

---

## 🛠 What I Built

* Built a Node.js (Express) Visitor Counter application
* Used Redis to store visitor counts
* Created a production-style Dockerfile (node:18-alpine)
* Configured Docker Compose to run app + Redis together

---

## 📁 Project Structure

```bash
project1-docker/
├── app/
│   ├── package.json
│   ├── server.js
│   └── Dockerfile
└── docker-compose.yml
```

---

## 📚 Key Learnings

* Writing Dockerfiles (FROM, WORKDIR, COPY, RUN, CMD)
* Docker CLI commands (build, run, logs, exec)
* Multi-container orchestration using Docker Compose
* Container networking and environment variables

---

## 🚀 How to Run

```bash
cd project1-docker
docker-compose up --build
```

Open:

```text
http://localhost:3000
```

---

## ✅ Verification

```bash
docker ps
curl http://localhost:3000/health

```

---

# ☸️ Project 2: Kubernetes (Minikube) – Visitor Counter Deployment

## 🎯 Objective

* Deploy application on a Kubernetes cluster
* Understand Pods, Deployments, and Services
* Learn kubectl for cluster management

---

## 🛠 What I Built

* Pushed Docker image to Docker Hub
* Created Kubernetes manifests (Deployment, Service, Redis)
* Deployed application on Minikube cluster
* Performed scaling and testing

---

## 📁 Project Structure

```bash
project2-kubernetes/
├── deployment.yaml
├── service.yaml
└── redis-deploy.yaml
```

---

## 📚 Key Learnings

* Kubernetes core concepts: Pod, Deployment, Service, ReplicaSet
* kubectl commands (apply, get, describe, logs, scale)
* NodePort service exposure
* Liveness probe usage

---

## 🚀 How to Run

```bash
minikube start --driver=docker

kubectl apply -f redis-deploy.yaml
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

minikube service visitor-service
```

---

## ✅ Verification

```bash
kubectl get pods
kubectl logs <pod-name>
kubectl scale deployment visitor-app --replicas=3
```

---

# 📦 Project 3: Helm – Visitor Counter Packaging

## 🎯 Objective

* Package Kubernetes manifests using Helm
* Make deployments reusable and configurable
* Learn Helm release lifecycle management

---

## 🛠 What I Built

* Created Helm chart using `helm create`
* Customized deployment, service, and Redis templates
* Used `values.yaml` for configuration management
* Tested install, upgrade, and rollback workflows

---

## 📁 Project Structure

```bash
project3-helm/
└── visitor-chart/
    ├── Chart.yaml
    ├── values.yaml
    └── templates/
        ├── deployment.yaml
        ├── service.yaml
        └── redis-deployment.yaml
```

---

## 📚 Key Learnings

* Helm chart structure and best practices
* Go templating syntax (`{{ .Values.* }}`)
* Helm commands (install, upgrade, rollback, uninstall)
* Environment-based configuration management

---

## 🚀 How to Run

```bash
helm install my-visitor ./visitor-chart

helm upgrade my-visitor ./visitor-chart --set replicaCount=3

helm rollback my-visitor 1

helm uninstall my-visitor
```

---

## ✅ Verification

```bash
kubectl get pods
helm list
helm history my-visitor
```

---

# 📌 Final Summary

These three projects together build a strong DevOps foundation:

| Project          | Skills Learned                          |
| ---------------- | --------------------------------------- |
| Docker + Compose | Containerization & Multi-container apps |
| Kubernetes       | Orchestration & Cluster Management      |
| Helm             | Packaging & Deployment Automation       |

---

## 🚀 Outcome

By completing these projects, I gained hands-on experience in:

* Containerization (Docker)
* Orchestration (Kubernetes)
* Infrastructure packaging (Helm)
* Real-world DevOps workflows

---

## 👨‍💻 Author

**Md Mazid Hossain**

---

## 🧰 Tech Stack

Docker | Kubernetes | Helm | Minikube | Redis | Node.js

---

##
