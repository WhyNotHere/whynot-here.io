import styled from '@emotion/styled';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5rem;
  padding: 4rem;
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
`;

export const Title = styled.div`
  margin-top: 0.5rem;
`;

export const Job = styled.div`
  display: flex;
  margin-top: 0.5rem;

  > *:not(:last-child) {
    margin-right: 0.5rem;
  }
`;
