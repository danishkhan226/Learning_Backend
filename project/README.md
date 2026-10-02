# Social Post App

A full-stack social media style app for creating and viewing posts. It includes a React frontend for the user interface and an Express + MongoDB backend for handling uploads and post storage.

## Features

- Create a post with an image and caption
- Upload images to ImageKit
- Store post data in MongoDB
- View all posts in a feed page
- React Router-based navigation

## Tech Stack

- Frontend: React, Vite, Axios, React Router
- Backend: Node.js, Express
- Database: MongoDB with Mongoose
- Media Storage: ImageKit

## Project Structure

```bash
project/
├── Backend/
│   ├── node_modules/
│   ├── services/
│   │   └── storage.service.js
│   ├── src/
│   │   ├── app.js
│   │   ├── db/
│   │   │   └── db.js
│   │   ├── models/
│   │   │   └── post.model.js
│   │   └──
│   ├── package.json
│   └── server.js
├── Frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── eslint.config.js
├── README.md
└── .gitignore
```

## Prerequisites

Before running the project, make sure you have:

- Node.js installed
- MongoDB running or a MongoDB connection string available
- ImageKit credentials configured

## Environment Variables

Create a `.env` file inside the `Backend` folder:

```env
MONGO_URI=your_mongodb_connection_string
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

## Installation

### 1. Install frontend dependencies

```bash
cd Frontend
npm install
```

### 2. Install backend dependencies

```bash
cd Backend
npm install
```

## Run the Project

### Start the backend

```bash
cd Backend
nodemon server.js
```

### Start the frontend

```bash
cd Frontend
npm run dev
```

Then open the Vite URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## API Endpoints

### Create a post

```http
POST /create-post
```

Request body:
- `image` as a file upload
- `caption` as text

### Get all posts

```http
GET /posts
```

## Notes

- The frontend route for creating posts is `/create-post`
- The frontend route for viewing the feed is `/feed`
- The backend uses CORS so the frontend can call the API on localhost

## Author

This project was built as a full-stack social posting app for learning and practice.
