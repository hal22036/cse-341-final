# Overview

{The Meal Ideas API is designed to provide users with meal ideas. Users can access a wide range of meal suggestions. Whether you're looking for a quick weeknight dinner or planning a special occasion dessert, this API has you covered.}

{The API utilizes OAuth login, connecting to GitHub for authentication. Users can log in using their GitHub credentials to access additional features and personalize their meal suggestions. To manage authentication state on the frontend, the API uses a login session cookie. This cookie is set upon successful GitHub OAuth login and is used to run conditional checks before granting access to certain parts of the frontend. This ensures that only authenticated users can perform certain actions and access personalized meal recommendations. The following pieces of data in the application need to be secured:

User login information, especially passwords.
To demonstrate web security principles, passwords are securely hashed before being stored in the database. Additionally, user authentication is required before allowing any CRUD (Create, Read, Update, Delete) operations on user data.
The project is organized using a structured file system with the following components:

server: Contains the main server application.
routers: Contains route definitions and API endpoints.
controllers: Houses the logic for handling API requests.
Thunder Client: Takes the place of .rest files.
middleware: Facilitates authentication and validation.
documents: Are the json files for the collections.
This file structure promotes code organization and separation of concerns, making the project more maintainable and scalable.}

{The Meal Ideas API uses MongoDB as its database to store user data and meal information. Data in the MongoDB database is stored in the form of JSON documents. Each document represents a meal idea, containing details such as the meal name, ingredients, preparation steps, and user-specific data.}

{Provide a link to your YouTube demonstration. It should be a 4-5 minute demo of the software running and a walkthrough of the code. Focus should be on sharing what you learned about the language syntax.}

[Software Demo Video](http://youtube.link.goes.here)

# Development Environment

{Describe the tools that you used to develop the software}

{Describe the programming language that you used and any libraries.}

# Useful Websites

{Make a list of websites that you found helpful in this project}

- [Render](https://cse-341-final.onrender.com)
- [github link](https://github.com/hal22036/cse-341-final)

# Future Work

{Make a list of things that you need to fix, improve, and add in the future.}

- Item 1
- Item 2
- Item 3