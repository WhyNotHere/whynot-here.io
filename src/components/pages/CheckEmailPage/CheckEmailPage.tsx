import * as Styled from './CheckEmailPage.styled';

const CheckEmailPage = () => {
  return (
    <Styled.Container>
      <Styled.SubContainer>
        <Styled.Title>이메일 중복 확인</Styled.Title>
        <Styled.Input placeholder="이메일을 입력해주세요." />
        <Styled.CheckingEmailButton>이메일로 인증 코드 받기</Styled.CheckingEmailButton>
      </Styled.SubContainer>
    </Styled.Container>
  );
};

export default CheckEmailPage;
