---
track: "Frontend Fundamentals"
title: "JavaScript Arrays Lab"
week: 1
day: 3
type: "lab"
---


# JavaScript Arrays Lab

## Introduction

This lab provides an opportunity to practice defining, accessing and manipulating arrays.

> **Note:** Feel free to reference the arrays lesson, collaborate, google, etc.

This lab is **a DELIVERABLE**. When completed, please fill out the [Google Form](https://forms.gle/ZhsdJF2JpgvAK41h6) or click the link above **(it's the same form)** in the navbar to submit your work to your instructional team for review.

## Setup & Instructions

If you haven't done so already, create a `labs` folder inside of this week's folder.

Then create the following folder/file structure for today's warmup activies:

1. A `js-arrays-lab` folder
2. An `index.html` file inside of your `js-arrays-lab` folder
3. A `script.js` file inside of a `js` folder inside your `js-arrays-lab` folder

```shell
wk01/
  labs/
      js-arrays-lab/
        index.html
        js/
          script.js

``` 
Here's what you can put in your `.html` file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>JS Arrays Lab</title>
</head>
<body>
    <h1>JS Arrays Lab</h1>
    <h3>Open JS Console To See Output</h3>
    <p>Macbook Keyboard shortcut: <code>[command] + [option] + j</code></p>
    <script src="./js/script.js"></script>
</body>
</html>
```
> **Confused on what to do? You can <a href="./js-arrays-lab.zip" download>Download</a> this file/folder structure to work out of, just make sure you add it to your homework and labs folder.**

## Exercise

Copy the exercises below into **script.js** file and code away!

> Please note, you will most likely need to comment out the console.logs for the exercises you've yet to complete to avoid getting a Reference Error

```js
/*
Exercise 1:
  - Define an empty array named foods
*/

// Exercise 1 has been completed for you...

const foods = [];

console.log('Exercise 1 Result: ', foods);

/*
Exercise 2:
  - Add the strings 'pizza' & 'cheeseburger' to the foods array such that 'pizza' comes before 'cheeseburger'.
*/

// Complete Exercise 2 below...



console.log('Exercise 2 Result: ',  foods);

/*
Exercise 3:
  - Add the string 'taco' to the foods array so that 'taco' is the first food in the array.
*/

// Complete Exercise 3 below...



console.log('Exercise 3 Result: ', foods);

/*
Exercise 4:
  - Access the string 'pizza' (based upon its known position) in the foods array and assign to a variable named favFood.
*/

// Complete Exercise 4 below...



console.log('Exercise 4 Result: ', favFood);

/*
Exercise 5:
  - Insert the string 'tofu' in the foods array between 'pizza' & 'cheeseburger'
*/

// Complete Exercise 5 below...



console.log('Exercise 5 Result: ', foods);

/*
Exercise 6:
  - Replace the string 'pizza' in the foods array with the strings 'sushi' & 'cupcake'.
*/

// Complete Exercise 6 below...



console.log('Exercise 6 Result: ', foods);

/*
Exercise 7:
  - Use the slice method on the foods array to create a new array containing 'sushi' & 'cupcake'.
  - Assign the new array to a variable named yummy.
*/

// Complete Exercise 7 below...



console.log('Exercise 7 Result: ', yummy);

/*
Exercise 8:
  - Using the indexOf method on the foods array, assign the index of the 'tofu' string to a variable named soyIdx.
*/

// Complete Exercise 8 below...



console.log('Exercise 8 Result: ', soyIdx);

/*
Exercise 9:
  - Assign to a variable named allFoods the result of joining the strings in the foods array such that the result is the following single string:
    'taco -> sushi -> cupcake -> tofu -> cheeseburger'
*/

// Complete Exercise 9 below...



console.log('Exercise 9 Result: ', allFoods);

/*
Exercise 10:
  - Assign a boolean to a variable named hasSoup depending upon whether or not the foods array includes the string 'soup'.
*/

// Complete Exercise 10 below...



console.log('Exercise 10 Result: ', hasSoup);

/*
Exercise 11:
  - Use the forEach method to iterate through the provided nums array and add each odd number to a new array named odds.
  - Hint: Initialize the odds variable to an empty array before the iteration.
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

// Complete Exercise 11 below...



console.log('Exercise 11 Result: ', odds);

/*
Exercise 12:
  - Use the forEach method to iterate through the same nums array and add the number to arrays named fizz, buzz and/or fizzbuzz based upon the following:
  	- Add to the fizz array if the number is evenly divisible by 3.
  	- Add to the buzz array if the number is evenly divisible by 5.
  	- Add to the fizzbuzz array if the number is evenly divisible by 3 & 5.
*/

// Complete Exercise 12 below...



console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

/*
Exercise 13:
  - Given the below numArrays array of arrays (two-dimensional array), assign the last nested array to a variable named numList.
  - Assume you don't know how many nested arrays numArrays contains.
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

// Complete Exercise 13 below...



console.log('Exercise 13 Result: ', numList);

/*
Exercise 14:
  - Given the above numArrays array, access the number 66 and assign to a variable named num.
*/

// Complete Exercise 14 below...



console.log('Exercise 14 Result: ', num);

/*
Exercise 15:
  - Given the above numArrays array, use nested forEach methods to sum up all the numbers contained within numArrays and assign to a variable named total.
  - Hint: Be sure to declare and initialize the total variable before the iterations.
*/

// Complete Exercise 15 below...



console.log('Exercise 15 Result: ', total);
```


## Additional Resources

- [MDN Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)