// src/services/ankiService.ts

import axios from 'axios';

const BASE_URL = 'http://localhost:4000'; 

export const ankiService = {
  importDeck: async (file: File) => {
    const formData = new FormData();
    formData.append('apkg', file);
    const response = await axios.post(`${BASE_URL}/api/package/import`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  exportCollection: async () => {
    const response = await axios.get(`${BASE_URL}/api/package/export`, {
      responseType: 'blob',
    });
    return response.data;
  },

  getAllDecks: async () => {
    const response = await axios.get(`${BASE_URL}/api/decks`);
    console.log("response",response)
    return response.data;
  },

  getDeckDetails: async (deckId: number) => {
    const response = await axios.get(`${BASE_URL}/api/decks/${deckId}`);
    return response.data;
  },

  getAllNotes: async () => {
    const response = await axios.get(`${BASE_URL}/api/notes`);
    return response.data;
  },

  getAllCards: async () => {
    const response = await axios.get(`${BASE_URL}/api/cards`);
    return response.data;
  }
};