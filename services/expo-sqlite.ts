import { Note } from "@/models/note";
import * as SQLite from "expo-sqlite";

const openDatabase = async () => await SQLite.openDatabaseAsync("ankiflash");

export var db: SQLite.SQLiteDatabase;

openDatabase().then((database) => (db = database));


export const setupDatabase = async () => {
	// Execute SQL statement to create notes table
	await db.execAsync(`
    PRAGMA foreign_keys = ON;
    CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY NOT NULL,
    guid TEXT NOT NULL,
    mid INTEGER NOT NULL,
    mod INTEGER NOT NULL,
    usn INTEGER NOT NULL,
    tags TEXT NOT NULL,
    flds TEXT NOT NULL,
    sfld INTEGER NOT NULL,
    csum INTEGER NOT NULL,
    flags INTEGER NOT NULL,
    data TEXT NOT NULL
  );
`);
};

// Example of inserting a new note into the notes table
export async function insertNote({
	guid,
	mid,
	mod,
	usn,
	tags,
	flds,
	sfld,
	csum,
	flags,
	data,
}: Note) {
	try {
		const result = await db.runAsync(
			"INSERT INTO notes (guid, mid, mod, usn, tags, flds, sfld, csum, flags, data) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
			[guid, mid, mod, usn, tags, flds, sfld, csum, flags, data]
		);
		console.log("Inserted note with ID:", result.lastInsertRowId);
		return result.lastInsertRowId; // Return the ID of the inserted note
	} catch (error) {
		console.error("Failed to insert note:", error);
		return null;
	}
}

// Example of fetching all notes from the notes table
export async function fetchAllNotes() {
	try {
		const allNotes = await db.getAllAsync("SELECT * FROM notes");
		console.log("All notes:", allNotes);
		return allNotes;
	} catch (error) {
		console.error("Failed to fetch notes:", error);
		return [];
	}
}

export const dummyNotes: Note[] = [
	{
		id: 1,
		guid: "abcdef123456",
		mid: 1,
		mod: Math.floor(Date.now() / 1000), // Current timestamp in seconds
		usn: 1,
		tags: "tag1 tag2",
		flds: "Field 1\u001FField 2\u001FField 3", // \u001F is the field separator (31)
		sfld: 0,
		csum: 123456789, // Dummy checksum
		flags: 0,
		data: "",
	},
	{
		id: 2,
		guid: "ghijkl789012",
		mid: 2,
		mod: Math.floor(Date.now() / 1000) - 86400, // 1 day ago
		usn: 1,
		tags: "tag3 tag4",
		flds: "Field A\u001FField B\u001FField C",
		sfld: 0,
		csum: 987654321, // Dummy checksum
		flags: 0,
		data: "",
	},
	{
		id: 3,
		guid: "mnopqr345678",
		mid: 1,
		mod: Math.floor(Date.now() / 1000) - 172800, // 2 days ago
		usn: 1,
		tags: "tag1 tag5",
		flds: "Field X\u001FField Y\u001FField Z",
		sfld: 0,
		csum: 246813579, // Dummy checksum
		flags: 0,
		data: "",
	},
];

// dummyNotes.map((note) => insertNote(note));

export default dummyNotes;
