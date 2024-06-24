export interface CardTemplate {
	/**
	 * MIME type used for data.
	 */
	readonly CONTENT_TYPE: string;

	/**
	 * MIME type used for data items.
	 */
	readonly CONTENT_ITEM_TYPE: string;

	/**
	 * Row ID. This is a virtual ID which actually does not exist in AnkiDroid's database.
	 * This column only exists so that this interface can be used with existing CursorAdapters
	 * that require the existence of a "_id" column. This means, that it CAN NOT be used
	 * reliably over subsequent queries. Especially if the number of cards or fields changes,
	 * the _ID will change too.
	 */
	readonly _ID: string;

	/**
	 * This is the ID of the model that this row belongs to (i.e. [Model._ID]).
	 */
	readonly MODEL_ID: string;

	/**
	 * This is the ordinal / index of the card template (from 0 to number of cards - 1).
	 */
	readonly ORD: string;

	/**
	 * The template name e.g. "Card 1".
	 */
	readonly NAME: string;

	/**
	 * The definition of the template for the question
	 */
	readonly QUESTION_FORMAT: string;

	/**
	 * The definition of the template for the answer
	 */
	readonly ANSWER_FORMAT: string;

	/**
	 * Optional alternative definition of the template for the question when rendered with the browser
	 */
	readonly BROWSER_QUESTION_FORMAT: string;

	/**
	 * Optional alternative definition of the template for the answer when rendered with the browser
	 */
	readonly BROWSER_ANSWER_FORMAT: string;

	/**
	 * The total number of card templates associated with the model.
	 */
	readonly CARD_COUNT: string;

	/**
	 * Default columns that are returned when querying the ...models/#/templates URI.
	 */
	readonly DEFAULT_PROJECTION: string[];
}

export const cardTemplateDefaults: CardTemplate = {
	CONTENT_TYPE: "vnd.android.cursor.dir/vnd.com.ichi2.anki.model.template",
	CONTENT_ITEM_TYPE:
		"vnd.android.cursor.item/vnd.com.ichi2.anki.model.template",
	_ID: "_id",
	MODEL_ID: "model_id",
	ORD: "ord",
	NAME: "card_template_name",
	QUESTION_FORMAT: "question_format",
	ANSWER_FORMAT: "answer_format",
	BROWSER_QUESTION_FORMAT: "browser_question_format",
	BROWSER_ANSWER_FORMAT: "browser_answer_format",
	CARD_COUNT: "card_count",
	DEFAULT_PROJECTION: [
		"_id",
		"model_id",
		"ord",
		"name",
		"question_format",
		"answer_format",
	],
};
