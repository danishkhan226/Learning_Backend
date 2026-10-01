# Notes API

A REST API for creating, listing, editing, and deleting notes. Built with Node.js, Express, and MongoDB using Mongoose.

## Requirements

- Node.js and npm
- A MongoDB database

## Setup

1. Install dependencies:

	 ```bash
	 npm install
	 ```

2. Configure your MongoDB connection string in `src/db/db.js`. Keep credentials out of source control; use environment variables for secrets in real deployments.

3. Start the server:

	 ```bash
	 npx nodemon server.js
	 ```

	 The API listens on `http://localhost:3000`.

## Endpoints

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/notes` | Return all notes |
| `POST` | `/notes` | Create a note |
| `PATCH` | `/notes/:id` | Update a note's description |
| `DELETE` | `/notes/:id` | Delete a note |

### Create a note

Send JSON with both `Title` and `description` fields:

```http
POST /notes
Content-Type: application/json

{
	"Title": "Shopping list",
	"description": "Milk and bread"
}
```

### Update a note

Replace `:id` with the MongoDB document ID. The request body updates the description:

```http
PATCH /notes/:id
Content-Type: application/json

{
	"description": "Milk, bread, and eggs"
}
```

### List and delete notes

```http
GET /notes
DELETE /notes/:id
```
