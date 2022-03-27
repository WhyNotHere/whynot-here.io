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

export const SubContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 28.125rem;
  height: 31.25rem;
  border-radius: 0.25rem;
  padding: 3.75rem;

  background-color: ${({ theme }) => theme.color.white};
`;

export const NicknameContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  gap: 1rem;
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 3.125rem;
  border-radius: 0.3125rem;
  padding: 1rem;
  margin-bottom: 1rem;

  border: 1px solid ${({ theme }) => theme.color.grey};
`;

export const NicknameInput = styled(Input)`
  margin-bottom: 0;
`;

export const CheckDuplicationButton = styled(Button)`
  width: 8rem;
`;

export const RegistrationButton = styled(Button)`
  min-height: 3.125rem;
  margin-top: 2rem;
`;
