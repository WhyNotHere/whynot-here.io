import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Container = styled.div`
  display: flex;
  padding: 1rem 1.25rem;
  gap: 1rem;

  border-bottom: ${({ theme }) => `0.125rem solid ${theme.color.grid_border}`};
`;

export const Button = styled.button<{ selected: boolean }>`
  font-size: 0.875rem;
  cursor: pointer;

  color: ${({ theme }) => theme.color.post_info};

  :hover {
    color: ${({ theme }) => theme.color.black};
  }

  ${({ selected, theme }) =>
    selected &&
    css`
      color: ${theme.color.black};
      font-weight: 700;
    `};
`;
