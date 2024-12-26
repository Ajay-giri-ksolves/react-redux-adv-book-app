import React from 'react';
import Book from './Book';

function BookList({ books, isInReadingList }) {
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} isInReadingList={isInReadingList} />
      ))}
    </div>
  );
}

export default BookList;
