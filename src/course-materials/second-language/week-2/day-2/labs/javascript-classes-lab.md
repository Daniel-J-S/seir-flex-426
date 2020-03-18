---
track: "Second Language"
title: "JavaScript Classes Lab"
week: 2
day: 2
type: "lab"
---


# JavaScript Classes Lab

## Intro

Now that you've learned about using **classes** in JavaScript to create objects, it's time for some practice! <br>In this lab, you will choose one of the object hierarchies below, **Bank Accounts** or **People**, and write the classes to implement it.

## Setup  

- Inside your classroom folder, `SEIR-FLEX-HOMEWORK-AND-LABS`, create a folder inside your labs folder of this week's folder called `js-classes-lab`
	- So, `SEIR-FLEX-HOMEWORK-AND-LABS/w02/labs/js-classes-lab`

- Inside of `js-classes-lab` create the following folder/file structure:

```shell
w02/
  labs
    js-classes-lab/
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
    <title>JS Classes Lab</title>
</head>
<body>
    <h1>JS Classes Lab</h1>
    <h3>Open JS Console To See Output</h3>
    <p>Macbook Keyboard shortcut: <code>[command] + [option] + j</code></p>
    <script src="./js/script.js"></script>
</body>
</html>
```


### Bank Accounts

**`BankAccount`** class:

| Derived From | Properties | Methods |
| :---: | :---: | :---: |
| n/a | `ownerName`, `balance`, `acctNum` (generated in constructor - not passed in) | `deposit`, `withdraw` |

**`CheckingAccount`** class:

| Derived From | Additional Properties | Additional Methods |
| :---: | :---: | :---: |
| `BankAccount` | `overdraftEnabled` |  Override `withdraw` to implement overdraft feature |

**`SavingsAccount`** class:

| Derived From | Additional Properties | Additional Methods |
| :---: | :---: | :---: |
| `BankAccount` | None |  Override `withdraw` to disallow withdrawals completely :) |


### People

**`Person`** class:

| Derived From | Properties | Methods |
| :---: | :---: | :---: |
| n/a | `firstName`, `lastName` | `sayHello` |

**`Employee`** class:

| Derived From | Additional Properties | Additional Methods |
| :---: | :---: | :---: |
| `Person` | `company`, `wage` (string), `active` (set to `true` in constructor) | `receiveRaise` (updates `wage`), `terminate` (set `active` to false) |

**`Manager`** class:

| Derived From | Additional Properties | Additional Methods |
| :---: | :---: | :---: |
| `Employee` | `department` | `giveRaise` (calls `receiveRaise` on Employee object passed as arg) |

**`Worker`** class:

| Derived From | Additional Properties | Additional Methods |
| :---: | :---: | :---: |
| `Employee` | `manager` (references a `Manager` object) | Your choice - be creative! |
