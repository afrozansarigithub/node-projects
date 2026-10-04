import express from "express";

const app = express();

const PORT = 3000;

// Home route
app.get("/", (req, res) => {
    res.send("Hello! Express.js server is running.");
});
app.get("/data", (req, res) => {
    res.send("Here is some data!");
});


// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});