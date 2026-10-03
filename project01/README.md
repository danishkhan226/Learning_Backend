# Music API Backend

A Node.js and Express backend for a music platform that supports user and artist authentication, music uploads, album management, and protected API routes.

## Features

- User registration, login, and logout
- JWT-based authentication using cookies
- Role-based access control for users and artists
- Artist-only music upload support
- Album creation and retrieval
- MongoDB persistence with Mongoose
- Media upload integration with ImageKit
- File upload handling with Multer

## Tech Stack

- Node.js
- Express
- MongoDB + Mongoose
- JWT
- bcryptjs
- Cookie Parser
- Multer
- ImageKit
- dotenv

## Project Structure

```bash
project01/
├── src/
│   ├── app.js
│   ├── controller/
│   ├── db/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── service/
├── server.js
├── .env
├── package.json
├── package-lock.json
└── README.md
```

## Environment Variables

Create a `.env` file in the project root with the following values:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

## Installation

```bash
npm install
```

## Running the Application

```bash
node server.js
```

Or with auto-reload:

```bash
npx nodemon server.js
```

## API Endpoints

### Authentication

#### Register a user

```http
POST /api/auth/register
```

Request body:

```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "secret123",
  "role": "user"
}
```

#### Login

```http
POST /api/auth/login
```

Request body:

```json
{
  "username": "john_doe",
  "password": "secret123"
}
```

#### Logout

```http
POST /api/auth/logout
```

### Music and Albums

#### Upload music (artist only)

```http
POST /api/music/upload
```

- Requires artist authentication
- Accepts a multipart form-data upload with a `music` file

#### Create album (artist only)

```http
POST /api/music/album
```

Request body:

```json
{
  "title": "My First Album",
  "musics": ["music_object_id_1", "music_object_id_2"]
}
```

#### Get all music

```http
GET /api/music
```

- Requires valid user or artist token

#### Get all albums

```http
GET /api/music/album
```

#### Get album by ID

```http
GET /api/music/album/:albumId
```

## Notes

- JWT tokens are stored as cookies named `token`.
- The application uses role-based middleware to restrict access to artist-only endpoints.
- Uploaded music files are stored through ImageKit and the resulting URL is saved in MongoDB.

## License

This project is for educational and backend development practice.
