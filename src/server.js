const express = require("express");
const request = require("request");
const app = express();
const port = 8080;

// Define the base URL for the Football Data API
const apiBaseUrl = "https://api.football-data.org/v2";

// Use the 'express' middleware to enable CORS on your proxy server
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Define a route to proxy requests to the Football Data API
app.get("/api/matches", (req, res) => {
  const url = `${apiBaseUrl}/matches`;
  // Forward the request to the Football Data API
  req.pipe(request(url)).pipe(res);
});

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
