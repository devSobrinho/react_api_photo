import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { Register } from '.';

describe('<Register />', () => {
  it('should render', () => {
    renderTheme(<Register>texto</Register>);
    expect(screen.getByRole('heading', { name: 'texto' })).toBeInTheDocument();
  });
});
