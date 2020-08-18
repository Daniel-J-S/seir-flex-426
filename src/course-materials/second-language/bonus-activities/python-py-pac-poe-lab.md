---
track: "Second Language"
title: "Python Py Pac Poe Group Lab"
week: 19
day: 3
type: "lab"
---


# Python Py Pac Poe Group Lab


<br>
<br>
<br>

## Getting Started

First, your team will create a file inside a folder locally on a teammate's machine and push to Github, the rest of the team will fork and clone a copy. 

<br>
<br>
<br>

## Pre-Reqs

Although it's not entirely necessary, the usage of `python` **functions** and **dictionaries** will certainly help your team achieve success with this lab. We will have dedicated lessons on these soon, but to help you get some exposure to them, here are some examples:

<br>
<br>


#### Python Dictionaries

Dictionaries are to Python as objects are to JS.

A dictionary provides a container for key: value pairs. We can refer to key: value pairs as items.

Dictionaries have a class (type) of dict.

<br>
<br>

**Dictionaries - Basic Syntax**

Like objects in JS, a dictionary is created with a set of curly braces:

```python
 student = {
   'name': 'Fred',
   'course': 'SEI',
   'current_week': 7
 } 
```

Unlike in JS, strings used as keys must be quoted.

If not quoted, Python expects the identifier to be a variable holding what you want to use as the key. This is similar to how computed properties work in JS.

<br>
<br>
<br>

### Python Functions

Here's how we define a basic function in Python:

![python functions](https://i.imgur.com/pixhxbF.png)


As you can see:

- The first line starts with the def keyword. This defines a function.
- The next word is the name (identifier) of the function.
- Following that is a parameter list inside parentheses.
- The first line ends with a colon.
- The first line is followed by an indented code block that we have become familiar with.
- Python functions, like JS, optionally return a value using a return statement.


<br>
<br>
<br>


## Py Pac Poe User Stories

- As a player (AAP), I want to see a welcome message at the start:

	```
	----------------------
	Let's play Py-Pac-Poe!
	----------------------
	```

- AAP, before being prompted for a move, I want to see the board printed out in the console, so that I know what moves have been made:

	```
	    A   B   C
	
	1)  X |   | O 
	   -----------
	2)    | X |  
	   -----------
	3)  X | O | O 
	  
	```

- AAP, I want to be prompted with which player's move it is.

- AAP, I want to be prompted on how to enter a valid move so that I don't make mistakes:

	```
	    A   B   C
	
	1)  X |   | O 
	   -----------
	2)    | X |  
	   -----------
	3)  X | O | O 
	
	Player X's Move (example B2):  
	``` 
	
- AAP, I want to be able to enter my move's column letter in upper or lower case (a/A, b/B or c/C) to make it easier to enter my move.

- AAP, if I enter a move in an invalid format, or if I try to occupy a cell already taken, I want to see a message chastising me and be re-prompted:

	```
	Player X's Move (example B2): Z9
	Bogus move! Try again...
	
	Player X's Move (example B2):
	```

- AAP, at the end of a game I want to see who won the game:

	```
	Player X wins the game!
	```
	or if it was a tie
	
	```
	Another tie!
	```

<br>
<br>
<br>


## Hints

- You can access, but not assign to global variables from within a function because it actually creates a new local variable instead (this is a downside of not have keywords like `let` in the language).

	There's a couple of solutions.  One is use the `global` statement as follows:

	```python
	# Global variables
	board = {}
	turn = 'X'
	
	# Will not work
	def init_game():
	  # Will not work because this creates a new variable
	  # instead of assigning to the global board variable
	  board = {
	  	'a1': None, `b1`: None, 'c1' None,
	  	# etc
	  }
	  turn = 'X'
	  
	# Do it like this
	def init_game():
	  # Use the global keyword to update global variables
	  global board, turn
	  board = {
	  	'a1': None, `b1`: None, 'c1' None,
	  	# etc
	  }
	  turn = 'X'
	```
	
	Using `global` is easy and works, however, it could be frowned upon by purists. Another approach would be to use a global dictionary named something like `state`, which could then be mutated (updated) without a problem:
	
	```python
	# Global variables
	state = {}
	
	# The following works
	def init_game():
	  state['board'] = {
	  	'a1': None, `b1`: None, 'c1' None,
	  	# etc
	  }
	  state['turn'] = 'X'
	```

- Think through the game play of Tic-Tac-Toe and, if necessary, pseudocode it.

- Think about how/where looping makes sense, e.g., loop until the player enters a correct move, until the game's over, etc.

- Write several small functions, each performing a single purpose, e.g., `init_game`, `print_board`, `get_move`, `get_winner`, etc.

- Modeling the board itself as a dictionary and naming the keys appropriately, can simplify updating the board based upon what the player types in. For example, assume you store the player's input in a variable named `move`, you can convert it to lower case using `.lower()`, and use it as the key to access the board, i.e., `board[move]`.

- The `in` operator is a great way to check if the player has entered a valid coordinate (`a1`, `b1`, etc.).

<br>
<br>
<br>


## Bonus User Stories

- AAP, I want to be prompted for a number of wins to play to before playing the first game.

- AAP, I want to see the score after each game has ended:

	```
	SCORE:
	Player X: xx   Player O: xx   Ties: xx
	```

- AAP, I want to see a congratulatory message when either player achieves the entered number of wins to play to:

	```
	Congrats to player X for winning 2 games!
	```