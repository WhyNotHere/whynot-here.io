import styled from '@emotion/styled';

import { WhyNotHereHorizontalLogoImg } from '../../assets';

interface LogoProps {
  width?: string;
}

const Logo = (props: LogoProps) => {
  const { width = '12rem' } = props;

  return (
    <Container width={width}>
      <img src={WhyNotHereHorizontalLogoImg} alt="로고 이미지" width="100%" />
    </Container>
  );
};

const Container = styled.div<{ width: string }>`
  width: ${({ width }) => width};
`;

export default Logo;
