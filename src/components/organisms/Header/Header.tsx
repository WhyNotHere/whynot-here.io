import { useNavigate } from 'react-router-dom';

import Logo from '../../atoms/Logo';
import Button from '../../atoms/Button';

import * as Styled from './Header.styled';

const Header = () => {
  const navigate = useNavigate();

  const onClickLogin = () => navigate('/login');

  return (
    <Styled.Container>
      <Styled.Space />
      <Logo />
      <Button $type="text" onClick={onClickLogin}>
        로그인
      </Button>
    </Styled.Container>
  );
};

export default Header;
