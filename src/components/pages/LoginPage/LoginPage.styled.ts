import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import Logo from '../../Logo';
import Button from '../../Button';

export const WhyNotHereLogo = styled(Logo)`
  padding: 1rem 0;
`;

// TODO: 회원 가입 과정에서 Container, SubContainer가 비슷하니깐 컴포넌트화
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;

  background-color: ${({ theme }) => theme.color.background};
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 28.125rem;
  height: 25rem;
  border-radius: 0.25rem;
  padding: 2rem;

  background-color: ${({ theme }) => theme.color.white};
`;

export const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SignUpContainer = styled.div`
  margin-top: 1.25rem;
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.75rem;
`;

export const Input = styled.input`
  width: 20rem;
  height: 3.125rem;
  border-radius: 0.3125rem;
  margin-bottom: 1rem;
  padding: 1rem;

  border: 1px solid ${({ theme }) => theme.color.grey};
`;

export const LoginButton = styled(Button)`
  width: 20rem;
  height: 3.125rem;
  margin-top: 1.25rem;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.color.grey};
`;

export const SignUpLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.primary};

  :hover {
    text-decoration: underline;
  }
`;
