import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { Input } from '.';

describe('<Input />', () => {
  it('should render', () => {
    renderTheme(<Input>texto</Input>);
    expect(screen.getByRole('heading', { name: 'texto' })).toBeInTheDocument();
  });
});
