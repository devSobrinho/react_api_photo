import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { Heading } from '.';

describe('<Heading />', () => {
  it('should render', () => {
    renderTheme(<Heading>texto</Heading>);
    expect(screen.getByRole('heading', { name: 'texto' })).toBeInTheDocument();
  });
});
