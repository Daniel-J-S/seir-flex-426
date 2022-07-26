---
track: "React Fundamentals"
title: "MERN Stack Build Part 1"
week: 18
day: 1
type: "lecture"
---

# MERN Stack Build Part 1

In this build we will:

1. Build an Express API
1. Use Mongo/Mongoose with 1 model
1. Deploy the API with Heroku
1. Build a Full CRUD Frontend with React
1. Deploy with Netlify

<br>
<br>
<br>

## Setup for Express Build

1. Create a folder called `express-react`
1. Inside this folder create another folder called `backend`
1. Generate a React app called frontend `npx create-react-app frontend`

_Your folder structure should look like this..._

```shell
/express-react
 -> /backend
 -> /frontend
```

4. `cd` into the `backend` folder

<br>
<br>
<br>

## Setting up the Express app

_Make files `touch .env server.js`_

1. Create a new node project `npm init -y`
1. Install dependencies `npm install dotenv mongoose express cors morgan`

<br>
<br>
<br>

6. Put the following in `.env` (make sure to use YOUR MongoDB connection url)

```shell
DATABASE_URL=mongodb+src://...
PORT=3001
```

<br>
<br>
<br>

## Set Up: `server.js`

Let's build out the minimum to get `server.js` running:

```js
///////////////////////////////
// Dependencies
////////////////////////////////
const express = require('express');
// create application object
const app = express();

///////////////////////////////
// Application Settings
////////////////////////////////
require('dotenv').config();

const { PORT = 3001, DATABASE_URI } = process.env;


///////////////////////////////
// Mount Middleware
////////////////////////////////


///////////////////////////////
// Mount Routes
////////////////////////////////

// create a test route
app.get('/', (req, res) => {
  res.send('hello world');
});


///////////////////////////////
// Tell the app to listen
////////////////////////////////
app.listen(PORT, () => {
  console.log(`Express is listening on port: ${PORT}`);
});
```

<br>
<br>
<br>

Run the server `npm start` and make sure you see `'Hello World'` when you go to `localhost:3001`.

<br>
<br>
<br>

## Adding a Database Connection

Let's update our `server.js` to include a database connection:

```js
///////////////////////////////
// Dependencies
////////////////////////////////
const mongoose = require('mongoose');
const express = require('express');
// create application object
const app = express();

///////////////////////////////
// Application Settings
////////////////////////////////
require('dotenv').config();

const { PORT = 3001, DATABASE_URI } = process.env;
///////////////////////////////
// Database Connection
////////////////////////////////
mongoose.connect(DATABASE_URI);
// Mongo connection Events
mongoose.connection
  .on('open', () => console.log('You are connected to MongoDB'))
  .on('close', () => console.log('You are disconnected from MongoDB'))
  .on('error', (error) => console.log(`MongoDB Error: ${error.message}`));

///////////////////////////////
// Models
////////////////////////////////


///////////////////////////////
// Mount Middleware
////////////////////////////////

app.use(express.json()); 

///////////////////////////////
// Mount Routes
////////////////////////////////

// create a test route
app.get('/', (req, res) => {
  res.send('hello world');
});

///////////////////////////////
// Tell the app to listen
////////////////////////////////
app.listen(PORT, () => {
  console.log(`Express is listening on port: ${PORT}`);
});
```

<br>
<br>
<br>

_Make sure you see the MongoDB Connection message when the server restarts_

<br>
<br>
<br>

## Adding the People Model

1. Let's add a People model to `server.js` along with an index and create route to see and create our people.

2. Make sure to add `cors` and` express.json` middleware!

