import styled from '@emotion/styled';

export const Container = styled.div`
  // TODO: 색 어떻게 할지 고민
  background-color: ${({ theme }) => theme.color.background};
  min-height: 100%;
  min-width: 30rem;
`;

export const SubContainer = styled.div`
  max-width: 68.75rem;
  margin: 0 auto;
`;
