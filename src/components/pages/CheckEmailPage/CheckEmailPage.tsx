import { useNavigate } from 'react-router-dom';

import * as Styled from './CheckEmailPage.styled';

const CheckEmailPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => navigate('/check-authentication-code');

  return (
    <Styled.Container>
      <Styled.SubContainer>
        <Styled.Title>이메일 중복 확인</Styled.Title>
        <Styled.Input placeholder="이메일을 입력해주세요." />
        <Styled.CheckingEmailButton onClick={handleButtonClick}>
          이메일로 인증 코드 받기
        </Styled.CheckingEmailButton>
      </Styled.SubContainer>
    </Styled.Container>
  );
};

export default CheckEmailPage;
