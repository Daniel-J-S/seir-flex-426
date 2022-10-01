---
track: "Second Language"
title: "Deploying a Django App to Heroku"
week: 24
day: 3
type: "walk-thru"
---

<img src="https://i.imgur.com/efjnAna.jpg">

# Deploying a Django App to Heroku

<br>
<br>
<br>

## Road Map

1. Preparation
2. Ready the Django Project
3. Commit the Changes
4. Deploy to Heroku
5. Migrate the Database Migrations
6. Set Environment Variables
7. Open the Application
8. Troubleshooting
9. Create the superuser
10. Test the Admin Portal

<br>
<br>
<br>

## 1. Preparation

<br>

### `cd` Into the Project's Folder

- `cd` into the the Django project's root folder

- Open the project in VS Code: `code .`

- Open a terminal in VS Code: `ctrl + backtick`

- Make sure that the `master` branch is checked out

<br>
<br>
<br>

### Heroku Account & Toolbelt

You already got set up with Heroku in Unit 2.

[Click here](https://dashboard.heroku.com) to open your Heroku Dashboard.

Verify that the [Heroku Toolbelt](https://devcenter.heroku.com/articles/heroku-cli) is installed by typing the following in terminal:

```shell
$ heroku
```

You should see a list of commands available.

Run the following command to check if you're logged in:

```shell
$ heroku auth:token
```

If not logged in, type the following and enter your credentials:

```shell
$ heroku login
```

<br>
<br>
<br>

### Create the App on Heroku

After ensuring that you're logged in to Heroku, you need to make sure you've initialized a `git` repository inside the root of your Django project folder; you can do this by typing `git status`. Upon running that command, you'll either see the current status of your `git` repo, or you'll see a message saying there is not `git` repository.

Once you've verified/added your `git` repo as needed, you can create a Heroku app using the following command:

```shell
$ heroku create <your preferred name here>
```

Replace `<your preferred name here>` with the name you want (no spaces). Your name has to be unique on Heroku, so you might have to be a little creative.

The name you choose will be the name of the app in your Heroku dashboard and the name used for the subdomain in the URL of your hosted app, e.g., `https://catcollector.herokuapp.com`

<br>
<br>
<br>

## 2. Ready the Django Project

Django projects need to be configured to be deployed.

Django has detailed deployment [docs](https://docs.djangoproject.com/en/3.0/howto/deployment/) and a [checklist](https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/), however, there is dedicated package we will use to make deploying to Heroku much easier.

<br>
<br>
<br>

### Update Dependencies For Deployment


There are two packages we'll need to install in order to deploy our Django Project to Heroku.

1. <a href="https://pypi.org/project/django-heroku/" target="_blank"><code>django-heroku</code></a> - This is a Python package that contains a set of tools that help optimize our deployment to Heroku.
1. <a href="https://pypi.org/project/gunicorn/" target="_blank"><code>gunicorn</code></a> - This package helps us set up the lightweight HTTP server process needed to run the production version of our Django Project.

<br>

Here's what we'll need to do:

1. First, we need to add our new dependencies to our `requirements.txt`.

*At the time of authoring this guide, the following versions for `django-heroku` and `gunicorn` are 0.3.1 and 20.1.0 respectively; it's advised that we check https://pypi.org if there are any newer releases of these.*

```txt
django-heroku==0.3.1
gunicorn==20.1.0
```
<br>

Here's what our full `requirements.txt` should look like after we add `django-heroku` and `gunicorn`:

```txt
Django>=4.0,<5.0
psycopg2>=2.8
django-extensions>=3.0,<4.0
boto3==1.24.82
django-environ==0.9.0
django-heroku==0.3.1
gunicorn==20.1.0
```
<br>

Unfortunately, changing `requirements.txt` isn't enough to invoke a change for our project's Docker container; we'll need to rebuild the container to install these new dependencies permanently.

Here's the command to build/rebuild our container:

```shell
$ docker compose build
```

<br>

Great, now all we need to do is run `docker compose up` again.

Let's move on to the next steps

<br>
<br>
<br>

### Update `settings.py`

There are several changes we would have to make to `settings.py` in order to be able to deploy.

However, the `django-heroku` package makes the necessary changes to `settings.py` for us. All we need to do is add the following to the **very bottom** of **settings.py**:

```python
# Other settings above

# Configure Django App for Heroku.
import django_heroku
django_heroku.settings(locals())
```

> Note that the import name is `django_heroku` instead of `django-heroku` we used when installing.


<br>
<br>
<br>


### Create & Configure `Procfile`

Heroku needs a file named **Procfile** to know how to run a Python app.

Let's create one - be sure to name it exactly as `Procfile` (capitalized and without a file extension):

```shell
$ touch Procfile
```

We only need to add a single line of code in **Procfile**. However, it's important to replace the `<your project name here>` with your actual project name:

```shell
web: gunicorn <your project name here>.wsgi
```

The project name should be the same as your project's folder name, however, you can also verify the project's name by examining this line in `settings.py`:

```python
WSGI_APPLICATION = 'catcollector.wsgi.application'
# catcollector is the project name
```

<br>
<br>
<br>

### Set Environment Variables


If you haven't already made a `.env` file at this point, reference how we did this in our **Uploading Images to Amazon S3 with Django** lecture on how to create one and set it up for your environment. 

<br>
<br>


#### `DEBUG`

If you don't already have one, add a `DEBUG` key in your local **`.env`** and set its value to `True`. 

```python
DEBUG=True
```
<br>

Also add the `DEBUG` key to Heroku and make sure its value is set to `False`. 

DO NOT change the local value from `True`.

Change the `DEBUG = True` line in **`settings.py`** to:

```python
DEBUG = env('DEBUG') == 'True' 
```



This will get the value of DEBUG in your **`.env`** file. 

If it's `'True'` then the debugger will be turned on. 

For any other value it will be turned off.

<br>
<br>


#### `SECRET_KEY`

If you don't already have one, add a `SECRET_KEY` in your **`.env`**. 

You can also generate a secret key by running this command in the **Web Container Shell**:

```bash
python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'
```

This should output a string of random characters. 

Copy it and set it as the `SECRET_KEY`'s value in your **`.env`** file. 

This is an example of what yours should look like, do not copy it directly:

```txt
SECRET_KEY=-g*ru@back!6^1eq-6pph9*_ya(u^j-!mkvjm0coc18r)w(y&e
```

Make sure you add this key and value to your Heroku Config Vars as well.

After completing that, make use of the key in your **`settings.py`** file.

```python
SECRET_KEY = env('SECRET_KEY')
```

<br>
<br>


#### Turn on Debug Bubbling from Django to Heroku

In your **`settings.py`** file add this line:

```python
DEBUG_PROPAGATE_EXCEPTIONS = True
```

This will allow you to run **`heroku logs --tail`** in the terminal and still have access to your errors.

<br>
<br>


####  Set Heroku Config Vars

We need to set environment variables (secrets) on Heroku in the same way we needed to in the past.

Set your local **`.env`** variables on Heroku using the web interface using the `heroku config:set` command:

```shell
$ heroku config:set AWS_ACCESS_KEY_ID=AKIAJYO6WFUBRZUI6ZNQ
```

> Note: If setting AWS keys from Boto3, ensure the key names are in all caps.

> Also Note: Ensure you set `DEBUG` to `False` on Heroku

Setting the environment variables via the command line automatically restarts the server - which is necessary. If you set the _config vars_ in Heroku's Dashboard, it won't restart the server. 

However, you can restart the server manually using<br>`$ heroku restart`

After you are finished setting all of the environment variables, you can verify them as follows:

```shell
$ heroku config
```
<br>

Included in the output will be a `DATABASE_URL` that Heroku automatically added.

> NOTE: if you don't see a `DATABASE_URL`, we may need to add it manually later. 


<br>
<br>
<br>

#### Create a New or Update the Existing `requirements.txt` File

FYI: The `package.json` file we used in Node apps informed Heroku which Node modules the app needed to be installed.

The equivalent in a Python app is the `requirements.txt` file, which we (sort of) have already. 

The problem with our `requirements.txt` file is that we only used it once when first configuring our Docker container, and every once an a while when we need to re-configure our project to allow for more functionality.

We need to update it with all the packages and the dependencies of those packages. 

Luckily, there’s a command for that!

`pip` has a freeze command for listing the installed Python packages.

Let’s go into the **Web Container Shell** and check it out:

```shell
$ pip freeze
```
<br>

That list of packages is in the correct format for the `requirements.txt` file.

Here's how we use Unix/Linux's `>` to redirect the output of `pip freeze` to a `requirements.txt` file (please spell correctly), use this command in the **Web Container Shell**:

```shell
$ pip freeze > requirements.txt
```

Since we already have `requirements.txt`, this output will overwrite the existing entries inside the file with the results of `pip freeze`

Also, since we're not using [virtual environments](https://packaging.python.org/guides/installing-using-pip-and-virtualenv/), the list of requirements may actually include packages the Django project does not need. 

This is not a problem, the first deployment just might take a little longer as Heroku installs the extra packages.

However, the `requirements.txt` file may be edited to remove packages that you **are sure** your project doesn't need.

> Note: If you install any additional Python packages during development after your initial deployment, you will need to run `pip freeze > requirements.txt` again to update the **requirements.txt** after the install of the additional Python package.

<br>
<br>
<br>

## Commit the Changes

Now let's commit the changes made to the project (make sure that you're on the `master` branch):

```shell
$ git add -A
$ git commit -m "wip: config deployment"
```

<br>
<br>
<br>

## Deploy to Heroku

The `heroku` remote was added to the repo with the `heroku create` command ran earlier.

So, deploying the first time and re-deploying later is as easy as running this command:

```shell
$ git push heroku master
```

<br>

The first deployment will take considerably longer than subsequent deployments because Heroku will have to install all of the Python packages. However, during re-deployments, Heroku will only install/uninstall changes made to `requirements.txt`.

Read the output during deployment carefully. You'll need to address the errors if the deployment fails.

In the case of a successful first deployment - **the app is still not quite ready to run**...

<br>
<br>
<br>

## Migrate the Database Migrations

<br>
<br>

### Checking that Heroku Created a PostgreSQL Database

If a Django project is configured to use a PostgreSQL, Heroku automatically detects and creates a PostgreSQL database for the project.

You can run the following command to verify this:

```shell
$ heroku pg
```

You should see an output similar to this:

```shell
=== DATABASE_URL
Plan:                  Hobby-dev
Status:                Available
Connections:           0/20
PG Version:            11.2
Created:               2022-03-19 16:06 UTC
Data Size:             7.9 MB
Tables:                0
Rows:                  0/10000 (In compliance) - refreshing
Fork/Follow:           Unsupported
Rollback:              Unsupported
Continuous Protection: Off
Add-on:                postgresql-parallel-89032
```

<br>

If you don't see the above information and get a message such as `⬢ <your app name> has no heroku-postgresql databases.`, we'll need to create one. 

Fortunately, the process to add PostgreSQL to our deployed Django App on Heroku is simple.

1. First, we must go to the `DATABASES` dictionary inside of `settings.py` and comment out the `HOST` key.

This is necessary because the cloud-hosted database will have a different identifier than the one we use locally.

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.environ.get('POSTGRES_NAME'),
        'PASSWORD': os.environ.get('POSTGRES_PASSWORD'),
        'USER': os.environ.get('POSTGRES_USER'),
        # 'HOST': 'db'
    }
}
```


> NOTE: Commenting out `HOST` will cause our Django Project to crash locally; this is expected and okay for now.

<br>
<br>

2. Next, we need to include the `Heroku PostgreSQL` addon.

```bash
$ heroku addons:create heroku-postgresql:hobby-dev
```

> NOTE: Addons are simple software packages and configuration that extend the capabilities of heroku; if you're curious, checkout: https://elements.heroku.com/addons to see what's available


<br>
<br>


3. Great! Now we need to `stage > commit > push` the recent changes we made to `settings.py` to Heroku with these commands:

```bash
$ git add -A
$ git commit -m "wip: config deployment #2"
$ git push heroku <your branch name>
```

<br>

4. Now you can run the `heroku pg` command; you should be able to see that our Heroku app has a PosgreSQL database now.



<br>
<br>

### Check and Migrate the Migrations

First, let's run the command that shows us a list and status of the migrations for our local project using the **Web Container Shell**:

```shell
$ python manage.py showmigrations
```

The output for the Cat Collector app looks like this:

```shell
admin
 [X] 0001_initial
 [X] 0002_logentry_remove_auto_add
 [X] 0003_logentry_add_action_flag_choices
