import type { Job } from '../../domains/job/job.type';

import * as Styled from './Tag.styled';

type TagProps = {
  type: Job;
};

const Tag = (props: TagProps) => {
  const { type } = props;
  const text =
    type === 'developer'
      ? '개발자'
      : type === 'designer'
      ? '디자이너'
      : type === 'planner'
      ? '기획자'
      : '기타';

  return (
    <Styled.Container type={type}>
      <Styled.Text>{text}</Styled.Text>
    </Styled.Container>
  );
};

export default Tag;
