// 이후에 넣을 컴포넌트에 따라서 molecules가 아닐 수도 있음

import * as Styled from './Filter.styled';

const Filter = () => (
  <Styled.Container>
    <Styled.Temp>기획자</Styled.Temp>
    <Styled.Temp>개발자</Styled.Temp>
    <Styled.Temp>디자이너</Styled.Temp>
  </Styled.Container>
);

export default Filter;
