import { render, screen } from '@testing-library/react';
import BookList from '../BookList';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

describe('BookList', () => {
  it('renders a list of books', () => {
    const store = mockStore({
      books: [{ id: 1, title: 'Book 1' }, { id: 2, title: 'Book 2' }],
    });

    render(
      <Provider store={store}>
        <BookList />
      </Provider>
    );

    expect(screen.getByText('Book 1')).toBeInTheDocument();
    expect(screen.getByText('Book 2')).toBeInTheDocument();
  });
});
