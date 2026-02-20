const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const quizRoutes = require("./routes/quizRoutes");
const { verifyToken } = require("./middleware/authMiddleware");

const app = express();


// Middleware First
app.use(cors());
app.use(express.json());


// Routes After 
app.use("/api/auth", authRoutes);
app.use("/api/quiz", quizRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/", (req,res)=>{
    res.send("Quiz Backend Running");
});

// Test Protected Route
app.get("/api/protected", verifyToken, (req, res) => {
    res.json({
        msg: "Protected route accessed",
        user: req.user
    });
});


// Server start
app.listen(5000, ()=>{
    console.log("Server started on port 5000");
});