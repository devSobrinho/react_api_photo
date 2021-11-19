import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { Paragraph } from '.';

describe('<Paragraph />', () => {
  it('should render', () => {
    renderTheme(<Paragraph>texto</Paragraph>);
    expect(screen.getByRole('heading', { name: 'texto' })).toBeInTheDocument();
  });
});
