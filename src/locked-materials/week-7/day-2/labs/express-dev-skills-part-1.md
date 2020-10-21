---
track: "Backend Fundamentals"
title: "Express Dev Skills Lab"
week: 7
day: 2
type: "lab"
---

# My Dev Skills - Part 1


## Intro

You've now seen how we can build an Express application and implement the **index** & **show** functionality for a **resource** (To Dos).

Now it's time to practice by doing the very same thing, but for a different data resource - _developer skills_.

## Setup

**You will need to start by creating the following folder structure:**

```bash
express-dev-skills-lab/
  models
  controllers
  routes
  node_modules
  views/
    index.ejs
  package.json
  package-lock.json
  server.js
```

> You will need to add additional files (& possibly folders) as your progress in this lab (just as we've done in the lesson)


**You will then need to create a repository for this lab on Github Enterprise**

**You will continue working on this same project for both parts 1 & 2 -- the final version will be submitted via a link to your github repo using the homework submission form**

##### This lab, combined with Part 2, is a Deliverable

<br>
<br>

## Exercises

The goal of the lab is to put in a rep doing everything that you did during the _Express - Routers & Controllers_ lesson:

- Be sure to create an array of "fake" data representing some of your awesome developer skills. The specific properties describing a skill object is up to you! 

- Implement **index** functionality for the `skills` resource

- Implement **show** functionality for the `skills` resource

<br>
<br>

## Hints

- Keep the data resource name short and simple - something like `skills`.

- Following best-practice routing and MVC will result in the following modules for the `skills` ressource:
	- **routes/skills.js**
	- **models/skill.js**
	- **views/skills/index.ejs**
	- **views/skills/show.ejs**
	- **controllers/skills.js**

- Use [RESTful routes](https://gist.github.com/myDeveloperJourney/dfb5b8728c54fce5e0e997ac3ce466a0)

<br>
<br>

## Bonuses

- Use EJS partial views to make your templates more DRY (see link in Reference section of the lesson) and/or [this link](https://www.npmjs.com/package/ejs#includes).

- Add styling or use a CSS framework to make the app look better :)



