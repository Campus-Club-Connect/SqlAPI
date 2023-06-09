import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";

export const getChats = (req, res) => {
  const q = `SELECT c.*, u.id AS userId, name, profilePic FROM chats AS c JOIN users AS u ON (u.id = c.chatUserId) 
    WHERE c.topicId = ? ORDER BY c.sentDate DESC
    `;

  db.query(q, [req.query.postId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const addChat = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not Logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO chats(`chatBody`, `sentDate`, `chatUserId`, `topicId`) VALUES (?)";

    const values = [
      req.body.desc,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      userInfo.id,
      req.body.postId,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Chat has been created!");
    });
  });
};
