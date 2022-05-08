import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getLoginStateAsync, postLogoutAsync } from '../../apis/request';

import Logo from '../Logo';

import * as Styled from './Header.styled';

type HeaderProps = {
  setModalVisible: (isModalVisible: boolean) => void;
};

const Header = (props: HeaderProps) => {
  const { setModalVisible } = props;

  const [isLogin, setLogin] = useState(false);
  const navigate = useNavigate();

  const handleWritingClick = useCallback(() => {
    if (!isLogin) {
      alert('로그인이 필요합니다.');
      navigate('/login');

      return;
    }

    setModalVisible(true);
  }, [isLogin, navigate, setModalVisible]);

  const handleLoginClick = useCallback(() => navigate('/login'), [navigate]);

  const handleLogoutClick = useCallback(() => {
    if (confirm('로그아웃 하시겠습니까?')) {
      try {
        postLogoutAsync();

        setLogin(false);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  // TODO: 훅으로 분리
  const getLoginState = useCallback(async () => {
    try {
      const { login } = await getLoginStateAsync();

      setLogin(login);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getLoginState();
  }, [getLoginState]);

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
