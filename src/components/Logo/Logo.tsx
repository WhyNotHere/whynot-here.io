import { WhyNotHereHorizontalLogoImg } from '../../assets';
import { RoutePath } from '../../RoutePath';

import * as Styled from './Logo.styled';

interface LogoProps {
  width?: string;
}

const Logo = (props: LogoProps) => {
  const { width = '12rem', ...rest } = props;

  return (
    <Styled.Link to={RoutePath.HOME} width={width} {...rest}>
      <img src={WhyNotHereHorizontalLogoImg} alt="로고" width="100%" />
    </Styled.Link>
  );
};

export default Logo;
