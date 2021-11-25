import P from 'prop-types';
import { Button } from '../Button';

import * as Styled from './styles';

export const ButtonsProfileCard = ({ textFollow, textMessage, userName }) => {
  return (
    <>
      <Styled.Container>
        <Button text={`${textFollow} ${userName}`} invertStyled />
        <Button text={textMessage} />
      </Styled.Container>
    </>
  );
};

ButtonsProfileCard.propTypes = {
  userName: P.string.isRequired,
  textFollow: P.string.isRequired,
  textMessage: P.string.isRequired,
};
