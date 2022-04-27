import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../../atoms/Logo';

import * as Styled from './Header.styled';

import tokenService from '../../../services/token.service';

const Header = () => {
  const [isLogin, setLogin] = useState(false);
  const navigate = useNavigate();

  const handleWritingClick = useCallback(() => {
    if (!isLogin) {
      alert('로그인이 필요합니다.');
      navigate('/login');

      return;
    }

    navigate('/writing');
  }, [isLogin, navigate]);

  const handleLoginClick = useCallback(() => navigate('/login'), [navigate]);

  const handleLogoutClick = useCallback(() => {
    if (confirm('로그아웃 하시겠습니까?')) {
      tokenService.removeEmailToken();
      setLogin(false);
    }
  }, []);

  useEffect(() => {
    if (tokenService.getEmailToken()) {
      setLogin(true);
    }
  }, [isLogin]);

  return (
    <Styled.Container>
      <Styled.Space />
      <Logo />
      <Styled.ButtonContainer>
        <Styled.Button $type="text" onClick={handleWritingClick}>
          글쓰기
        </Styled.Button>
        {isLogin ? (
          <Styled.Button onClick={handleLogoutClick}>로그아웃</Styled.Button>
        ) : (
          <Styled.Button $type="text" onClick={handleLoginClick}>
            로그인
          </Styled.Button>
        )}
      </Styled.ButtonContainer>
    </Styled.Container>
  );
};

export default Header;
