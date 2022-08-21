---
track: "React Fundamentals"
title: "MERN Stack Build Part 3"
week: 18
day: 3
type: "lecture"
---

# MERN Stack Build Part 3

<br>
<br>
<br>


## The Show Page

Inside of `Main.js`, let's ensure we've passed the people data to the show page via props:

```jsx
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from '../pages/Index';
import Show from '../pages/Show';

function Main(props) {
  const [people, setPeople] = useState(null);

  const URL = 'http://localhost:3001/api/people/';

  const getPeople = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setPeople(data);
    } catch (error) {
      // TODO: Add a task we'd like to perform in the event of an error
    }
  };

  const createPeople = async (person) => {
    try {
      await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json',
        },
        body: JSON.stringify(person),
      });
      getPeople();
    } catch (error) {
      // TODO: Add a task we'd like to perform in the event of an error
    }
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <main>
      <Routes>
        <Route 
          path="/" 
          element={
            <Index 
              people={people} 
              createPeople={createPeople} 
            />
          }
        />
        <Route
          path="/people/:id"
          element={
            <Show
              people={people}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
```

<br>
<br>
<br>

Let's reference the selected person from the `people` array we've passed as props and display them. To do this, we'll use a combination of `react-router-dom`'s `useParams` hook to retrieve the `id` value from our browser URL `:id` param segment so that we can use it to locate the appropriate object inside of the `people` array.

`Show.js`

```jsx
import { useParams } from 'react-router-dom';

function Show(props) {

  const { id } = useParams();
  const people = props.people;
  const person = people ? people.find((p) => p._id === id) : null;

  const loaded = () => {
    return (
      <>
        <h1>{person.name}</h1>
        <h2>{person.title}</h2>
        <img 
          className="avatar-image" 
          src={person.image} 
          alt={person.name} 
        />
      </>
    );
  };
  const loading = () => {
    return <h1>Loading ...</h1>;
  };

  return (
    <div className="person">
      { person ? loaded() : loading() }
    </div>
  );
}

export default Show;
```

<br>
<br>
<br>

## Updating a Person

First, we'll need to add a helper function inside the `Main.js` component, which will initiate the HTTP request using `fetch`. You'll notice that this function is very similar to the `createPeople` function we wrote previously, except this function uses the `PUT` HTTP request verb, and it also needs to have the `id` of the updated person appended to the URL.

```js
// ... more code above

// Inside of Main.js

  const updatePeople = async (person, id) => {
    await fetch(URL + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify(person),
    });
    // update list of people
    getPeople();
  };

// ... more code below
```

<br>
<br>

Next, pass this function down as a prop to the `Show` component, where we render it inside our defined routes.

```js
<Route
  path="/people/:id"
  element={
    <Show
      people={people}
      updatePeople={updatePeople}
    />
  }
/>
```

On the show page let's add:

1. State for a form
1. The `useEffect` hook for checking if we have a person object and setting `editForm` state to that person object.
1. `handleChange` and `handleUpdate` function
1. A form in the JSX below the person

```jsx
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Show(props) {

  const { id } = useParams();
  const people = props.people;
  const person = people ? people.find((p) => p._id === id) : null;


  // state for form
  const [editForm, setEditForm] = useState({
    name: "",
    title: "",
    image: ""
  });

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  // a submit event handler for our edit form
  const handleUpdate = (event) => {
    event.preventDefault();
    props.updatePeople(editForm, person._id);
  };


  const loaded = () => {
    return (
      <>
        <h1>{person.name}</h1>
        <h2>{person.title}</h2>
        <img 
          className="avatar-image" 
          src={person.image} 
          alt={person.name} 
        />
      </>
    );
  };
  const loading = () => {
    return <h1>Loading ...</h1>;
  };

  useEffect(() => {
    if(person) { // if we have a person object
      setEditForm(person) // set our form state to that person
      // this is how we can pre-fill our edit form with person data
    }
  }, [person]);

  return (
    <div className="person">
      { person ? loaded() : loading() }
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input type="submit" value="Update Person" />
      </form>
    </div>
  )
}

export default Show;
```

<br>
<br>
<br>

## Deleting a Person

