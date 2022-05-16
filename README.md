# socialNetwork-API

## Description

_Welcome to Social network API! This application was created with MongoDB, Node.js, using express, and Mongoose packages._ 

This application:
* is ran from the back-end and does not have a deployed page however, it can be ran on the command line and database changed through insomnia!

---

  ## Table of Contents
  
  - [Usage](#usage)
  - [Installation](#installation)
  - [Walk-through video](#walk-through)
  - [License](#license)


  ---

  ## Usage
Use this how you see fit to save information onto the database! 

Currently this application is able to:
* Create, read, update and delete a User
* Add and delete a friend to user
* Create, read, update and delete a Thought
* Add and delete a reaction to the thoughts
* Newly added functionality-Deleting users associated thoughts and deleting user from associated Users friends list



---

  ## Installation

This project is ran through Node.js, using an express server.
* `clone the repository` 
*  `npm install` in the command line to install the required dependencies. 
*  open in the terminal and then `npm run start` to start the server!
*  The server will start on `localhost:3001`

Routes are as follows:
* User Routes

`/api/users` to GET all users, PUT to update user NOTE: Will update fields passed in req.body. POST a new user NOTE: req.body needs to have two keys username and email.

`/api/users/:userId` to GET and DELETE single user NOTE: req.params needs to include users __id.

`/api/users/:userId/friends` to POST a new friend NOTE: req.body needs to include friends key and passing a current users __id.

`/api/users/:userId/friends/:friendId` to DELETE a friend. NOTE: req.params needs two users __id passed, first for the user to delete from and second for friend to delete.

* Thought Routes

`/api/thoughts` to GET all thoughts, POST a new thought NOTE: req.body needs to have two keys thoughtText and username, also if you would like to tie it to a current user you will need to also include userId with a current user __id.

`/api/thoughts/:thoughtId` to GET and DELETE thoughts. NOTE: req.params needs to include a thoughts __id.

`/api/thoughts/:thoughtId/reactions` to POST and DELETE reactions. NOTE:  for posting req.params needs a current thought __id and req.body needs reactionBody and username. For deleting a thought req.params is the same however req.body needs a reactionId.

  ---

## Walk-through

### Users API walkthrough

![Watch the video](https://github.com/ausamindec/socialNetwork-API/blob/main/assets/addUser.gif)

### UserFriends API Walkthrough

![Watch the video](https://github.com/ausamindec/socialNetwork-API/blob/main/assets/userFriends.gif)


### Thoughts API Walkthrough

![Watch the video](https://github.com/ausamindec/socialNetwork-API/blob/main/assets/thoughts.gif)

## License

MIT License

Copyright (c) 2022 Aminul Hoque

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.