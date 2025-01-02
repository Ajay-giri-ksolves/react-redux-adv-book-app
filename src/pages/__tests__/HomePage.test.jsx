import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';

const mockStore = configureMockStore();

describe('HomePage', () => {
  it('renders homepage with books and recipes', () => {
    const store = mockStore({
      books: [{ id: 1, title: 'Book 1' }],
      recipes: [{ id: 1, name: 'Recipe 1' }],
    });

    render(
      <Provider store={store}>
        <Router>
          <HomePage />
        </Router>
      </Provider>
    );

    expect(screen.getByText('Book 1')).toBeInTheDocument();
    expect(screen.getByText('Recipe 1')).toBeInTheDocument();
  });
});
