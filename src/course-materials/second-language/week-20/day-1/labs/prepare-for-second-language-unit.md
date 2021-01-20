---
track: "React Fundamentals"
title: "Week 18 - Day 2"
week: 18
day: 2
type: "lecture"
topics: "Prepare For Second Language Unit"
---


# Prepare For Second Language Unit

At this point, we're ready to move on to learning our second programming language and accompanying framework. However, before we get started, we need to ensure we have the proper tools installed on our machines.


<br>
<br>
<br>



## PostgreSQL

Install the **PostgreSQL** database management system (DBMS) using Homebrew with this command:

```shell
brew install postgresql
```

After Postgres is installed run this command:

```shell
brew services start postgresql
```
 
Followed by this command to test the install by creating a new database named the same as the current system user:
 
```shell
createdb
```


<br>
<br>
<br>






## Installing Python 3

> Note: Due to time constraints and for simplicity, we will not be using Python "virtual environments" during SEI.  If you are familiar with using virtual environments, you may continue to use them.  If you decide to continue to develop using Python beyond SEI, your next step would be to learn about using virtual environments.

Brew is also used to install Python 3. (Python 2 is already installed on your Mac.)

Install **Python** using Homebrew with this command: `brew install python`. 

You can test the installation by running `python3 --version`.

Python 3's package manager, `pip3` should have automatically been installed with Python 3.  Test that it was installed by running `pip3 --version`.




<br>
<br>
<br>




## Installing Django

We will use `pip3` to install Django, a robust web framework for Python. We will be installing the latest version (3.x.x):

```
pip3 install Django
```