Once again, we'll start by adding a helper function inside of `Main.js` to initiate a HTTP, `DELETE` request to our API to delete a person; in this case, we'll configure the `fetch` method to `DELETE`. 

```js
const deletePeople = async (id) => {
  await fetch(API_URL + id, {
    method: 'DELETE',
  });
  getPeople();
};
```
<br>
<br>

Next, we'll pass this function down to the `Show` component as a prop:

```js
<Route
  path="/people/:id"
  element={
    <Show
      people={people}
      updatePeople={updatePeople}
      deletePeople={deletePeople}
    />
  }
/>
```
<br>
<br>
<br>

Last Stop is adding a button on the show page to delete a user. To do this, we'll need to import the `useNavigate` hook from `react-router-dom` so we can perform programmatic navigation; this hook is handy for changing browser location by invoking a function. 

We'll also set up a `handleDelete` function as an event listener to call whenever click events are triggered from our button. Once this function is called, we'll invoke the `deletePeople` function we passed down as a prop and pass to it the `id` of the person we're deleting. We'll also need to programmatically navigate back to the index page upon deleting a person, so we'll use the `navigate` function we set up earlier for that.

```jsx
// importing the useNavigate hook
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

function Show(props) {
  // set up nav function with the useNavigate hook
  const navigate = useNavigate();
  const { id } = useParams();
  const people = props.people;
  const person = people ? people.find((p) => p._id === id) : null;

  const [editForm, setEditForm] = useState({
    name: "",
    title: "",
    image: ""
  });

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    });
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    props.updatePeople(editForm);
  };

  const handleDelete = () => {
    props.deletePeople(person._id);
    navigate('/');
  };

  const loaded = () => {
    return (
      <>
        <h1>{person.name}</h1>
        <h2>{person.title}</h2>
        <img 
          className="avatar-image" 
          src={person.image} 
          alt={person.name} 
        />
        <button id="delete" onClick={handleDelete}>
          DELETE
        </button>
      </>
    );
  };
  const loading = () => {
    return <h1>Loading ...</h1>;
  };

  useEffect(() => {
    if(person) { 
      setEditForm(person);
    }
  }, [person]);

  return (
    <div className="person">
      { person ? loaded() : loading() }
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input type="submit" value="Update Person" />
      </form>
    </div>
  );
}

export default Show;
```

<br>
<br>
<br>

## Some Final Styling

A few more changes to our `styles.scss`:

```scss
// --------------------------
// VARIABLES
// --------------------------
$maincolor: black;
$contrastcolor: white;

@mixin white-text-black-bg {
  color: $contrastcolor;
  background-color: $maincolor;
}

@mixin black-test-white-bg {
  color: $maincolor;
  background-color: $contrastcolor;
}

// --------------------------
// Header
// --------------------------

.nav {
  @include white-text-black-bg;
  display: flex;
  justify-content: center;

  a {
    @include white-text-black-bg;
    text-decoration: none;
    div {
      margin: 10px;
      font-size: large;
    }
  }
}

// --------------------------
// Form
// --------------------------

.person-section,
div {
  form {
    input {
      @include white-text-black-bg;
      padding: 10px;
      font-size: 1.1em;
      margin: 10px;

      &[type="submit"]:hover {
        @include black-test-white-bg;
      }
    }
  }
}

// --------------------------
// button
// --------------------------

button#delete {
  @include white-text-black-bg;
  display: block;
  margin: auto;
  font-size: 1.3em;
  padding: 10px;
}

// --------------------------
// images
// --------------------------

.avatar-img {
  width: 300px;
  height: 300px;
  border-radius: 90px;
  object-fit: cover;
}

@media (min-width: 768px) {
  .nav {
    justify-content: flex-start;    
  }
}
```

<br>
<br>
<br>

## Deploy

Your instructor will demo this process, or you can check out this video for a walkthrough of React Deployment using Netlify

<iframe width="560" height="315" src="https://www.youtube.com/embed/HFiYKklAtNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<br>
<br>
<br>

## Lab - Complete Your Cat App

Complete your Cat app using the steps of todays lessons adding the following:

1. The ability see an individual Cat
1. The ability edit a Cat
1. The ability to delete a Cat