```js
///////////////////////////////
// Dependencies
////////////////////////////////
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
// create application object
const app = express();

///////////////////////////////
// Application Settings
////////////////////////////////
require('dotenv').config();

const { PORT = 3001, DATABASE_URI } = process.env;
///////////////////////////////
// Database Connection
////////////////////////////////
mongoose.connect(DATABASE_URI);
// Mongo connection Events
mongoose.connection
  .on('open", () => console.log("You are connected to MongoDB"))
  .on("close", () => console.log("You are disconnected from MongoDB"))
  .on("error", (error) => console.log(`MongoDB Error: ${error.message}`));

///////////////////////////////
// Models
////////////////////////////////
const PeopleSchema = new mongoose.Schema({
  name: String,
  image: String,
  title: String,
}, { timestamps: true });

const People = mongoose.model("People", PeopleSchema);

///////////////////////////////
// Mount Middleware
////////////////////////////////
app.use(cors()); 
app.use(morgan("dev")); 
app.use(express.json()); 

///////////////////////////////
// Mount Routes
////////////////////////////////

// create a test route
app.get("/", (req, res) => {
  res.send("hello world");
});

// Index Route
app.get("/people", async (req, res) => {
  try {
    res.status(200).json(await People.find({}));
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
});

///////////////////////////////
// Tell the app to listen
////////////////////////////////
app.listen(PORT, () => {
  console.log(`Express is listening on port: ${PORT}`);
});
```

<br>
<br>
<br>

3. Create 3 people using postman to make post requests to `/people`

4. Test the index route with a get request to `/people`

<br>
<br>
<br>

## Update and Delete

Let's add an Update and Delete API Route to `server.js`:

```js
///////////////////////////////
// Dependencies
////////////////////////////////
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
// create application object
const app = express();

///////////////////////////////
// Application Settings
////////////////////////////////
require("dotenv").config();

const { PORT = 3001, DATABASE_URI } = process.env;
///////////////////////////////
// Database Connection
////////////////////////////////
mongoose.connect(DATABASE_URI);
// Mongo connection Events
mongoose.connection
  .on("open", () => console.log("You are connected to MongoDB"))
  .on("close", () => console.log("You are disconnected from MongoDB"))
  .on("error", (error) => console.log(`MongoDB Error: ${error.message}`));

///////////////////////////////
// Models
////////////////////////////////
const PeopleSchema = new mongoose.Schema({
  name: String,
  image: String,
  title: String,
}, { timestamps: true });

const People = mongoose.model("People", PeopleSchema);

///////////////////////////////
// Mount Middleware
////////////////////////////////
app.use(cors()); 
app.use(morgan("dev")); 
app.use(express.json()); 

///////////////////////////////
// Mount Routes
////////////////////////////////

// create a test route
app.get("/", (req, res) => {
  res.send("hello world");
});

// Index Route
app.get("/people", async (req, res) => {
  try {
    res.status(200).json(await People.find({}));
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
});


// Create Route
app.post("/people", async (req, res) => {
  try {
    res.status(201).json(await People.create(req.body));
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
});

// Delete Route
app.delete("/people/:id", async (req, res) => {
  try {
    res.status(200).json(await People.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
})

// Update Route
app.put("/people/:id", async (req, res) => {
  try {
    res.status(200).json(
      await People.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
});

///////////////////////////////
// Tell the app to listen
////////////////////////////////
app.listen(PORT, () => {
  console.log(`Express is listening on port: ${PORT}`);
});

```

<br>
<br>
<br>

## Deploy

1. Create a git repo in the `backend` folder `git init`

1. Add all files to staging `git add .`

1. Commit `git commit -m "message"`

1. Create a new repo on <a href="https://git.generalassemb.ly" target="_blank">GitHub Enterprise</a> ***(make sure its public)***

1. Add the remote to your local repo `git remote add origin URL` replace `URL` with your repos url

1. Push up your code `git push origin branchName` replace branch name with your active branch, find that with `git branch`

1. Go to heroku and create a new project

1. Under deploy connect your repo, enable auto deploys, and trigger a manual deploy

1. Under settings set your `DATABASE_URL` config var

1. In postman test all your API endpoints

<br>
<br>
<br>

## Lab Part 1 - Cat App

1. Create another folder called "Cat App"

1. Create a backend and frontend folder like you did for today's lesson

1. Create a cat API with index, create, update and delete routes

1. The model should look like:

```shell
breed: String,
description: String,
age: Number
```

5. Test the API, deploy the API, test the deployed API
