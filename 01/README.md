# Notes API

A small REST API built with Node.js and Express for creating, listing, updating, and deleting notes.

## Requirements

- Node.js 18 or later
- npm

## Setup

Install the dependencies:

```bash
npm install
```

Start the server from this directory:

```bash
node server.js
```

The API listens at `http://localhost:3000`.

## Endpoints

| Method | Path | Description |
| --- | --- | --- |
| `POST` | `/notes` | Create a note |
| `GET` | `/notes` | List all notes |
| `PATCH` | `/notes/:index` | Update a note's description by its zero-based index |
| `DELETE` | `/notes/:index` | Delete a note by its zero-based index |

### Create a note

```bash
curl -X POST http://localhost:3000/notes \
	-H "Content-Type: application/json" \
	-d '{"title":"First note","description":"Hello, notes!"}'
```

### List notes

```bash
curl http://localhost:3000/notes
```

### Update a note

Send the new description in the request body. Replace `0` with the note's index.

```bash
curl -X PATCH http://localhost:3000/notes/0 \
	-H "Content-Type: application/json" \
	-d '{"description":"Updated note text"}'
```

### Delete a note

```bash
curl -X DELETE http://localhost:3000/notes/0
```

## Storage

Notes are stored in memory, so they are cleared whenever the server restarts. This project does not yet use a database.
