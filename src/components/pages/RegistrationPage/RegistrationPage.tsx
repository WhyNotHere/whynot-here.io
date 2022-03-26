import * as Styled from './RegistrationPage.styled';

const RegistrationPage = () => {
  return (
    <Styled.Container>
      <Styled.SubContainer>
        <Styled.Title>회원가입</Styled.Title>
        <Styled.Input placeholder={'이메일'} disabled />
        <Styled.NicknameContainer>
          <Styled.NicknameInput placeholder="닉네임" />
          <Styled.CheckDuplicationButton>중복 확인</Styled.CheckDuplicationButton>
        </Styled.NicknameContainer>
        <Styled.Input placeholder="비밀번호" type="password" />
        <Styled.Input placeholder="비밀번호 재확인" type="password" />
        <Styled.RegistrationButton>회원가입</Styled.RegistrationButton>
      </Styled.SubContainer>
    </Styled.Container>
  );
};

export default RegistrationPage;
