import { useNavigate } from 'react-router-dom';

import Logo from '../../atoms/Logo';

import * as Styled from './Header.styled';

const Header = () => {
  const navigate = useNavigate();

  const onClickLogin = () => navigate('/login');

  return (
    <Styled.Container>
      <Styled.Space />
      <Logo />
      <Styled.LoginButton $type="text" onClick={onClickLogin}>
        로그인
      </Styled.LoginButton>
    </Styled.Container>
  );
};

export default Header;
