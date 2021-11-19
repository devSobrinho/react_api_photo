import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { ImageProfile } from '.';

describe('<ImageProfile />', () => {
  it('should render', () => {
    renderTheme(<ImageProfile>texto</ImageProfile>);
    expect(screen.getByRole('heading', { name: 'texto' })).toBeInTheDocument();
  });
});