auth
 [X] 0001_initial
 [X] 0002_alter_permission_name_max_length
 [X] 0003_alter_user_email_max_length
 [X] 0004_alter_user_username_opts
 [X] 0005_alter_user_last_login_null
 [X] 0006_require_contenttypes_0002
 [X] 0007_alter_validators_add_error_messages
 [X] 0008_alter_user_username_max_length
 [X] 0009_alter_user_last_name_max_length
contenttypes
 [X] 0001_initial
 [X] 0002_remove_content_type_name
main_app
 [X] 0001_initial
 [X] 0002_feeding
 [X] 0003_auto_20190303_2329
 [X] 0004_cat_toys
 [X] 0005_photo
 [X] 0006_cat_user
sessions
 [X] 0001_initial
```

We can run most any command we can locally on the Heroku server by prefacing the command with `heroku run`

Let's check out the migrations for the deployed app:

```shell
$ heroku run python manage.py showmigrations
```

Which generates the following output for Cat Collector:

```shell
admin
 [ ] 0001_initial
 [ ] 0002_logentry_remove_auto_add
 [ ] 0003_logentry_add_action_flag_choices
auth
 [ ] 0001_initial
 [ ] 0002_alter_permission_name_max_length
 [ ] 0003_alter_user_email_max_length
 [ ] 0004_alter_user_username_opts
 [ ] 0005_alter_user_last_login_null
 [ ] 0006_require_contenttypes_0002
 [ ] 0007_alter_validators_add_error_messages
 [ ] 0008_alter_user_username_max_length
 [ ] 0009_alter_user_last_name_max_length
