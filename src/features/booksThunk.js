import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (query) => {
  const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  return response.data.items.map(item => ({
    id: item.id,
    title: item.volumeInfo.title,
    authors: item.volumeInfo.authors,
    categories: item.volumeInfo.categories,
  }));
});
