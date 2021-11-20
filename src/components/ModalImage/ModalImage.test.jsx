import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { ModalImage } from '.';

describe('<ModalImage />', () => {
  it('should render', () => {
    renderTheme(<ModalImage>texto</ModalImage>);
    expect(screen.getByRole('heading', { name: 'texto' })).toBeInTheDocument();
  });
});
