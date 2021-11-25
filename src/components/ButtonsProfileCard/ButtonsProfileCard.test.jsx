import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { ButtonsProfileCard } from '.';

describe('<ButtonsProfileCard />', () => {
  it('should render', () => {
    renderTheme(<ButtonsProfileCard>texto</ButtonsProfileCard>);
    expect(screen.getByRole('heading', { name: 'texto' })).toBeInTheDocument();
  });
});
