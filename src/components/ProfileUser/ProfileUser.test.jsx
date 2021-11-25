import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { ProfileUser } from '.';

describe('<ProfileUser />', () => {
  it('should render', () => {
    renderTheme(<ProfileUser>texto</ProfileUser>);
    expect(screen.getByRole('heading', { name: 'texto' })).toBeInTheDocument();
  });
});
