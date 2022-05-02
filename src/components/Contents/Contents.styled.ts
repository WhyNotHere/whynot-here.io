import { LikeOutlined, MessageOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

// TODO: 여기를 BaseLayout으로 할지 고민
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const InfoCard = styled.div`
  width: 100%;
  height: 13.75rem;
  padding: 1.875rem 1.25rem 1.25rem 1.25rem;
  cursor: pointer;
  border-bottom: 0.0156rem solid ${({ theme }) => theme.color.grey};

  :nth-of-type(odd) {
    border-right: 0.0156rem solid ${({ theme }) => theme.color.grey};
  }
`;

export const TitleContentImageContainer = styled.div`
  display: flex;
`;

export const TitleContentContainer = styled.div``;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const InfoCardFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.75rem;
`;

export const FooterLeftContainer = styled.div`
  display: flex;
  gap: 0.625rem;
`;

export const Title = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Content = styled.div`
  padding-top: 1rem;
  overflow: hidden;
  line-height: 1.2;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Image = styled.img`
  width: 5rem;
  height: 5rem;
  margin-left: 1.25rem;
  object-fit: cover;
`;

export const Writer = styled.div`
  padding-top: 1rem;
`;

export const Like = styled(LikeOutlined)`
  font-size: 0.75rem;

  color: ${({ theme }) => theme.color.post_info};
`;

export const Comment = styled(MessageOutlined)`
  font-size: 0.75rem;

  color: ${({ theme }) => theme.color.post_info};
`;

export const IconText = styled.div`
  font-size: 0.75rem;
  padding-top: 0.0625rem;

  color: ${({ theme }) => theme.color.post_info};
`;

export const Job = styled.div`
  display: flex;
  margin-top: 0.5rem;

  > *:not(:last-child) {
    margin-right: 0.5rem;
  }
`;
