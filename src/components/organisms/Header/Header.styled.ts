import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
  padding: 0 2rem;

  border-bottom: ${({ theme }) => `1px solid ${theme.color.divider}`};
`;

export const Space = styled.div`
  width: 10rem;
  height: 1rem;
`;
