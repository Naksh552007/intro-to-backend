import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import postRouter from "./routes/post.route.js";

dotenv.config();

const app = express();

app.use(express.json()); 

app.use("/api/v1/posts", postRouter);

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully!");
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed:", error);
    process.exit(1);
  });