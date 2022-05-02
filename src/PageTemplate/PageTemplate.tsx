import { Outlet } from 'react-router-dom';

import Header from '../components/Header';

import * as Styled from './PageTemplate.styled';

const PageTemplate = () => (
  <Styled.Container>
    <Header />
    <Styled.SubContainer>
      <Outlet />
    </Styled.SubContainer>
  </Styled.Container>
);

export default PageTemplate;
