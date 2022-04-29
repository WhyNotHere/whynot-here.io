import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Container = styled.div<{ job: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  width: 4rem;
  height: 2rem;

  ${({ theme, job }) => {
    if (job === '개발자') {
      return css`
        background-color: ${theme.color.blue};
      `;
    } else if (job === '디자이너') {
      return css`
        background-color: ${theme.color.yellow};
      `;
    } else {
      return css`
        background-color: ${theme.color.red};
      `;
    }
  }}
`;
