// TODO: width, height 등 ui적인 부분을 prop으로 넘기는 것은 어색하다
import * as Styled from './Button.styled';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const { children, onClick, ...rest } = props;

  return (
    <Styled.Container {...rest} onClick={onClick}>
      {children}
    </Styled.Container>
  );
};

export default Button;
