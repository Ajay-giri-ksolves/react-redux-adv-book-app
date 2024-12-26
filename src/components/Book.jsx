import React from 'react';
import { useDispatch } from 'react-redux';
import { addBookToList, removeBookFromList } from '../features/booksSlice';

function Book({ book, isInReadingList }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addBookToList(book));
  };

  const handleRemove = () => {
    dispatch(removeBookFromList(book.id));
  };

  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.authors?.join(', ')}</p>
      <p>{book.categories?.join(', ')}</p>
      {isInReadingList ? (
        <button onClick={handleRemove}>Remove from Reading List</button>
      ) : (
        <button onClick={handleAdd}>Add to Reading List</button>
      )}
    </div>
  );
}

export default Book;
