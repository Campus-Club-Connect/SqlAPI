import express from "express";
const app = express();
import clubRoutes from "./routes/clubs.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import chatRoutes from "./routes/chats.js";
import likeRoutes from "./routes/likes.js";
import pinRoutes from "./routes/pins.js";
import affiliationRoutes from "./routes/affiliations.js";
import cors from "cors";
import multer from "multer";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
dotenv.config();
// middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "api-production-a06e.up.railway.app",
  })
);
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/dislikes", likeRoutes);
app.use("/api/pins", pinRoutes);
app.use("/api/clubs", clubRoutes);
app.use("/api/affiliations", affiliationRoutes);
app.use("/api/chats", chatRoutes);

app.listen(8800, () => {
  console.log("API Working!");
});
