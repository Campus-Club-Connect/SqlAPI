import { db } from "../connect.js";

export const getClubs = (req, res) => {
  const clubId = req.params.clubId;
  const q = "SELECT * FROM clubs WHERE clubId=?";

  db.query(q, [clubId], (err, data) => {
    if (err) return res.status(500).json(err);
    const info = data[0];
    return res.json(info);
  });
};
