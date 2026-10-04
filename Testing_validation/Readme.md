# Testing Validation Backend

This project is a simple Node.js + Express backend created to practice API validation and testing in a backend application.

## Features
- Express server setup
- JSON parsing for request bodies
- User registration validation using `express-validator`
- Basic API smoke test using `Jest` and `Supertest`
- Simple folder structure for backend learning and experimentation

## Tech Stack
- Node.js
- Express.js
- Express Validator
- Jest
- Supertest
- Nodemon

## Project Structure
```bash
Testing_validation/
├── src/
│   ├── app.js
│   ├── middlewares/
│   │   └── validation.middleware.js
│   └── test/
│       └── app.test.js
├── server.js
├── package.json
├── package-lock.json
└── Readme.md
```

## Installation
```bash
npm install
```

## Run the Application
```bash
npm run dev
```

The server runs on:
```bash
http://localhost:3000
```

## API Endpoints
### GET /
Returns a simple welcome response.

Response example:
```json
{
  "message": "Hello World"
}
```

### POST /register
Registers a new user after validation.

Request body example:
```json
{
  "username": "john",
  "email": "john@example.com",
  "password": "123456"
}
```

Validation rules:
- `username` must be a string with length between 3 and 20 characters
- `email` must be a valid email address
- `password` must be at least 6 characters long

Example success response:
```json
{
  "message": "user register successfully",
  "user": {
    "username": "john",
    "email": "john@example.com",
    "password": "123456"
  }
}
```

## Testing
Run the test suite with:
```bash
npx jest src/test/app.test.js
```

## Notes
This project is intended for learning backend validation and API testing. It can be extended with database integration, authentication, and more advanced middleware.
