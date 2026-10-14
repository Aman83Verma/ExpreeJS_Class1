# Express.js Class 1 — Server Setup & MongoDB Connection

This repository contains my learning progress from **Class 1 of Express.js Backend Development**. In this project, I learned how to create a basic Express.js server, handle HTTP requests, process JSON request bodies, define API routes, and connect a Node.js application to MongoDB using Mongoose.

The project is part of my hands-on practice while learning backend development with JavaScript and Node.js.

## 📚 Topics Covered

- Setting up a basic Express.js server
- Understanding the Express application instance
- Creating GET and POST API routes
- Handling HTTP requests and responses
- Parsing JSON request bodies
- Extracting data from `req.body`
- Connecting MongoDB with Mongoose
- Handling successful database connections and connection errors
- Using Nodemon for automatic server restarts
- Configuring npm scripts to run the application

## 🛠️ Technologies & Modules Used

| Technology / Module | Purpose |
|---|---|
| Node.js | JavaScript runtime for backend development |
| Express.js | Creating the server and defining API routes |
| Mongoose | Connecting to MongoDB and working with MongoDB data |
| Nodemon | Automatically restarting the server when code changes |
| dotenv | Loading environment variables from a `.env` file |
| MongoDB | NoSQL database used for the database connection |
| Postman | Testing HTTP requests and API responses |

## 📁 Project Structure

```text
Backend_Classes_ExpressJS/
└── ExpressJS_Class1/
    ├── node_modules/
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    ├── README.md
    └── server.js
```

**File and folder descriptions:**

- `server.js` — Main application file containing the Express server, API routes, JSON body parsing, and MongoDB connection.
- `package.json` — Contains project metadata, dependencies, and npm scripts.
- `package-lock.json` — Records the resolved dependency versions for consistent installations.
- `.gitignore` — Specifies files and folders Git should not track.
- `node_modules/` — Contains installed npm packages. This folder should not be uploaded to GitHub.

## ⚙️ Prerequisites

Before running this project, make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- [Postman](https://www.postman.com/downloads/) (for API testing)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Navigate to the project directory:

```bash
cd Backend_Classes_ExpressJS/ExpressJS_Class1
```

Replace `<YOUR_GITHUB_REPOSITORY_URL>` with your actual GitHub repository URL.

### 2. Install Dependencies

Run the following command in the terminal:

```bash
npm install
```

This installs the dependencies specified in `package.json`.

### 3. Start MongoDB

Make sure your local MongoDB server is running before starting the application.

The application currently connects to:

```text
mongodb://localhost:27017/myDataBase
```

MongoDB must be accessible at the default local port `27017`.

### 4. Start the Server

**Using npm start:**

```bash
npm start
```

**Using Nodemon during development:**

```bash
npm run dev
```

The development command automatically restarts the server when you modify and save your code.

Once the server starts, open:

```text
http://localhost:3000
```

## 🔗 API Endpoints

### 1. Get Welcome Message

**Endpoint:** `GET /`

**Full URL:** `http://localhost:3000/`

**Description:** Returns a welcome message from the Express.js server.

**Example response:**

```text
Hi! I am Aman. I am the best coder in the World.
```

**How to test:**

1. Open Postman.
2. Select the `GET` method.
3. Enter `http://localhost:3000/`.
4. Click **Send**.

### 2. Submit Car Details

**Endpoint:** `POST /api/cars`

**Full URL:** `http://localhost:3000/api/cars`

**Description:** Accepts car details in JSON format, extracts the model and brand, and logs them to the server console.

**Request headers:**

```text
Content-Type: application/json
```

**Request body:**

Select **Body → raw → JSON** in Postman and enter:

```json
{
  "model": "Swift",
  "brand": "Maruti Suzuki"
}
```

**Example response:**

```text
The Car Name & Brand is Submitted.
```

The server console will display the submitted values:

```text
Swift
Maruti Suzuki
```

**How to test:**

1. Open Postman.
2. Select the `POST` method.
3. Enter `http://localhost:3000/api/cars`.
4. Open the **Body** tab.
5. Select **raw** and choose **JSON**.
6. Enter the sample request body.
7. Click **Send**.

## 🗄️ MongoDB Connection

This project uses Mongoose to connect the Express.js application to a local MongoDB database.

**Connection string:**

```javascript
mongodb://localhost:27017/myDataBase
```

**Connection code:**

```javascript
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/myDataBase")
  .then(() => {
    console.log("Connection Sucessful.");
  })
  .catch((error) => {
    console.log("Received an Error.");
    console.log(error);
  });
```

**Expected behavior:**

- When MongoDB is running and the connection succeeds, the server logs a success message.
- If the connection fails, the error is logged to the console.

MongoDB creates the database and its collections as needed when data is first stored. This project establishes a database connection but does not yet define Mongoose schemas or save car records.

## 📦 Installed npm Packages

The project uses the following packages:

| Package | Purpose |
|---|---|
| `express` | Web framework for building the backend server |
| `mongoose` | MongoDB object modeling and database connectivity |
| `nodemon` | Development server monitoring and automatic restarts |
| `dotenv` | Loading configuration from environment variables |

The dependencies are declared in `package.json` and installed using `npm install`.

**Note:** The current `server.js` imports `body-parser` and uses `bodyParser.json()`, but `body-parser` is not listed as a direct dependency in the supplied `package.json`. Install it explicitly with `npm install body-parser`, or replace it with Express's built-in JSON middleware:

```javascript
app.use(express.json());
```

The `dotenv` package is installed, but environment variables are not currently loaded or used in the supplied server code.

## 🧠 Key Learnings

Through this project, I practiced:

- Creating and starting an Express.js server.
- Understanding how HTTP methods such as GET and POST work.
- Defining routes to handle incoming requests.
- Accessing JSON data sent by clients.
- Sending responses from the backend to the client.
- Connecting Node.js applications to MongoDB with Mongoose.
- Handling database connection success and failure.
- Using npm scripts to simplify development.

## 🔮 Future Improvements

- Move the MongoDB connection string and port configuration into a `.env` file.
- Implement Mongoose schemas and models.
- Save car details to MongoDB.
- Add request validation and error handling.
- Organize routes and controllers into separate files.
- Implement CRUD operations (Create, Read, Update, Delete).
- Add appropriate HTTP status codes and JSON responses.

**Domain Link:** https://aman83verma.github.io/ExpreeJS_Class1/

## 👨‍💻 Author

**Aman Verma**

Java Full Stack Developer | Learning Backend Development with Node.js and Express.js

This repository represents my first Express.js class project and the beginning of my hands-on backend development journey.

---

⭐ If you find this repository useful for learning the basics of Express.js, feel free to explore the code and follow my progress in backend development.
