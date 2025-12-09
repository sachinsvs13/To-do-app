const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;
const connection = require("./DB/connect");
const todoRouter = require("./router/router");
require("dotenv").config();

// Middleware
app.use(express.json());
app.use(cors());

// Router
app.use("/api/v1/todo", todoRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the To-Do App API");
});

// Connect to DB
const DB = async () => {
  try {
    await connection(process.env.MONGO_URL);
    console.log("Database Connected Successfully...");
    app.listen(PORT, () => {
      console.log(`Server is running on Port ${PORT}...`);
    });
  } catch (error) {
    console.error("Database Connection failed :", error);
  }
};

DB();
