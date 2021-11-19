import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { ProfileInfo } from '.';

describe('<ProfileInfo />', () => {
  it('should render', () => {
    renderTheme(<ProfileInfo>texto</ProfileInfo>);
    expect(screen.getByRole('heading', { name: 'texto' })).toBeInTheDocument();
  });
});
