export interface Model {
	/**
	 * Model ID.
	 */
	readonly id: string;

	/**
	 * Name of the model.
	 */
	NAME: string;

	/**
	 * CSS styling code shared across all templates in the model.
	 */
	CSS: string;

	/**
	 * Names of all fields in the model, separated by the character `0x1f`.
	 */
	readonly FIELD_NAMES: string;

	/**
	 * Number of card templates associated with the model.
	 */
	readonly NUM_CARDS: number;

	/**
	 * The default deck that cards in this model should be added to.
	 */
	readonly DECK_ID: number;

	/**
	 * Index of the field used as the main sort field.
	 */
	readonly SORT_FIELD_INDEX: number;

	/**
	 * Type of the model (0: normal, 1: cloze).
	 */
	readonly TYPE: number;

	/**
	 * Code to be placed at the end of LaTeX renderings in Anki Desktop.
	 */
	readonly LATEX_POST: string;

	/**
	 * Code to be placed at the beginning of LaTeX renderings in Anki Desktop.
	 */
	readonly LATEX_PRE: string;
}

// export const modelContentUri = FlashCardsContract.Model.CONTENT_URI;
// export const currentModelUri = Uri.withAppendedPath(
// 	modelContentUri,
// 	FlashCardsContract.Model.CURRENT_MODEL_ID
// );
