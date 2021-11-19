import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { HomeComponent } from '.';

describe('<HomeComponent />', () => {
  it('should render', () => {
    renderTheme(<HomeComponent>texto</HomeComponent>);
    expect(screen.getByRole('heading', { name: 'texto' })).toBeInTheDocument();
  });
});
