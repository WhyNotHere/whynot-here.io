import styled from '@emotion/styled';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5rem;

  padding: 2rem;
`;

/* 여기 이하는 이후 다 분리할 스타일들 */
export const TempContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 10rem;
  height: 10rem;
  background-color: orange;
`;

export const ImageContainer = styled.div``;

export const InfoContainer = styled.div`
  background-color: green;
  height: 3rem;
`;
