import { useNavigate } from 'react-router-dom';

import * as Styled from './CheckAuthenticationCodePage.styled';

const CheckAuthenticationCodePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => navigate('/signup/registration');

  return (
    <Styled.Container>
      <Styled.SubContainer>
        <Styled.Title>인증 코드 확인</Styled.Title>
        <Styled.Input placeholder="인증 코드를 입력해 주세요." />
        <Styled.CheckingEmailButton onClick={handleButtonClick}>다음</Styled.CheckingEmailButton>
      </Styled.SubContainer>
    </Styled.Container>
  );
};

export default CheckAuthenticationCodePage;
