import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action to fetch books
export const fetchBooks = createAsyncThunk('books/fetchBooks', async (query, thunkAPI) => {
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    // Extract relevant data (e.g., title, author, etc.)
    return response.data.items.map((book) => ({
      id: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors || ['Unknown Author'],
      thumbnail: book.volumeInfo.imageLinks?.thumbnail || '',
    }));
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
