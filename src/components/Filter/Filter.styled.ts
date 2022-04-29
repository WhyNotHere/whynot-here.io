import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem;
  border-bottom: ${({ theme }) => `1px solid ${theme.color.divider}`};
`;

export const Temp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 2rem;
  border-radius: 0.5rem;

  border: ${({ theme }) => `1px solid ${theme.color.divider}`}; ;
`;
