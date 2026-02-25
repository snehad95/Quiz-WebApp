const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const questionRoutes = require("./routes/questionRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/questions", questionRoutes);

app.get("/", (req, res) => {
  res.send("Quiz Backend Running");
});

// ✅ Connect DB FIRST then start server
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");

  app.listen(5000, () => {
    console.log("Server started on port 5000");
  });
})
.catch((err) => {
  console.log("MongoDB Connection Error:", err);
});