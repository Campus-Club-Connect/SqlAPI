import mysql from "mysql";
import dotenv from 'dotenv';
dotenv.config();

export const db = mysql.createConnection({
  host: process.env.RAILWAY_DATABASE_HOST || "localhost",
  user: process.env.RAILWAY_DATABASE_USER || "root",
  password: process.env.RAILWAY_DATABASE_PASSWORD || "",
  database: process.env.RAILWAY_DATABASE_NAME || "railway",
  port: process.env.RAILWAY_DATABASE_PORT || 3306,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");
});

export default db;
