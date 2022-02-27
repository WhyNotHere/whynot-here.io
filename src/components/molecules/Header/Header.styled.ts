import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;

  border-bottom: ${({ theme }) => `1px solid ${theme.color.divider}`};
`;