contenttypes
 [ ] 0001_initial
 [ ] 0002_remove_content_type_name
main_app
 [ ] 0001_initial
 [ ] 0002_feeding
 [ ] 0003_auto_20190303_2329
 [ ] 0004_cat_toys
 [ ] 0005_photo
 [ ] 0006_cat_user
sessions
 [ ] 0001_initial
```

Yup, the unchecked migrations tells us that they need to be migrated:

```shell
$ heroku run python manage.py migrate
```

Lots of `OK`s is a good sign!

<br>
<br>
<br>


## Open the Application

Let's check it out!

```shell
$ heroku open
```

Since the database is new, there will not be any users or data. 

After signing up, creating and uploading a photo for Whiskers, I celebrated!

<img src="https://i.imgur.com/7hpQqOU.png">

<br>
<br>
<br>

## Troubleshooting

The following command shows Heroku's log for our app and is useful for troubleshooting. The log also contains the output from your app's `print()` statements:

```shell
$ heroku logs --tail
```

<br>
<br>
<br>

## Create the superuser

Because the database is "fresh", there's no superuser yet.

```shell
$ heroku run python manage.py createsuperuser
```

It's the same process as locally, just a bit slower.

<br>
<br>
<br>

## Test the Admin Portal

Okay, the finale is to browse to:

`https://<your app name>.herokuapp.com/admin`

