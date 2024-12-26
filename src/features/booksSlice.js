import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks } from './booksThunk';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    allBooks: [],
    readingList: [],
    loading: false,
    error: null,
  },
  reducers: {
    addBookToList(state, action) {
      state.readingList.push(action.payload);
    },
    removeBookFromList(state, action) {
      state.readingList = state.readingList.filter(book => book.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.allBooks = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addBookToList, removeBookFromList } = booksSlice.actions;
export default booksSlice.reducer;
