import styled from '@emotion/styled';

import BaseButton from '../../atoms/Button';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
  padding: 0 2rem;

  border-bottom: ${({ theme }) => `1px solid ${theme.color.divider}`};
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Button = styled(BaseButton)`
  width: 8rem;
`;

export const Space = styled.div`
  width: 20rem;
  height: 1rem;
`;
