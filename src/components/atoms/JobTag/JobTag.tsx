import * as Styled from './JobTag.styled';

interface JobTagProps {
  job: string;
}

const JobTag = (props: JobTagProps) => {
  const { job } = props;

  return <Styled.Container job={job}>{job}</Styled.Container>;
};

export default JobTag;
