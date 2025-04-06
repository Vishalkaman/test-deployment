// index.js
const express = require("express");
const app = express();

// Root route
app.get("/", (req, res) => {
    res.send("Hello from Express on Vercel!");
});

// About route
app.get("/about", (req, res) => {
    res.send("This is the About page.");
});

// API route
app.get("/api", (req, res) => {
    res.json({
        message: "Welcome to the Express API!",
        status: "success",
    });
});

module.exports = app;

