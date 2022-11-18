# Book-Search-Engine

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Our Task
Our task this week is to refactor a Google Books API search engine built with a restful API into a Graphql API built with Apollo Server. Apollo Server should be set up so Graphql queries and mutations can fetch and modify data. The existing authentication middleware needs to be modified to work with the context of Graphql API. We will need to create an Apollo Provieder so that requests can be reach the Apollo Server. The application will need to be deployed to Heroku with a MongDB database using MongoDB Atlas. 

## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

## Table of Contents

  - [Installation](#installation)
  - [Screenshots](#screenshots)
  - [Links](#links)

## Installation

  * apollo-server-express
  * apollo/client
  * bcrypt
  * express
  * graphql
  * jsonwentoken
  * mongoose
  * nodemon
  * concurrently 


## Screenshots

The following screenshots demonstrates the application functionality:

![Demonstration of login functionality.](./Assets/login.png)
Login form 

![Demonstration of sign-up functionality.](./Assets/signup.png)
Sign-up form

![Demonstration of searched books.](./Assets/searchbooks.png)
When you enter a book name in the search bar you are shown a multitude of books with that name in it.

![Demonstration of saved books.](./Assets/savedbooks.png)
Demomstration of saved books page when logged in to your account.


## Links

* GitHub: https://github.com/sflores926/Book-Search-Engine
* Heroku: https://radiant-bayou-27595.herokuapp.com/






