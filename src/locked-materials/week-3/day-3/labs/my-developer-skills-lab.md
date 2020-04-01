---
track: "Frontend Fundamentals"
title: "My Developer Skills Lab"
week: 3
day: 3
type: "lab"
---

# My Developer Skills Lab

## Introduction

This lab provides an opportunity to practice working with jQuery.

This lab **is not a deliverable**.


### Setup  

1. Inside your classroom folder, `SEIR-FLEX-HOMEWORK-AND-LABS`, create a folder inside your labs folder of this week's folder called `dev-skills-lab`
	- So, `SEIR-FLEX-HOMEWORK-AND-LABS/w03/labs/dev-skills-lab`

- Inside of `dev-skills-lab` create the following folder/file structure:

```shell
dev-skills-lab/
  index.html
  css/
   style.css
  js/
   script.js
```

So, your top level down folder/file structure should look like this:

```shell
w03/
  labs/
   dev-skills-lab/
    index.html
    css/
     style.css
    js/
     script.js
```

3. Do the usual when setting up a front-end project:
	- Add the HTML boilerplate to `index.html`
	- Link in `./js/script.js` - don't forget the `defer` attribute!
	- Link in `./css/script.css`

4. Load jQuery from the CDN by adding the following **before** your `script.js`:
	
	```html
	<script
	src="https://code.jquery.com/jquery-3.3.1.min.js"
	integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
	crossorigin="anonymous"></script>
	```

5. Code away!

### Requirements

1. Add HTML and CSS as necessary to implement an application that looks close to this wireframe:

	<img src="https://i.imgur.com/k06ZMEN.png">
	
2. Code the following _user stories_, using jQuery where possible:

	- As a User (AAU), I don't want to see any developer skills when the page first loads so that I can start with a fresh slate.

	- AAU, I want to be able to type in a skill and have it added to my list of skills by clicking a button.

	- AAU, I want to be able to remove an individual skill one at a time in case I make a mistake.

## Deliverable

When completed, please submit the appropriate like via the "Homework Submissions" link. 

## Bonus

##### Replace the first user story above with the following story:

- AAU, I want to see my previous list of developer skills so that I can start from where I last left off.

##### Hint:

- Research [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) as a way to persist (remember) the developer skills each time they are updated.

