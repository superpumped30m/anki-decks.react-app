export const initTables = async (db: any) => {
	db.execAsync(
		`CREATE TABLE IF NOT EXISTS decks (
           id INTEGER PRIMARY KEY NOT NULL,
           name TEXT NOT NULL,
           description TEXT,
           favorite INTEGER DEFAULT 0
         );`
	);

	db.execAsync(
		`CREATE TABLE IF NOT EXISTS notes (
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
         );`
	);

	db.execAsync(
		`CREATE TABLE IF NOT EXISTS cards (
           id INTEGER PRIMARY KEY NOT NULL,
           nid INTEGER NOT NULL,
           did INTEGER NOT NULL,
           ord INTEGER NOT NULL,
           mod INTEGER NOT NULL,
           usn INTEGER NOT NULL,
           type INTEGER NOT NULL,
           queue INTEGER NOT NULL,
           due INTEGER NOT NULL,
           ivl INTEGER NOT NULL,
           factor INTEGER NOT NULL,
           reps INTEGER NOT NULL,
           lapses INTEGER NOT NULL,
           left INTEGER NOT NULL,
           odue INTEGER NOT NULL,
           odid INTEGER NOT NULL,
           flags INTEGER NOT NULL,
           data TEXT NOT NULL,
           FOREIGN KEY (nid) REFERENCES notes (id) ON DELETE CASCADE,
           FOREIGN KEY (did) REFERENCES decks (id)
         );`
	);

	db.execAsync(
		`CREATE TABLE IF NOT EXISTS revlog (
           id INTEGER PRIMARY KEY NOT NULL,
           cid INTEGER NOT NULL,
           usn INTEGER NOT NULL,
           ease INTEGER NOT NULL,
           ivl INTEGER NOT NULL,
           lastIvl INTEGER NOT NULL,
           factor INTEGER NOT NULL,
           time INTEGER NOT NULL,
           type INTEGER NOT NULL,
           FOREIGN KEY (cid) REFERENCES cards (id) ON DELETE CASCADE
         );`
	);

	db.execAsync(
		`CREATE TABLE IF NOT EXISTS graves (
           usn INTEGER NOT NULL,
           oid INTEGER NOT NULL,
           type INTEGER NOT NULL,
           PRIMARY KEY (usn, oid, type)
         );`
	);

	db.execAsync(
		`CREATE TABLE IF NOT EXISTS col (
           id INTEGER PRIMARY KEY NOT NULL,
           crt INTEGER NOT NULL,
           mod INTEGER NOT NULL,
           scm INTEGER NOT NULL,
           ver INTEGER NOT NULL,
           dty INTEGER NOT NULL,
           usn INTEGER NOT NULL,
           ls INTEGER NOT NULL,
           conf TEXT NOT NULL,
           models TEXT NOT NULL,
           decks TEXT NOT NULL,
           dconf TEXT NOT NULL,
           tags TEXT NOT NULL
         );`
	);
};
