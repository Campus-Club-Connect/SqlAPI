import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getPins = (req, res) => {
  const q = `SELECT p.*, u.id AS userId, name, profilePic FROM pins AS p JOIN users AS u ON (u.id = p.userID) 
    WHERE p.postId = ?
    `;

  db.query(q, [req.query.postId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.map((pin) => pin.userId));
  });
};

export const addPin = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not Logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "INSERT INTO pins (`desc`, `userId`, `postId`) VALUES (?)";

    const values = [req.body.desc, userInfo.id, req.body.postId];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post has been pinned!");
    });
  });
};

export const deletePin = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not Logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "DELETE FROM pins WHERE `userId` = ? AND `postId` = ?";

    db.query(q, [userInfo.id, req.query.postId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("pin has been removed.");
    });
  });
};
