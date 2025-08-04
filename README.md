# Landing Page Form Backend

This is a simple Express.js backend application to handle form submissions from a landing page and store the data in a MongoDB database.

## Features

- Express server
- MongoDB integration with Mongoose
- Form data validation
- CORS configuration to allow requests from specific domains

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v14 or later)
- [npm](https://www.npmjs.com/)
- A MongoDB database instance (local or from a cloud provider like MongoDB Atlas)

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### 1. Clone the repository

First, clone the repository to your local machine.
```bash
git clone <your-repository-url>
cd <repository-folder>
```

### 2. Install dependencies

Install the project dependencies using npm.
```bash
npm install
```

### 3. Create a `.env` file

Create a `.env` file in the root of the project. This file will hold your environment variables. Copy the example below and replace the placeholder values with your actual data.

```env
# .env example

# Your MongoDB connection string
MONGO_URI=mongodb+srv://user:<password>@cluster.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

# Comma-separated list of front-end domains allowed to make requests
# No spaces between commas
ALLOWED_ORIGINS=http://localhost:3000,https://your-production-domain.com

# The port the server will run on (optional, defaults to 5000)
PORT=5000
```

**Explanation of variables:**

-   `MONGO_URI`: The connection string for your MongoDB database.
-   `ALLOWED_ORIGINS`: A comma-separated list of origins that are allowed to access the API. This is important for security.
-   `PORT`: The port for the server. If you don't specify this, the server will default to port `5000`.


### 4. Run the application

To start the server, run the following command:
```bash
npm start
```
This will start the server with `nodemon`, which automatically restarts the application when file changes are detected. The server will be running on the port you specified in your `.env` file, or on `5000` by default.

## API Endpoint

### Submit Form Data

-   **URL:** `/api/form`
-   **Method:** `POST`
-   **Headers:** `Content-Type: application/json`
-   **Body (raw JSON):**

    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "message": "Hello, this is a test message."
    }
    ```

-   **Success Response:**
    -   **Code:** `201 Created`
    -   **Content:** `{ "message": "Form data saved successfully" }`

-   **Error Response (e.g., Validation Error):**
    -   **Code:** `400 Bad Request`
    -   **Content:**
        ```json
        {
          "errors": [
            {
              "type": "field",
              "value": "",
              "msg": "Name is required",
              "path": "name",
              "location": "body"
            }
          ]
        }
        ```
