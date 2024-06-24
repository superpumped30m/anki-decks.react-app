// Interface for Note

type Uri = string;

interface Note {
	CONTENT_URI: string;
	CONTENT_URI_V2: string;

	_ID: string;
	GUID: string;
	MID: string;
	ALLOW_EMPTY: string;
	MOD: string;
	USN: string;
	TAGS: string;
	FLDS: string;
	SFLD: string;
	CSUM: string;
	FLAGS: string;
	DATA: string;

	DEFAULT_PROJECTION: string[];
	CONTENT_ITEM_TYPE: string;
	CONTENT_TYPE: string;
	DECK_ID_QUERY_PARAM: string;
}

// Interface for Model
interface Model {
	CONTENT_URI: string;
	CURRENT_MODEL_ID: string;

	_ID: string;
	NAME: string;
	FIELD_NAMES: string;
	NUM_CARDS: string;
	CSS: string;
	SORT_FIELD_INDEX: string;
	TYPE: string;
	LATEX_POST: string;
	LATEX_PRE: string;
	NOTE_COUNT: string;
	DECK_ID: string;

	DEFAULT_PROJECTION: string[];
	CONTENT_ITEM_TYPE: string;
	CONTENT_TYPE: string;
}

interface Card {
	NOTE_ID: string;
	CARD_ORD: string;
	CARD_NAME: string;
	DECK_ID: string;
	QUESTION: string;
	ANSWER: string;
	QUESTION_SIMPLE: string;
	ANSWER_SIMPLE: string;
	ANSWER_PURE: string;

	DEFAULT_PROJECTION: string[];
	CONTENT_ITEM_TYPE: string;
	CONTENT_TYPE: string;
}

interface ReviewInfo {
	CONTENT_URI: string;
	NOTE_ID: string;
	CARD_ORD: string;
	BUTTON_COUNT: string;
	NEXT_REVIEW_TIMES: string;
	MEDIA_FILES: string;
	EASE: string;
	TIME_TAKEN: string;
	BURY: string;
	SUSPEND: string;

	DEFAULT_PROJECTION: string[];
	CONTENT_TYPE: string;
}

interface Deck {
	CONTENT_ALL_URI: Uri;
	CONTENT_SELECTED_URI: Uri;
	DECK_NAME: string;
	DECK_ID: string;
	DECK_COUNTS: string;
	OPTIONS: string;
	DECK_DYN: string;
	DECK_DESC: string;

	DEFAULT_PROJECTION: string[];
	CONTENT_TYPE: string;
}

interface AnkiMedia {
	CONTENT_URI: Uri;
	FILE_URI: string;
	PREFERRED_NAME: string;
}
