const express = require("express");

const port = 3000;

const app = express();

// app_id = "d439d7d7";
// api_key = "c7913e48f6f2e7de71d2182aa6a381e8";

// var request = require("request");

// var options = {
//   method: "POST",
//   url: "https://trackapi.nutritionix.com/v2/natural/nutrients",
//   headers: {
//     "Content-Type": "application/json",
//     "x-app-id": app_id,
//     "x-app-key": api_key,
//   },
//   body: JSON.stringify({
//     query: "grape",
//   }),
// };

app.use(cors());

app.get("/api/v1/hello", (_req, res) => {
  res.json({ message: "Hello, world!" });
});

app.listen(port, () => {
  console.log("Server listening on port", port);
});