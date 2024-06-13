import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h2>Hello World From Assignment!</h2>");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
