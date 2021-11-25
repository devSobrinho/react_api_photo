import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { ProfileCardInfo } from '.';

describe('<ProfileCardInfo />', () => {
  it('should render', () => {
    renderTheme(<ProfileCardInfo>texto</ProfileCardInfo>);
    expect(screen.getByRole('heading', { name: 'texto' })).toBeInTheDocument();
  });
});
