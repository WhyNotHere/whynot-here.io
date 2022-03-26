import styled from '@emotion/styled';

import Logo from '../../atoms/Logo';
import Button from '../../atoms/Button';

export const WhyNotHereLogo = styled(Logo)`
  padding: 1rem 0;
`;

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
  width: 40rem;
  height: 25rem;
  border-radius: 2rem;
  padding: 2rem;

  background-color: ${({ theme }) => theme.color.white};
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`;

export const Title = styled.div`
  font-size: 2rem;
  padding: 1rem 0;
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
`;
