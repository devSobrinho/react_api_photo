import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { Logo } from '.';

describe('<Logo />', () => {
  it('should render', () => {
    renderTheme(<Logo>texto</Logo>);
    expect(screen.getByRole('heading', { name: 'texto' })).toBeInTheDocument();
  });
});
