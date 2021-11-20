import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { Login } from '.';

describe('<Login />', () => {
  it('should render', () => {
    renderTheme(<Login>texto</Login>);
    expect(screen.getByRole('heading', { name: 'texto' })).toBeInTheDocument();
  });
});
