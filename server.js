// Creating the Server..
const express = require("express");

// Server Instantiate..
const app = express();

// Used to parse req.body in express -> PUT or POST..
const bodyParser = require("body-parser");

// App will use the BodyParser specially in Json Format..
app.use(bodyParser.json());

// Activate the server on 3000 Port number..
app.listen(3000, () => {
    console.log("The server is running at Port No: 3000");
});

// Getting the response from Get request..
// Routes..
app.get("/", (request, response) => {
    response.send("Hi! I am Aman. I am the best coder in the World.");
});

app.post("/api/cars", (request, response) => {
    const {model, brand} = request.body;
    console.log(model);
    console.log(brand);
    response.send("The Car Name & Brand is Submitted.");
});

// Connecting MongoDB..
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/myDataBase")
    // useNewUrlParser: true,
    // useUnifiedTopology: true

.then( () => {
    console.log("Connection Sucessful.");
})
.catch( (error) => {
    console.log("Received an Error.");
    console.log(error);
})