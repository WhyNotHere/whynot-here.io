import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSignOut } from '../../domains/sign-in/sign-in.api';

import * as Styled from './Header.styled';

import Logo from '../Logo';

import { getLoginStateAsync } from '../../apis/request';
import { RoutePath } from '../../RoutePath';

type HeaderProps = {
  setModalVisible: (isModalVisible: boolean) => void;
};

const Header = (props: HeaderProps) => {
  const { setModalVisible } = props;

  const [isLogin, setLogin] = useState(false);
  const navigate = useNavigate();
  const { mutateAsync: mutateSignOut, isLoading, isError } = useSignOut();

  const handleWritingClick = useCallback(() => {
    if (!isLogin) {
      alert('로그인이 필요합니다.');
      navigate(RoutePath.SIGN_IN);

      return;
    }

    setModalVisible(true);
  }, [isLogin, navigate, setModalVisible]);

  const handleLoginClick = useCallback(() => navigate(RoutePath.SIGN_IN), [navigate]);

  const handleLogoutClick = useCallback(async () => {
    if (confirm('로그아웃 하시겠습니까?')) {
      try {
        await mutateSignOut();

        setLogin(false);
      } catch (error) {
        console.error(error);
      }
    }
  }, [mutateSignOut]);

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

  return isLoading ? (
    <div>Loading...</div>
  ) : isError ? (
    <div>Error</div>
  ) : (
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
