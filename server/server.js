const fetch = require("node-fetch");
const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

/* app.use(cors())
 */

app.use(
  cors({
    origin: ["https://jsonplaceholder.typicode.com"],
  })
);

app.use(
  "/",
  createProxyMiddleware({
    target: "https://jsonplaceholder.typicode.com",
    changeOrigin: true,
  })
);

app.use(function (req, res, next) {
  res.setHeader("x-codedamn-project", "jsonproxyholder");
  next();
});

app.get("/", (req, res) => {
  res.json({
    helloWorld: true,
  });
});

app.get("*", (req, res) => {
  res.json({
    404: true,
  });
});


app.get('/posts/:id', (req, res) => {
  // Send a response with a simple message
  res.send('Hello world!');
});

app.listen(1338, () => {
  console.log("Server listening on port 1338");
});
