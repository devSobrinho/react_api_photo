import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render', () => {
    renderTheme(<MenuLink>texto</MenuLink>);
    expect(screen.getByRole('heading', { name: 'texto' })).toBeInTheDocument();
  });
});
