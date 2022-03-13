import styled from '@emotion/styled';

export const Container = styled.button`
  width: 10rem;
  height: 3rem;
  border-radius: 0.75rem;
  cursor: pointer;

  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
`;
