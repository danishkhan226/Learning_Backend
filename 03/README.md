# ICTory Backend

ICTory Backend is a Node.js and Express-based API for user authentication and post creation. It uses MongoDB with Mongoose for data persistence and JWT-based cookies for protected routes.

## Features

- User registration
- JWT authentication with cookie-based tokens
- Protected post creation route
- MongoDB integration using Mongoose
- Express server setup with modular route structure

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- dotenv
- cookie-parser

## Project Structure

```bash
ICTory/
├── src/
│   ├── Controllers/
│   │   ├── auth.controller.js
│   │   └── post.controller.js
│   ├── db/
│   │   └── db.js
│   ├── model/
│   │   └── user.model.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── post.routes.js
│   ├── app.js
│   └── server.js
├── .env
├── package.json
├── server.js
└── README.md