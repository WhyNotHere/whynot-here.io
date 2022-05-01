import * as Styled from './CircleTag.styled';

// TODO: 타입 변경
type CircleTagProps = {
  circleColor?: string;
  text: string;
  textColor?: string;
};

const CircleTag = (props: CircleTagProps) => {
  const { circleColor, text, textColor } = props;

  return (
    <Styled.Container>
      <Styled.Circle circleColor={circleColor}></Styled.Circle>
      <Styled.Text textColor={textColor}>{text}</Styled.Text>
    </Styled.Container>
  );
};

export default CircleTag;
