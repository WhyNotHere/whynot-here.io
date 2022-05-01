import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const Circle = styled.span<{ circleColor?: string }>`
  display: inline-block;
  background-color: ${({ theme, circleColor }) =>
    !!circleColor ? circleColor : theme.color.black};
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
`;

export const Text = styled.span<{ textColor?: string }>`
  font-size: 0.875rem;
  padding-top: 0.1875rem;

  color: ${({ theme, textColor }) => (!!textColor ? textColor : theme.color.black)};
`;
