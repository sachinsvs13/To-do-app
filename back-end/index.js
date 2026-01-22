const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;
const connection = require("./DB/connect");
const authenticateUser = require("./middleware/auth");
const errorHandlerMiddleware = require("./middleware/ErrorHandling");
const notFoundMiddleware = require("./middleware/NotFound");
const todoRouter = require("./router/todo");
const userRouter = require("./router/user");
require("dotenv").config();

// extra security packages
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  }),
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

// Middleware
app.use(express.json());

// Routes
app.use("/api/v1/todo", authenticateUser, todoRouter);
app.use("/api/v1/auth", userRouter);
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

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
