import styled from '@emotion/styled';

import Button from '../../atoms/Button';

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

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  width: 20rem;
  height: 3.125rem;
  border-radius: 0.3125rem;
  padding: 1rem;

  border: 1px solid ${({ theme }) => theme.color.grey};
`;

export const CheckingEmailButton = styled(Button)`
  width: 20rem;
  height: 3.125rem;
  margin-top: 1rem;
`;
