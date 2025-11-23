# CRUD API in Memory

A RESTful Express API that implements core CRUD operations using in-memory data storage. This project demonstrates Express route handling, HTTP status codes, JSON responses, and error handling patterns.

## 🚀 Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **Vitest** - Testing framework (optional)
- **Supertest** - HTTP assertion library (optional)

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Postman or similar REST client (for testing)

## 🛠️ Setup Instructions

1. **Clone or download this repository**

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:3001`

4. **Run tests (if included)**
   ```bash
   npm run test
   ```

## 📚 API Endpoints

### Base URL

```
http://localhost:3001
```

### Endpoints

#### GET /boardgames

Returns all boardgames in the collection.

**Response:** `200 OK`

```json
[
  {
    "id": "3xAM1e5tR1ngI0",
    "title": "Betrayal at House on the Hill",
    "price": "$50-$65",
    "tags": ["Co-op", "Horror", "Dice-rolling", "Modular Board"],
    "description": "You and a group of friends all go to the spooky house on the hill, but secretly, one of you wants to make sure no one makes it out alive."
  },
  {
    "id": "an0tH3reX8m9lE",
    "title": "Munchkin",
    "price": "$10-$25",
    "tags": ["Card Game", "Fantasy", "Humor", "Competative"],
    "description": "The dungeon awaits for you to find treasure, glory, and laywers?! First one to loot their way to level 10 wins!"
  }
]
```

#### POST /cats

Creates a new boardgame in the collection.

**Request Body:**

```json
{
  "title": "Munchkin",
  "price": "$10-$25",
  "tags": ["Card Game", "Fantasy", "Humor", "Competative"],
  "description": "The dungeon awaits for you to find treasure, glory, and laywers?! First one to loot their way to level 10 wins!"
}
```

**Response:** `201 Created`

```json
{
  "id": "an0tH3reX8m9lE",
  "title": "Munchkin",
  "price": "$10-$25",
  "tags": ["Card Game", "Fantasy", "Humor", "Competative"],
  "description": "The dungeon awaits for you to find treasure, glory, and laywers?! First one to loot their way to level 10 wins!"
}
```

#### GET /boardgames/:id

Retrieves a specific board game by ID.

**Response:** `200 OK`

```json
{
  "id": "an0tH3reX8m9lE",
  "title": "Munchkin",
  "price": "$10-$25",
  "tags": ["Card Game", "Fantasy", "Humor", "Competative"],
  "description": "The dungeon awaits for you to find treasure, glory, and laywers?! First one to loot their way to level 10 wins!"
}
```

**Error Response:** `404 Not Found`

```json
{
  "error": "Item not found"
}
```

#### DELETE /boardgames/:id

Removes a specific board game from the collection.

**Response:** `200 OK`

```json
{
  "message": "Item removed successfully"
}
```

**Error Response:** `404 Not Found`

```json
{
  "error": "Item not found"
}
```

## 🧪 Example Requests

### Using cURL

**GET all board games:**

```bash
curl http://localhost:3001/boardgames
```

**POST a new cat:**

```bash
curl -X POST http://localhost:3001/boardgames \
  -H "Content-Type: application/json" \
  -d '{"id": "an0tH3reX8m9lE", "title": "Munchkin", "price": "$10-$25", "tags": ["Card Game", "Fantasy", "Humor", "Competative"], "description": "The dungeon awaits for you to find treasure, glory, and laywers?! First one to loot their way to level 10 wins!"}'
```

**GET a specific board game:**

```bash
curl http://localhost:3001/boardgames/550e8400-e29b-41d4-a716-446655440000
```

**DELETE a board game:**

```bash
curl -X DELETE http://localhost:3001/boardgames/550e8400-e29b-41d4-a716-446655440000
```

### Using Postman

1. **GET Request:**

   - Method: `GET`
   - URL: `http://localhost:3001/boardgames`
   - Headers: None required

2. **POST Request:**

   - Method: `POST`
   - URL: `http://localhost:3001/boardgames`
   - Headers: `Content-Type: application/json`
   - Body (raw JSON):
     ```json
     {
       "id": "an0tH3reX8m9lE",
       "title": "Munchkin",
       "price": "$10-$25",
       "tags": ["Card Game", "Fantasy", "Humor", "Competative"],
       "description": "The dungeon awaits for you to find treasure, glory, and laywers?! First one to loot their way to level 10 wins!"
     }
     ```

3. **GET by ID:**

   - Method: `GET`
   - URL: `http://localhost:3001/boardgames/:id`
   - Replace `:id` with an actual ID from your collection

4. **DELETE:**
   - Method: `DELETE`
   - URL: `http://localhost:3001/boardgames/:id`
   - Replace `:id` with an actual ID from your collection

## ⚠️ Error Responses

All error responses follow a consistent format:

**400 Bad Request** (Invalid input):

```json
{
  "error": "Name is required"
}
```

**404 Not Found** (Resource doesn't exist):

```json
{
  "error": "Item not found"
}
```

## 📁 Project Structure

```
.
├── src/
│   ├── index.js          # Express app setup
├── package-lock.json
├── package.json
├── README.md
└── .gitignore
```

## 🎯 Features

- ✅ CRUD operations (Create, Read, Update/Delete)
- ✅ In-memory data storage
- ✅ Unique ID generation using `crypto.randomUUID()`
- ✅ Consistent error handling
- ✅ Proper HTTP status codes
- ✅ JSON request/response format
- ✅ Input validation

## 📝 Notes

- Data is stored in memory and will be lost when the server restarts
- This is a learning project demonstrating Express fundamentals
- In production, you would use a database (like PostgreSQL) for persistent storage

## 🤝 Contributing

This is a learning project. Feel free to fork and experiment!

## 📄 License

This project is for educational purposes.

---

**Built as part of Week 1 Server Lessons**
