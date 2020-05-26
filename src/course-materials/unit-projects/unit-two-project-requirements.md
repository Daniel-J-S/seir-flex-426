# Project Two: Your First Full Stack Application

## Overview

This second project is your first foray into **building a full-stack 
application.** You'll be **building a Node/Express/MongoDB app** from the ground up yourself.

**You will be working individually for this project;** you'll be 
designing and coding the app yourself. 

You get to decide what you want to build - as long as it meets the technical requirements outlined below.

Once you've decided what you will build, please contact your instructional team for approval of your idea and then begin working on the **Planning & Presentation Requirements** below.



## Planning & Presentation Requirements

- By Wednesday Jun 3rd, EOD (End of Day), you need to have turned in the following:

- A **[Trello](https://trello.com/) board** with:
    
    ☐ **User Stories**, each moving from left to right in the following 
      three lists in your board:

    - **Ice Box**
    - **Current/MVP**
    - **Completed**
  
      <br>
      <br>**User Stories must follow the following template:** <br>_As a \<user role\>, I want \<feature\>, because \<reason\>._ <br><br>The _reason_ is optional if it's blatantly obvious.<br>
      Note: Prioritize your user stories within the Ice Box with your "wish 
        list" stories at the bottom.
    
    ☐ **Wireframes of the main pages of functionality**, e.g. Landing Page, Posts Index Page, Favorite Posts Page, Add Post Page, etc.
    
    ☐ An **ERD** showing the attributes of each model (or schema in the case of embedding) and the associations between them. Here's a [YouTube video to show you how](https://www.youtube.com/watch?v=QpdhBUYk7Kk).

    [**Click here for an example you can use for inspiration**](https://trello.com/b/igfMN4t1/mongoose-movies)

### Finished Project Presentation 

You will have a maximum of 10 minutes to present your project following these guidelines:


1. **Introduce the Project:**

	☐ Intro your app by paraphrasing the README.
	
2. **Demonstrate the Project:**

	☐ Launch the app by clicking the link in the README.
	
	☐ Sign up a new user, then immediately log out.
	
	☐ Log in with your preferred user and demonstrate the features of the app.
	
	☐ Be sure to demo full-CRUD data operations.
	
3. **Show/discuss your code:**

	☐ Show the "main" Mongoose model.
	
	☐ Show your favorite EJS template.
	
	☐ Show the controller for the main model.

4. **Share the experience:**

	☐ What was your biggest challenge?
	
	☐ What are your key learnings/takeaways?
	
5. **Q & A + Feedback**



## Technical Requirements

### Your App Must:

☐ **Have at least 2 data entities in addition to the "User" Model**.  One entity that represents the main functional idea for your app and another with a **1:M** or **M:M** relationship with that main entity (embedded or referenced).

☐ **Use OAuth authentication**. 

☐ **Implement basic authorization** by restricting access to certain features, such as editing and deleting a resource, to an authenticated user, or the user that created that resource.

☐ Have **complete CRUD data operations** between all data entities. For example, you can have functionality that **C**reates & **U**pdates a _post_ (data entity) and satisfy **D**elete functionality by implementing the ability to delete _comments_ (data entity).

☐ Use a CSS stylesheet **(Additional Use of a CSS Framework such as Bootstrap or Materialize is optional, however your must have your own stylesheet with some styles defined as well)**

☐ Be **deployed online** (Heroku) - _We will show you how to do this_.

### Optionally, Your App May:

☐ Consume a third-party API.

☐ Expose its own API where it returns data resources as JSON. (You will need to research how to do this ... hint `res.json()`)


## Necessary Deliverables

☐ **A working full-stack app that meets or exceeds the above technical requirements, built by you, and hosted on Heroku**.

- **A ``README.md`` file** with these sections:

  ☐ **\<Your app's title\>**: A description of your app.  Background info of the app is a nice touch.
  
  ☐ **Screenshot(s):** Images of your actual app.
  
  ☐ **Technologies Used**: List of the technologies used, e.g., JavaScript, HTML, CSS...
  
  ☐ **Getting Started**: In this section include the link to your deployed app and any instructions you deem important. 
  
  ☐ **Next Steps**: Planned future enhancements (icebox items).
  
  > Note: Don't underestimate the value of a well crafted `README.md`. The `README.md` introduces your project to prospective employers and forms their first impression of your work!

☐ **Frequent commits dating back to the very beginning of the project**. Commit messages should be in the present tense, e.g., "Style landing page" instead of "Styled landing page".



## Suggested Ways to Get Started

- Because your app's functionality revolves around the logged in user, **implement authentication and basic navigation first!**
- **Discuss your app idea with an instructor to get their feedback before you dive too deep into user stories and wireframes.**
- **Remember to keep things small and focus on the MVP** – feature creep can doom a project!


## Project Idea Guidance

Nearly all of the applications you interact with on a daily basis
would do for this project as most are "full-stack" CRUD apps. 

#### Do Not Do Non-CRUD Applications Such As:

- Games
- Portfolio, or presentational pages
- Marketing or content oriented websites

#### Good Examples

Some of the best apps are solutions that track or manage things of **personal interest to you**:
  
- Music lesson tracking
- Soccer team tracker
- Rock climbing planner

So much of the Internet is CRUD apps!

- Social media:
  - Twitter
  - Instagram
  - Reddit
- Marketplaces: 
  - Craigslist
  - Etsy
- Organizational or Business apps:
  - Customer management
  - Payroll/Accounting

Many simple apps can have their functionality enhanced by implementing the ability of users to comment on, and/or like/favorite items. 

Another piece of advice:  If you choose to develop an app that has the concept of a shopping cart (storefront), do not attempt to implement the actual payment functionality.

#### Actual Recent Student Projects

- [Cookbook](https://cookbook-app-project.herokuapp.com/)
- [Aberrant Barter](https://aberrant-barter.herokuapp.com/)
- [Eat Me](https://eat-me-recipes.herokuapp.com/)
- [NIGHTOWL Coffee](https://nightowl-coffee.herokuapp.com)
- [Works For Me](http://works-for-me.herokuapp.com/login)
- [CampShare](https://campshare.herokuapp.com/)
- [Hiking With Friends](https://hikingwithfriends.herokuapp.com/)
- [Is It Fun?](https://isitfun.herokuapp.com/)
- [Cat Instagram](https://nyanstagram.herokuapp.com/)



## Project Feedback + Evaluation

- Your instructors will be evaluating your project during your demonstration as well as reviewing the code in your repo.
  
- If your instructors determine that your project does not meet the above requirements (denoted using checkboxes), you and your instructional team will coordinate a resubmission deadline.
  
  
- If there is a specific section of code that you would like an instructor to provide feedback, please ask!
  

### Useful Resources

- **[Writing Good User Stories](https://www.freecodecamp.org/news/how-and-why-to-write-great-user-stories-f5a110668246/)** _(user story tips)_
- **[Trello](https://trello.com/)**
- **[Example Trello Board](https://trello.com/b/igfMN4t1/mongoose-movies)**
- **[How to Create ERDs](https://www.youtube.com/watch?v=QpdhBUYk7Kk)**
