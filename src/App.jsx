import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ReadingListPage from './pages/ReadingListPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reading-list" element={<ReadingListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
