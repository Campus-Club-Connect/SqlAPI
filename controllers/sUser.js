import { db } from "../connect.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM users";
  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const updateUser = (req, res) => {
  const q = "UPDATE users SET `role` = ? WHERE `username` = ?";
  const values = [req.body.role, req.params.username];

  db.query(q, values, (err, result) => {
    if (err) {
      return res.json(err);
    }

    if (result.affectedRows === 0) {
      // No rows were affected by the update
      return res.status(404).json("Username not found");
    }

    return res.status(200).json("Role updated successfully");
  });
};

export const updateCCA = (req, res) => {
  const q = "UPDATE users SET cca = cca + ? WHERE username = ?";
  const values = [req.body.cca];

  db.query(q, [...values, req.params.username], (err, result) => {
    if (err) return res.json(err);
    if (result.affectedRows === 0) {
      // No rows were affected by the update
      return res.status(404).json("Username not found");
    }

    return res.status(200).json("added cca !");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM users WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json(" Deleted!");
  });
};
