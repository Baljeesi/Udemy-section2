# 🚀 Dockerizing a React Application on AWS EC2

This guide will help you Dockerize a React application and deploy it on an AWS EC2 instance.

---

## 🐳 Docker Installation

We'll start by installing Docker on our AWS EC2 instance.

```bash
cat /etc/os-release
````

---

## 🧹 Remove Existing Docker and Conflicting Packages

```bash
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
```

---

## 📦 Install Docker Prerequisites

```bash
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

---

## ➕ Add Docker Repository to Apt Sources

```bash
echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
$(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update
```

---

## ⚙️ Install Latest Docker

```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

---

## ✅ Verify Docker Installation

```bash
docker --version
```

---

## 🔁 Recap of Previous Steps (Part 1)

1. Installed Git
2. Cloned Git repository
3. Installed Node.js
4. Installed npm
5. Built React code using `npm run build`
6. Installed Nginx and copied build to Nginx path

Now, we’ll use Docker to automate and package everything into an image.

---

## 📥 Clone Your React Project

```bash
git clone https://github.com/sagarkakkalasworld/Udemy-section2.git
```

---

## 🚧 Build React Project

```bash
cd Udemy-section2
npm install
ls
npm run build
```

> ⚠️ Note: The build process might take some time. Warnings can be safely ignored.

---

## 📝 Dockerfile Content

Create a file named `Dockerfile` and add the following content:

```Dockerfile
FROM nginx:alpine

COPY build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

> ✅ You can reuse this Dockerfile for any React project.

---

## 🏗️ Build the Docker Image

```bash
sudo docker build -t  ci-cd-deployment .
```

> `-t` tags the image as `docker-deployment`.

```bash
sudo docker images
```

---

## 🚀 Deploy the Docker Container

```bash
sudo docker run --name react-docker-deployment -p 80:80 -d ci-cd-deployment
```

* `--name`: Names the container
* `-p`: Maps host port 80 to container port 80
* `-d`: Runs in detached mode

---

## 🧪 Check Running Containers

```bash
sudo docker ps
```

---

## 📤 Push Docker Image to Docker Hub

1. Create an account at [Docker Hub](https://hub.docker.com)
2. Create a new public repository
3. Login from EC2 instance:

```bash
sudo docker login
```

4. Tag and push your image (replace `sagarkakkalasworld` with your Docker Hub username):

```bash
sudo docker tag ci-cd-deployment sagarkakkalasworld/ci-cd-deployment
sudo docker push sagarkakkalasworld/ci-cd-deployment
```

You should now see your image listed in your Docker Hub account.

---

## 🎥 Build and Deploy Complete Series

👉 [Visit Sagar Kakkala's World](https://www.sagarkakkalasworld.com)

---

## Connect with Me

* 📺 [YouTube - Sagar Kakkala's World](https://www.youtube.com/@SagarKakkalasWorld)
* 💼 [LinkedIn - Sagar Kakkala](https://www.linkedin.com/in/sagar-kakkala)


