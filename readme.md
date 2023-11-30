 [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  # Title
  ThoughtSHARE
  
  ## Description

  ThoughtSHARE is a dynamic social networking API allows users to seamlessly create, update and organize their thoughts.Developed on a robust backend infrastructure it utilizes Node.js, Express and MongoDB, it effortlessly manages API requests,enabling effective user data that includes thoughts, reactions and thought interactions.
 
  
  ## Table of Contents

  - [Installation](#Installation)
  - [Features](#features)
  - [Notes](#Notes)
  - [Usage](#usage)
  - [Links](#links)
  - [credits](#credits)
  - [License](#license)
  
  ## Installation

  To execute ThoughtSHARE in your machine
  1. Clone the repository using command line ``git clone``
  1. Run command : ```npm install or i```
  2. Install MongoDB in your system and make sure it is connected
  3. Seed the database ``npm run seed`` in your vs code terminal
  4. Run the application with run command: ``` npm run start ```

  ## Features
  - Delivers functionalities user operatons like creation, update and deletion
  - Add and manage user thoughts and effortlessly add or remove friends from their network
  - Create and delete reaction to thoughs
  - User deletion and associated thoughts with that user


  ## Notes

- expressjs: Express.js is a minimal and flexible web application framework for Node.js. It uses middleware to perform various tasks during the request/response cycle and more. Also simple way to define the routes for the application is possible through this framework. Also it support the HTTP methods like GET, POST, PUT , DELETE which makes it easy to handle the various requests
- MongoDB Compass: MongoDB Compass is a powerful GUI for querying, aggregating, and analyzing your MongoDB data in a visual environment.
Compass is free to use and source available, and can be run on macOS, Windows, and Linux.
- seeding: Seeding refers to populating the database with a predefined data.It is used in the testing phase in a project
- Insomnia: Popular REST API client that allow to test and interact with api routes and API


## Usage

- Execute API requests using tools like Postmon or Insomnia to interact with and manage users, thoughts, friends and reactons through the endpoints
- Deploy the application to Heroku.Following steps for launching the application in Heroku.

1. Create Heroku account and install the Heroku CLI `npm install -g heroku`
2. log in Heroku        
3. create new Heroku app `New in Heroku application`, link github repository to Heroku app
4. setup MongoDB database on a cloud platform like MongoDb Atlas and make connection to heroku apps
5. Initialise your git repository in a new or existing director and commit and deploy it to Heroku using Git

  ## links
- Link of my [Github repository]()
- Link to screencastify of insomnia Demo [Application_walkthrough] ()

  ## Credits
- npm: [node Package manager](https://www.npmjs.com)
- Expressjs: [nodejs popular web framework](https://expressjs.com)
- Mongo: [Documentation of MongoDB](https://www.mongodb.com/)
- Insomnia: [Rest client](https://insomnia.rest/)

  ## License
   All resources provided by this project are available for free use and distribution,subject to the term of Apache license.
                 (c)Copyright 2023 Sabin Thapa