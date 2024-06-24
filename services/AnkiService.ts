// AnkiService.ts

import axios, { AxiosResponse } from 'axios';

// Constants based on the AnkiDroid FlashCardsContract
const AUTHORITY = 'com.ichi2.anki.flashcards';
const BASE_URL = `content://${AUTHORITY}`;

interface Note {
  _id: number;
  GUID: string;
  MID: number;
  ALLOW_EMPTY?: string;
  MOD: number;
  USN: number;
  TAGS: string;
  FLDS: string;
  SFLD?: number;
  CSUM?: number;
  FLAGS?: number;
  DATA?: number;
}

interface Model {
  _id: number;
  NAME: string;
  CSS?: string;
  FIELD_NAMES: string;
  NUM_CARDS?: number;
  DECK_ID?: number;
  SORT_FIELD_INDEX?: number;
  TYPE?: number;
  LATEX_POST?: string;
  LATEX_PRE?: string;
  NOTE_COUNT?: number;
}

interface CardTemplate {
  _id: number;
  MODEL_ID: number;
  ORD: number;
  NAME: string;
  QUESTION_FORMAT: string;
  ANSWER_FORMAT: string;
  BROWSER_QUESTION_FORMAT?: string;
  BROWSER_ANSWER_FORMAT?: string;
  CARD_COUNT?: number;
}

class AnkiService {
  private static instance: AnkiService;
  private readonly baseUrl: string;

  private constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public static getInstance(): AnkiService {
    if (!AnkiService.instance) {
      AnkiService.instance = new AnkiService(BASE_URL);
    }
    return AnkiService.instance;
  }

  // Fetch all notes
  public async getAllNotes(): Promise<Note[]> {
    try {
      const response: AxiosResponse<Note[]> = await axios.get(`${this.baseUrl}/notes`);
      return response.data;
    } catch (error) {
      console.error('Error fetching notes:', error);
      throw error;
    }
  }

  // Fetch a specific note by ID
  public async getNoteById(noteId: number): Promise<Note> {
    try {
      const response: AxiosResponse<Note> = await axios.get(`${this.baseUrl}/notes/${noteId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching note ${noteId}:`, error);
      throw error;
    }
  }

  // Fetch all models
  public async getAllModels(): Promise<Model[]> {
    try {
      const response: AxiosResponse<Model[]> = await axios.get(`${this.baseUrl}/models`);
      return response.data;
    } catch (error) {
      console.error('Error fetching models:', error);
      throw error;
    }
  }

  // Fetch a specific model by ID
  public async getModelById(modelId: number): Promise<Model> {
    try {
      const response: AxiosResponse<Model> = await axios.get(`${this.baseUrl}/models/${modelId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching model ${modelId}:`, error);
      throw error;
    }
  }

  // Fetch all card templates for a specific model
  public async getAllCardTemplatesForModel(modelId: number): Promise<CardTemplate[]> {
    try {
      const response: AxiosResponse<CardTemplate[]> = await axios.get(
        `${this.baseUrl}/models/${modelId}/templates`
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching card templates for model ${modelId}:`, error);
      throw error;
    }
  }

  // Fetch a specific card template by ID for a model
  public async getCardTemplateById(modelId: number, templateId: number): Promise<CardTemplate> {
    try {
      const response: AxiosResponse<CardTemplate> = await axios.get(
        `${this.baseUrl}/models/${modelId}/templates/${templateId}`
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching card template ${templateId} for model ${modelId}:`, error);
      throw error;
    }
  }
}

export default AnkiService;
