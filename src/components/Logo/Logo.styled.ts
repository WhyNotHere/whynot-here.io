import styled from '@emotion/styled';
import { Link as BaseLink } from 'react-router-dom';

export const Link = styled(BaseLink)<{ width: string }>`
  width: ${({ width }) => width};
`;
