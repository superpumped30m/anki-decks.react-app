import * as SQLite from "expo-sqlite";
import { dbSchemaStatement } from "@/constants/db.schema";

const initDatabase = async (db: SQLite.SQLiteDatabase) => {
  try {
    // db = await SQLite.openDatabaseAsync("anki.db");

    await db.execAsync(dbSchemaStatement);

    // await db.execAsync(`
    //   PRAGMA foreign_keys = ON;
      
    //   CREATE TABLE IF NOT EXISTS User (
    //     id TEXT PRIMARY KEY,
    //     username TEXT,
    //     email TEXT UNIQUE,
    //     password TEXT
    //   );

    //   CREATE TABLE IF NOT EXISTS Col (
    //     id INTEGER PRIMARY KEY,
    //     crt INTEGER,
    //     mod INTEGER,
    //     scm INTEGER,
    //     ver INTEGER,
    //     dty INTEGER,
    //     usn INTEGER,
    //     ls INTEGER,
    //     conf TEXT,
    //     models TEXT,
    //     decks TEXT,
    //     dconf TEXT,
    //     tags TEXT
    //   );

    //   CREATE TABLE IF NOT EXISTS Notes (
    //     id INTEGER PRIMARY KEY,
    //     guid TEXT,
    //     mid INTEGER,
    //     mod INTEGER,
    //     usn INTEGER,
    //     tags TEXT,
    //     flds TEXT,
    //     sfld TEXT,
    //     csum INTEGER,
    //     flags INTEGER,
    //     data TEXT,
    //     userId TEXT,
    //     FOREIGN KEY (userId) REFERENCES User(id)
    //   );

    //   CREATE TABLE IF NOT EXISTS Cards (
    //     id INTEGER PRIMARY KEY,
    //     nid INTEGER,
    //     did INTEGER,
    //     ord INTEGER,
    //     mod INTEGER,
    //     usn INTEGER,
    //     type INTEGER,
    //     queue INTEGER,
    //     due INTEGER,
    //     ivl INTEGER,
    //     factor INTEGER,
    //     reps INTEGER,
    //     lapses INTEGER,
    //     left INTEGER,
    //     odue INTEGER,
    //     odid INTEGER,
    //     flags INTEGER,
    //     data TEXT,
    //     userId TEXT,
    //     FOREIGN KEY (userId) REFERENCES User(id)
    //   );

    //   CREATE TABLE IF NOT EXISTS Revlog (
    //     id INTEGER PRIMARY KEY,
    //     cid INTEGER,
    //     usn INTEGER,
    //     ease INTEGER,
    //     ivl INTEGER,
    //     lastIvl INTEGER,
    //     factor INTEGER,
    //     time INTEGER,
    //     type INTEGER
    //   );

    //   CREATE TABLE IF NOT EXISTS Graves (
    //     id INTEGER PRIMARY KEY,
    //     usn INTEGER,
    //     oid INTEGER,
    //     type INTEGER
    //   );
    // `);

    
    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Error initializing database:", error);
  }
}

export default initDatabase;
