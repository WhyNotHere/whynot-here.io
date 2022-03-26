import * as Styled from './LoginPage.styled';

// TODO: react-hook-form 도입? -> 소셜로 바뀌면 필요 없을수도
// TODO: input 컴포넌트로?

const LoginPage = () => {
  return (
    <Styled.Container>
      <Styled.WhyNotHereLogo />
      <Styled.SubContainer>
        <Styled.Title>로그인</Styled.Title>
        <Styled.LoginContainer>
          <Styled.Input placeholder="아이디" />
          <Styled.Input placeholder="비밀번호" type="password" />
        </Styled.LoginContainer>
        <Styled.LoginButton>로그인</Styled.LoginButton>
        <Styled.SignUpContainer>
          <Styled.Text>WhyNotHere 회원이 아닌가요? </Styled.Text>
          <Styled.SignUpLink to="/check-email">지금 가입하세요.</Styled.SignUpLink>
        </Styled.SignUpContainer>
      </Styled.SubContainer>
    </Styled.Container>
  );
};

export default LoginPage;
