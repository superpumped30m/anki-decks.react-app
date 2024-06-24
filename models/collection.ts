/**
 * Interface representing the collection in Anki.
 * This table holds various information about the collection.
 */
export interface Collection {
	/**
	 * Unique identifier for the collection.
	 * Arbitrary number since there is only one row.
	 */
	id: number;

	/**
	 * Timestamp of the creation date in seconds.
	 * It's correct up to the day.
	 * For V1 scheduler, the hour corresponds to starting a new day (default is 4 AM).
	 */
	crt: number;

	/**
	 * Last modified time in milliseconds.
	 */
	mod: number;

	/**
	 * Schema modification time.
	 * Time when the "schema" was last modified.
	 * If the server schema modification time is different from the client schema modification time, a full-sync is required.
	 */
	scm: number;

	/**
	 * Version of the collection.
	 */
	ver: number;

	/**
	 * Dirty flag, currently unused and set to 0.
	 */
	dty: number;

	/**
	 * Update sequence number used for finding differences when syncing.
	 * See usn in cards table for more details.
	 */
	usn: number;

	/**
	 * Last sync time.
	 */
	ls: number;

	/**
	 * JSON object containing configuration options that are synced.
	 */
	conf: string;

	/**
	 * JSON object of objects representing the models (aka Note types).
	 * Keys of this object are strings containing integers representing the "creation time in epoch milliseconds" of the models.
	 * Values of this object are other JSON objects of the form described below in "Models JSONObjects".
	 */
	models: string;

	/**
	 * JSON object of objects representing the decks.
	 * Keys of this object are strings containing integers representing the "deck creation time in epoch milliseconds" for most decks, "1" for the default deck.
	 * Values of this object are other JSON objects of the form described below in "Decks JSONObjects".
	 */
	decks: string;

	/**
	 * JSON object of objects representing the options groups for decks.
	 * Keys of this object are strings containing integers representing the "options group creation time in epoch milliseconds" for most groups, "1" for the default options group.
	 * Values of this object are other JSON objects of the form described below in "DConf JSONObjects".
	 */
	dconf: string;

	/**
	 * A cache of tags used in the collection.
	 * This list is displayed in the browser and potentially in other places.
	 */
	tags: string;
}
