import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Job } from '../../domains/job/job.type';

export const Container = styled.div<{ type: Job }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 1.125rem;
  font-size: 0.625rem;

  ${({ theme, type }) => {
    if (type === 'developer') {
      return css`
        background-color: ${theme.color.jobs.developer};
      `;
    } else if (type === 'designer') {
      return css`
        background-color: ${theme.color.jobs.designer};
      `;
    } else if (type === 'planner') {
      return css`
        background-color: ${theme.color.jobs.planner};
      `;
    } else {
      return css`
        background-color: ${theme.color.jobs.etc};
      `;
    }
  }}
`;

export const Text = styled.div`
  padding-top: 0.0938rem;

  color: ${({ theme }) => theme.color.white};
`;
