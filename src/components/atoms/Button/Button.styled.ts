import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ButtonType } from './Button.type';

export const Container = styled.button<{ $type: ButtonType }>`
  width: 10rem;
  height: 3rem;
  // TODO: 다른 border-radius들 통일
  border-radius: 0.75rem;
  cursor: pointer;

  ${({ theme, $type }) => {
    if ($type === 'contained') {
      return css`
        background-color: ${theme.color.primary};
        color: ${theme.color.white};
      `;
      //TODO: 아직 스타일 못 정함
    } else if ($type === 'text') {
      return css``;
    }
  }}
`;
