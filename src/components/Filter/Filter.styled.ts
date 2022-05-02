import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem;
  border-bottom: ${({ theme }) => `0.0156rem solid ${theme.color.grey}`};
`;

export const Temp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 2rem;
  border-radius: 0.5rem;

  border: ${({ theme }) => `0.0625rem solid ${theme.color.divider}`}; ;
`;
