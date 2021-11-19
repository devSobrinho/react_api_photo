import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { SpanBar } from '.';

describe('<SpanBar />', () => {
  it('should render', () => {
    renderTheme(<SpanBar>texto</SpanBar>);
    expect(screen.getByRole('heading', { name: 'texto' })).toBeInTheDocument();
  });
});
