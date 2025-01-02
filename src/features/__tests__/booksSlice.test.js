import booksReducer, { addBook, removeBook, setBooks } from '../booksSlice';

describe('booksSlice', () => {
  const initialState = [];

  it('should return the initial state', () => {
    expect(booksReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle addBook', () => {
    const newBook = { id: 1, title: 'Book 1' };
    expect(booksReducer(initialState, addBook(newBook))).toEqual([newBook]);
  });

  it('should handle removeBook', () => {
    const initialState = [{ id: 1, title: 'Book 1' }];
    expect(booksReducer(initialState, removeBook({ id: 1 }))).toEqual([]);
  });

  it('should handle setBooks', () => {
    const books = [{ id: 1, title: 'Book 1' }, { id: 2, title: 'Book 2' }];
    expect(booksReducer(initialState, setBooks(books))).toEqual(books);
  });
});
