import * as Styled from './CheckAuthenticationCodePage.styled';

const CheckAuthenticationCodePage = () => {
  return (
    <Styled.Container>
      <Styled.SubContainer>
        <Styled.Title>인증 코드 확인</Styled.Title>
        <Styled.Input placeholder="인증 코드를 입력해 주세요." />
        <Styled.CheckingEmailButton>이메일로 인증 코드 받기</Styled.CheckingEmailButton>
      </Styled.SubContainer>
    </Styled.Container>
  );
};

export default CheckAuthenticationCodePage;
