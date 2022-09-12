---
track: "Second Language"
title: "Start a Django App Using Docker"
week: 22
day: 2
type: "lecture"
---

# Start a Django App using Docker


## Docker

We will be using [**Docker**](https://www.docker.com/) to simply the Django development process, but not much else. Docker is useful for ensuring that we are building and running our applications in identical environments - this eliminates discrepancies between the different system configurations and will ensure that our Python/Postgres installations are consistent between our machines. 

The instructions below follow the guide available [here](https://docs.docker.com/samples/django/) very closely. If you want to dive in deeper and learn more about Docker, their [**extremely well-written docs**](https://docs.docker.com/get-started/) and [**this video**](https://www.youtube.com/watch?v=gAkwW2tuIqE) are great places to begin!

[Quickstart: Compose and Django](https://docs.docker.com/samples/django/)

<br>
<br>
<br>

<!-- 

## Installation (one time only!)

Start by downloading [**Docker Desktop**](https://www.docker.com/products/docker-desktop/). Ensure that you select the application type that matches your OS/Chip combo. Follow the install steps, and then start the Docker Desktop application.

<aside>
🚨 As part of installation ensure Docker Desktop starts on login from the preferences in the Docker application.
</aside>


<br>
<br>
<br>




## Heads up Linux users (NOT WSL users)

- You will need to install the docker Engine first. Open the toggle for steps to accomplish this.
    
    The following instructions mirror [**this guide**](https://docs.docker.com/engine/install/ubuntu/).
    
    Start by updating apt, and allow the use of a repo over HTTPS by running these commands in your terminal:
    
    ```bash
    sudo apt-get update
    ```
    
    ```bash
    sudo apt-get install ca-certificates curl gnupg lsb-release
    ```
    
    Then add Docker’s official GPG key:
    
    ```bash
    sudo mkdir -p /etc/apt/keyrings
    ```
    
    ```bash
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    ```
    
    And set up the repo with:
    
    ```bash
    echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
      $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    ```
    
    Now you can finally install the Docker Engine:
    
    ```bash
    sudo apt-get update
    ```
    
    ```bash
    sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
    ```
    
    You should now be able to download and run the Docker Desktop for Linux DEB package from here: [`**https://docs.docker.com/desktop/install/linux-install/`**](https://docs.docker.com/desktop/install/linux-install/)
    
    After you’ve installed Docker Desktop for Linux run this command to create a `docker` user group:
    
    ```bash
    sudo groupadd docker
    ```
    
    Then add your user to this new user group:
    
    ```bash
    sudo usermod -aG docker $USER
    ```
    
    <aside>
    🚨 You must restart your machine at this point. Do so before continuing on.
    
    </aside>
    

<br>
<br>
<br>

-->



## Starting a New Django Project in Docker

Start by creating a new project directory, move into it, and open it in VS Code; we’ll use **`cat-collector`** here, but if you’re starting another project you’ll want to use a different name.

```bash
mkdir cat-collector
cd cat-collector
code .
```

<br>
<br>
<br>



## `Dockerfile`

Next, create a file called `Dockerfile`:

```bash
touch Dockerfile
```

<br>

The first time you open a `Dockerfile` in VS Code, you may see notification suggesting that we install extensions to better support `Docker`.

Go ahead and install these extensions. If you don’t get this popup, that’s ok! The two extensions that will be installed are [**here**](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) and [**here**](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers). 

<br>

A `Dockerfile` is one of the foundational components of Docker - but it’s ultimately just code; this code in fact:

```docker
# syntax=docker/dockerfile:1
FROM python:3
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/
```

<br>
The contents of this file will help build the next foundational component of Docker - the image. Let’s talk about this file.

<br>

First in this line:

```docker
FROM python:3
```

We are telling Docker that we want to create a new image based upon the `python:3` [**base image**](https://hub.docker.com/r/library/python). Here is what Docker has to say about this image:

> This is the defacto [Python] image. If you are unsure about what your needs are, you probably want to use this one. It is designed to be used both as a throw away container (mount your source code and start the container to start your app), as well as the base to build other images off of.

<br>
<br>

Next, we’re setting up some environment variables:

```docker
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
```

These are some nice-to-have settings in our development environment, but they’re not important enough to discuss at length here - check out [**this post**](https://python-docs.readthedocs.io/en/latest/writing/gotchas.html#bytecode-pyc-files-everywhere) on Read the Docs for more on `PYTHONDONTWRITEBYTECODE` and [**this post**](https://stackoverflow.com/a/59812588) on Stack Overflow for more on `PYTHONUNBUFFERED`.

Next, we’re modifying the base image by creating a **`/code`** directory and setting it as the working directory in this image:

```docker
WORKDIR /code
```

I’ll demonstrate the implications of this later!

<br>
<br>


Next, we’re copying a file called **`requirements.txt`** from our current directory into this new **`/code`** directory that will exist in the image:

```docker
COPY requirements.txt /code/
```

<br>
<br>

We’ll talk more about this **`requirements.txt`** file later. For now, what you need to know about it is that this file will hold all the dependencies for our Django project. We are then modifying the image by installing the dependencies in that file onto it, as shown here:

```docker
RUN pip install -r requirements.txt
```

<br>
<br>

And finally, we’re copying the contents of the current directory to the **`/code`** directory in our image:

```docker
COPY . /code/
```

<aside>

🚧 Cool, so what does this **`Dockerfile`** thing actually do? 

Well, it composes an image! 

So what is an image? Essentially, it’s the current iteration of the project we’re working on and all of its dependencies all the way to the OS level. So, not only what Python packages do we need to run a Django application but also *what we require from an OS itself to run Python*.

</aside>


<br>
<br>


## `requirements.txt`

On to the next file, **`requirements.txt`**:

This isn’t required by Docker but instead by our Django project. 

Start by creating it:

```bash
touch requirements.txt
```

<br>
<br>

Then fill it with the dependencies for our project:

```text
Django>=4.0,<5.0
psycopg2>=2.8
django-extensions>=3.0,<4.0
```

<br>
<br>
<br>



## `docker-compose.yaml`

Next, we are going to make another file foundational to Docker, the **`docker-compose.yaml`** file:

```bash
touch docker-compose.yaml
```

<br>
<br>

And put this content inside it:

```yaml
version: "3.9"

services:
  db:
    image: postgres
    volumes:
      - ./data/db:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=postgres
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
  web:
    build: .
    command: python manage.py runserver 0.0.0.0:8000
    volumes:
      - .:/code
    ports:
      - "8000:8000"
    environment:
      - POSTGRES_NAME=postgres
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
    depends_on:
      - db
```

We’re not going to go through this file line by line, but here’s a quick rundown of things you should know about this file.

<br>

It’s a YAML file! Note the indentation format is very similar to Python code! Think of this file as similar to a **`package.json`** file that you’re used to seeing in projects that utilize npm, but for our Docker project - its purpose is to describe how to run docker images as containers.

We’ll get back to containers here in a moment.

<aside>

🤔 So if this file is similar to a **`package.json`** file, why not just use JSON instead of this new YAML thing?

Well, simply put, we could! YAML is a superset of JSON, which means that any valid JSON can be converted to valid YAML. Docker would even automatically do this for us if we asked it to run a JSON file in place of this YAML file. YAML is great for more complicated configurations though, as it layers in some useful features we don’t have in JSON (like comments!), so it’s conventionally used with Docker.

</aside>


First, note that we have two services listed here: `db` and `web`. Let’s talk about the `db` service first. The `db` service will be built using  [**Docker’s Postgres Image**](https://hub.docker.com/_/postgres) and store its data on the host system (in a **`data/db`** directory held in the **`cat-collector`** directory on the host). That data will be available in the container built at **`/var/lib/postgresql/data`**.

<br>

The `web` service will be built referencing the **`Dockerfile`** in the **`cat-collector`** directory. 

As the container is built, it will store the data in the `/code` directory in the container, and when it launches, it will run the `python manage.py runserver 0.0.0.0:8000` command. 

It will then expose port 8000 to the host OS and direct requests to that port to the 8000 port running in the container.

<br>

In the `db` service we are defining a database, username, and password of `postgres`. We’re using these same values in the `web` service to connect to the `postgres` database using the `postgres` username and the `postgres` password.

<aside>

🤔 So wait, what *is* the difference between **`docker-compose.yaml`** and **`Dockerfile`?** 

What exactly is a container?

The **`Dockerfile`** is used to build images, whereas **`docker-compose.yaml`** describes how to run those built images in a container. 

We see this in the `web` services above. In addition to this we can create other containers with their own images such as the `db` service above, indicating that both containers will be necessary for our project.

</aside>

We’ve now defined the Docker components of our project!

<br>
<br>
<br>



## Create a Django Project

Time to make our Django project! While in the **`cat-collector`** directory, run the command below (if you’re making a project that isn’t Cat Collector you’ll want to swap out **`catcollector`** below for the name of the project you’d like to create):

```bash
docker compose run web django-admin startproject catcollector .
```

<br>

A lot is going on here; let’s talk about it. First, we’re running the `docker compose` command as root with `sudo`. `docker compose run` is used to run a command on a service (in this case, `web`) once. 

The command that follows it (`django-admin startproject catcollector .`) is the command that will be executed in a new container using the configuration we defined in **`docker-compose.yaml`** with two exceptions: First, the `django-admin startproject catcollector .` command will override the `python manage.py runserver 0.0.0.0:8000` command that we defined in the **`docker-compose.yaml`** file, and second, no ports will be opened to expose the container to the host.

The `django-admin startproject catcollector .` command will execute the `django-admin` command in the container and instruct it to start a new project called `catcollector` in the current directory.

![You may see the above dialog presented when running the above command in macOS.](https://i.imgur.com/xT5GgUX.png)

You may see the above dialog presented when running the above command in macOS.

<br>
<br>
<br>



## Handling Errors 💔

If you aren’t running the Docker Desktop application, when you run this command, you will see the following error that’s shown below.
    
![Error Message 1](https://i.imgur.com/VOQNt10.png)


<br>
<br>
<br>



## Verifying Permissions

When the above command has completed its execution, list the contents of the project with:

```bash
ls -l
```
<br>

You’ll note that this shows file ownership details as well. The `root` user may own the `catcollector` directory or the `manage.py` file. If they do, you need to reclaim ownership of those project assets with this command:

```bash
sudo chown -R $USER:$USER catcollector manage.py
```
<br>
<br>

If that command produces an error, use this command instead:
    
```bash
sudo chown -R $USER cat_collector manage.py
```
    

You’ll note that the root user will still own the **`data`** directory. This is the desired behavior, do not modify the permissions of that directory.

Verify that the command worked and that you now own the **`manage.py`** file and the **`catcollector`** directory by running `ls -l` again.

<br>
<br>
<br>



## Connect to the Postgres Database

Open the **`catcollector/settings.py`** file in VS Code.

Start by importing `os` into the file with the rest of the imports already in the file:

```python
import os
```

Then replace the `DATABASES` dictionary with this new one:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.environ.get('POSTGRES_NAME'),
        'USER': os.environ.get('POSTGRES_USER'),
        'PASSWORD': os.environ.get('POSTGRES_PASSWORD'),
        'HOST': 'db',
        'PORT': 5432,
    }
}
```

You may recognize these environment variables; we originally defined them in our **`docker-compose.yaml`** file.

<br>
<br>
<br>



## Drum Roll!

Time to test it out! Start a new terminal session in VS Code and run:

```python
docker compose up
```
<br>
<br>


And if everything goes according to plan, you should see this output below (this may take a while the first time you run this command, but when you run it in the future, it should be much faster because of caching.

![success](https://i.imgur.com/vLmO1cU.png)

<br>
<br>


Ignore the message about unapplied migrations, we’ll take care of those later. Our Django application should be running on port 8000! Navigate to [**`http://localhost:8000`**](http://localhost:8000) to confirm!

![Our app running in the browser on the host!](https://i.imgur.com/07V20XC.png)

Our app running in the browser on the host!

<br>
<br>
<br>



## Handling Errors 💔

You may see the below error indicating that the db service hadn’t started when the web service started. If this happens, run `docker compose down` in another terminal in the same directory, and re-run `docker compose up`.
    
![error message 2](https://i.imgur.com/Nxsry5e.png)
    

You may need to set the `ALLOWED_HOSTS` to `['*']` in **`catcollector/settings.py`**. 

If this does not work, please revert this change.

<br>
<br>
<br>



## Git Ignoring the `data` Directory in our Project

We don’t want to send the data for our local database up to GitHub, so we should tell Git to ignore it. Create a `.gitignore` file.

```bash
touch .gitignore
```

Give this file these contents:

```bash
# Data files
data/
```

<br>
<br>
<br>



## Wrap Up

Just for fun, let’s confirm a couple of things we’ve talked about in this lecture - first, you’ll remember we specified the working directory of our **`Dockerfile`** - this is the default execution point of commands in the container:

```docker
WORKDIR /code
```

We can confirm this with the:

```bash
docker compose run web pwd
```

command. The output of this should be:

```bash
/code
```

We can also see that when the image was built in the container that everything in the `cat-collector` directory was copied to the `/code` directory in the container with an `ls`!

```bash
docker compose run web ls
```

<br>
<br>
<br>



## Shutting the Container Down

In your second terminal open in VS Code, run 

```python
docker compose down
```

to shut down the currently running containers.

You *can* also use `Ctrl + C` in the terminal like you’re used to, but this can lead to potential database issues, so it’s not recommended.