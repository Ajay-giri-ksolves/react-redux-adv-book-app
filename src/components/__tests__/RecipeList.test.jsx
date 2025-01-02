import { render, screen } from '@testing-library/react';
import RecipeList from '../RecipeList';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

describe('RecipeList', () => {
  it('renders a list of recipes', () => {
    const store = mockStore({
      recipes: [{ id: 1, name: 'Recipe 1' }, { id: 2, name: 'Recipe 2' }],
    });

    render(
      <Provider store={store}>
        <RecipeList />
      </Provider>
    );

    expect(screen.getByText('Recipe 1')).toBeInTheDocument();
    expect(screen.getByText('Recipe 2')).toBeInTheDocument();
  });
});