to checkout the admin portal:

<img src="https://i.imgur.com/fFsrfae.png">

<br>
<br>
<br>

### Wait! What happened to my data?

By this time it's very likely you noticed that your cloud-hosted database doesn't contain the data you created locally during the development phase; this is completely expected.

Remember, we created data with our Django Project using a locally-hosted database through `docker`.

##### Q: Can we just transfer our local database to the cloud?
##### A: Yes, this is possible, but not very easy, unfortunately.

Want to restore a cloud-hosted PostgreSQL database from locally-hosted database?

You're in for quite a challenge, but here are some resources to help you get started:

1. <a href="https://devcenter.heroku.com/articles/heroku-postgres-import-export" target="_blank">Here are the Heroku docs that explain what needs to happen</a>
2. Part of the process involves creating a dump file of your `"dockerized"` PostgreSQL database; <a href="https://stackoverflow.com/questions/24718706/backup-restore-a-dockerized-postgresql-database" target="_target">here's an interesting post on Stack Overflow</a> that provides an example of how to do this.

> NOTE: "dumps" are files that contain a current snapshot of a database Schema along with it's current data; these are commonly used for noSQL and SQL databases. Simply put, we use them to backup and restore databases.


<br>
<br>
<br>

### Congrats! 🎉

This concludes our guide on Heroku Deployment
