---
track: "Second Language"
title: "Intro to AJAX and JavaScript Promises with jQuery"
week: 4
day: 3
type: "lecture"
---

# Intro to AJAX and JavaScript Promises with jQuery

## Lesson Objectives

1. Explain AJAX
2. Explain promises
3. Populate the DOM with AJAX data
4. Make dynamic AJAX requests


## Explain AJAX

- AJAX Stands for Asynchronous JavaScript And XML
- It's just a way for your page to get data from external sources

**According to MDN:**


>Asynchronous JavaScript + XML, while not a technology in itself, is a term coined in 2005 by Jesse James Garrett, that describes a "new" approach to using a number of existing technologies together, including HTML or XHTML, Cascading Style Sheets, JavaScript, The Document Object Model, XML, XSLT, and most importantly the XMLHttpRequest object.

>When these technologies are combined in the Ajax model, web applications are able to make quick, incremental updates to the user interface without reloading the entire browser page. This makes the application faster and more responsive to user actions.

>Although X in Ajax stands for XML, JSON is used more than XML nowadays because of its many advantages such as being lighter and a part of JavaScript. Both JSON and XML are used for packaging information in Ajax model.


### Lesson Setup  

- Inside your classroom folder, `SEIR-FLEX-HOMEWORK-AND-LABS`, create a folder inside your practice folder of this week's folder called `ajax-practice`
	- So, `SEIR-FLEX-HOMEWORK-AND-LABS/w04/practice/ajax-practice`

- Inside of `ajax-practice` create the following folder/file structure:

```shell
  practice/
    ajax-practice/
      index.html
      js/
        script.js
```

So, your top level down directory structure should look like this:

```shell
w04/
  practice/
    ajax-practice/
      index.html
      js/
        script.js
```

- You can add this HTML to your `.html` file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script defer src="./js/script.js"></script>
    <title>AJAX Practice</title>
</head>
<body>

</body>
</html>
```

We'll have our page get data from the external site [http://www.omdbapi.com/](http://www.omdbapi.com/)

- From the documentation, we can see that `http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen` will get data about the movie Frozen
- The `apikey` parameter is necessary for this external source so that can track and possibly limit access to specific people

- In order to use this particular API in our projects, we'll likely need to [request an API key](http://www.omdbapi.com/apikey.aspx)

Let's use JavaScript to get data for our page:

```javascript
$.ajax({
    url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen',
    success: function(movieData) {
        console.log(movieData);
    },
    error: function (error){
        console.log('bad request: ', error);
    }
});
```

## Explain promises

The previous code is a little old fashioned. <br>Let's update it:

```javascript
const promise = $.ajax({
    url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen'
});

promise.then(
  (data) => {
   console.log(data);
  },
  (error) => {
   console.log('bad request: ', error);
  }
);
```

`$.ajax` returns a "promise" object, which we'll save to the variable `promise`.

Think of this as an object that holds information about the AJAX request "event".

All "promise" objects have a `.then()` method. This method takes two parameters.

1. The `success` callback
2. The `error` callback

These callbacks behave just like callbacks to DOM events. It's a function that get's called when something happens, in this case when the AJAX request succeeds or fails.

We can rewrite the previous code to make it a little more succinct:

```javascript
$.ajax({
  url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen'
}).then(
  (data) => {
   console.log(data);
  },
  (error) => {
   console.log('bad request', error);
  }
);
```

## Populate the DOM with AJAX data

Now that we have successfully made an AJAX request, let's use the response from OMDB to populate the DOM. Let's add the below `html` to our practice project.   

```html
<h1>Movie Info</h1>
<dl>
  <dt>Title</dt>
  <dd id="title"></dd>
  <dt>Year</dt>
  <dd id="year"></dd>
  <dt>Rating</dt>
  <dd id="rated"></dd>
</dl>
```

Now let's use the data to populate the DOM:

```javascript
$.ajax({
  url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen'
  }).then(
    (data) => {
    $('#title').html(data.Title);
    $('#year').html(data.Year);
    $('#rated').html(data.Rated);
  },
    (error) => {
   console.log('bad request: ', error);
  });
})
```

## Make dynamic AJAX requests

Currently, we're getting data for Frozen every time the page loads. Let's let the user choose the movie:

We'll use the below `html` to begin adding this functionality.

```html
<form>
  <input type="text" placeholder="Movie Title"/>
  <input type="submit" value="Get Movie Info" />
</form>
```

Move the AJAX request to within a form submit event handler:

```javascript
  $('form').on('submit', (event) => {
    event.preventDefault();
    $.ajax({
      url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen'
      }).then(
        (data) => {
          $('#title').html(data.Title);
          $('#year').html(data.Year);
          $('#rated').html(data.Rated);
        },
        (error) => {
          console.log('bad request: ', error);
        }
      );
    })
  });
```

Lastly, let's use the input that user types to modify the AJAX request:

```javascript
  $('form').on('submit', (event) => {
   event.preventDefault();
   const userInput = $('input[type="text"]').val();
    $.ajax({
      url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=' + userInput
    }).then(
        (data) => {
        $('#title').html(data.Title);
        $('#year').html(data.Year);
        $('#rated').html(data.Rated);
        },
        (error) => {
          console.log('bad request: ', error);
         }
        );
      })
   })
```

## Review Questions

❓**What Does The Term AJAX Stand For?**

❓**What jQuery Method Do We Use to Make AJAX Requests**

## Resources

- [`$.ajax` jQuery Documentation](https://api.jquery.com/jQuery.ajax/)
- [`AJAX` MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX)