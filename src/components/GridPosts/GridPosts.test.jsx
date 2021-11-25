import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { GridPosts } from '.';

describe('<GridPosts />', () => {
  it('should render', () => {
    renderTheme(<GridPosts>texto</GridPosts>);
    expect(screen.getByRole('heading', { name: 'texto' })).toBeInTheDocument();
  });
});
