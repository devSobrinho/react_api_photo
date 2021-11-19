import P from 'prop-types';

import * as Styled from './styles';

import { Heading } from '../../components/Heading';
import { HomeComponent } from '../../components/HomeComponent';
import mock from '../../components/HomeComponent/mock';

function Home() {
  return (
    <>
      <Styled.Container>
        <HomeComponent {...mock} />
      </Styled.Container>
    </>
  );
}

Home.propTypes = {};

export default Home;
