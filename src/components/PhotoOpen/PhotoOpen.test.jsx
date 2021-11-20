import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { PhotoOpen } from '.';

describe('<PhotoOpen />', () => {
  it('should render', () => {
    renderTheme(<PhotoOpen>texto</PhotoOpen>);
    expect(screen.getByRole('heading', { name: 'texto' })).toBeInTheDocument();
  });
});
