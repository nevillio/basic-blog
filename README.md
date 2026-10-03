# Create a Blog Application

## Introduction

### Project Setup

- This project has two folders:
  - The `api` folder contains the code for the fake API we will be using.
  - The `client` folder contains all html, css and react code for the client.
- Start the API with `pnpm dev` after installing all the dependencies.
- Start the client with `pnpm dev` from the `client` directory.
- If you need to reset the database, copy the `db.example.json` file to `db.json`.

The goal of this project is to create an application that renders out all of the data from the API. This API contains data on users, comments, posts, and todos.

## API Information

The API has the following endpoints:

- `GET /posts` - Returns all of the posts
- `GET /posts/:id` - Returns a single post
- `GET /posts/:id/comments` - Returns all of the comments for a single post
- `GET /users` - Returns all of the users
- `GET /users/:id` - Returns a single user
- `GET /posts?userId=<userId>` - Returns all of the posts for a single user
- `GET /todos` - Returns all of the todos
- `GET /todos?userId=<userId>` - Returns all of the todos for a single user
- `POST /posts` - Create a new post
- `PUT /posts/:id` - Update a post
- `GET /posts?q=<query>&userId=<userId>` - Returns all of the posts that match the query and userId

## Instructions

### Basic Blog

#### Essentials

1. Create a nav bar that contains links to the following pages:
   - Posts
   - Users
   - Todos
2. Create a Posts page that renders out all of the posts from the API in a card based grid where each card contains the title, body, and a link to view the post.
3. Create a Users page that renders out all of the users from the API in a card based grid where each card contains the user name, company name, email, website, and a link to view the user.
4. Create a Todos page that renders out all of the todos from the API in a list where each item contains the todo title and is crossed off if completed.
5. Create a Post page that renders out the post title, and body.
6. Create a User page that renders out the user name, company name, email, website, and address.

#### Bonus

1. Add a loading spinner that shows while the data is being fetched. Make sure this only renders over the main content area and does not cover up the navbar.
2. Add a 404 error page that still shows the navbar, but renders a 404 error message inside the main content area.
3. Add an error page that renders a generic error message in production, but renders the full error message and stack trace in development.
4. On the Post page render out all of the comments for that post as well as the name for the user that created the post. Make the user name is a link to the user page.
5. On the User page render out all of the posts that user created in a grid format as well as all the todos that user has in a list format.

### Advanced Blog

#### Essentials

1. Create a New Post page that renders out a form that allows the user to create a new post. Don't forget to add a button to the Posts page linking to the New Post page. The form should have the following fields:
   - Title
   - Body
   - Author (User)
2. Create an Edit Post page that renders out a form that allows the user to edit an existing post. The form should be identical to the new post form. Don't forget to add a button to the Post page linking to the Edit Post page.
3. Add a filter to the Posts page that allows the user to filter the posts by a query.

#### Bonus

1. Add a filter to the Posts page that allows the user to filter the posts by a user.
2. Disable the submit button on the New Post and Edit Post if the form is being submitted.
3. Handle the following validations on the New Post and Edit Post pages:
   - Title is required
   - Body is required
   - User is required
