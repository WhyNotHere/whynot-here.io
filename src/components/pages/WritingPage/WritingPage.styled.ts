import styled from '@emotion/styled';

import BaseButton from '../../Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 4rem;
  gap: 1rem;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const SubmitContainer = styled.form`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const Button = styled(BaseButton)`
  width: 8rem;
`;

// TODO: editor로 변경될 수도
export const TextArea = styled.textarea`
  height: 30rem;
`;
