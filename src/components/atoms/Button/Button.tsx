// TODO: width, height 등 ui적인 부분을 prop으로 넘기는 것은 어색하다
import React from 'react';

import * as Styled from './Button.styled';
import { ButtonType } from './Button.type';

interface ButtonProps {
  $type?: ButtonType;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: ButtonProps) => {
  const { $type = 'contained', children, onClick, ...rest } = props;

  return (
    <Styled.Container $type={$type} {...rest} onClick={onClick}>
      {children}
    </Styled.Container>
  );
};

export default Button;
