import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 4rem;
`;

// TODO: 네이밍 고민
export const SubContainer = styled.div`
  width: 100%;
  // TODO: max-width를 여기서 말고 전체적으로 제어할 수 있으면 더 좋을듯
  max-width: 50rem;
`;

export const PostInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem 0;
`;

export const Title = styled.div`
  font-size: 2rem;
  padding: 2rem 0 1rem;
`;

export const Writer = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
`;

export const Date = styled.div`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.color.grey};
`;

export const Contents = styled.div``;

export const ProjectImage = styled.img`
  width: 100%;
  padding: 1rem 0;
`;
