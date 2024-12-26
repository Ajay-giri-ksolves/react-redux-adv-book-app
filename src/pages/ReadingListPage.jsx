import React from 'react';
import { useSelector } from 'react-redux';
import BookList from '../components/BookList';

function ReadingListPage() {
  const { readingList } = useSelector((state) => state.books);

  return (
    <div>
      <h2>Your Reading List</h2>
      <BookList books={readingList} isInReadingList />
    </div>
  );
}

export default ReadingListPage;
