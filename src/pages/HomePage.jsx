import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { booksSlice } from '../features/booksSlice';
import BookList from '../components/BookList';

function HomePage() {
  const dispatch = useDispatch();
  const { allBooks, loading, error } = useSelector((state) => state.books);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query) {
      dispatch(fetchBooks(query));
    }
  }, [query, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search books"
      />
      <BookList books={allBooks} />
    </div>
  );
}

export default HomePage;
