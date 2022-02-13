import { Outlet } from 'react-router-dom';

import * as Styled from './PageTemplate.styled';

const PageTemplate = () => (
  <Styled.Container>
    <Outlet />
  </Styled.Container>
);

export default PageTemplate;
