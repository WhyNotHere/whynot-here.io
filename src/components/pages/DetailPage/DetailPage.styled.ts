import styled from '@emotion/styled';
import { ClockCircleOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';

import BaseButton from '../../Button';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 4rem;
`;

// TODO: 네이밍 고민
export const SubContainer = styled.div`
  width: 100%;
  // TODO: max-width를 여기서 말고 전체적으로 제어할 수 있으면 더 좋을듯
  max-width: 46rem;
`;

export const PostHeaderContainer = styled.div`
  padding: 1.5rem 0 1.375rem;
`;

export const PostInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PostHeaderLeftContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const PostHeaderRightContainer = styled.div`
  display: flex;
`;

export const PostContentLeftContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const RecruitmentContainer = styled.div`
  padding: 1.375rem 0;
`;

export const JobContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const PostContentContainer = styled.div`
  padding: 1.375rem 0;
`;

export const IconInfoContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem 0;
`;

export const Title = styled.h2`
  padding-bottom: 0.75rem;

  color: ${({ theme }) => theme.color.black};
`;

export const RecruitmentTitle = styled.h4`
  padding-bottom: 1rem;

  color: ${({ theme }) => theme.color.black};
`;

export const Writer = styled.div`
  font-size: 0.875rem;
  padding-bottom: 0.75rem;

  color: ${({ theme }) => theme.color.black};
`;

export const Date = styled.div`
  font-size: 0.875rem;
  padding-top: 0.125rem;

  color: ${({ theme }) => theme.color.post_info};
`;

export const PostHeaderComment = styled.div`
  font-size: 0.875rem;
  padding-top: 0.125rem;

  color: ${({ theme }) => theme.color.post_info};
`;

export const PostContentComment = styled.div`
  padding-top: 0.25rem;
`;

export const Like = styled.div`
  padding-top: 0.25rem;
`;

export const ClockIcon = styled(ClockCircleOutlined)`
  font-size: 0.875rem;

  color: ${({ theme }) => theme.color.post_info};
`;

export const PostHeaderCommentIcon = styled(MessageOutlined)`
  font-size: 0.875rem;

  color: ${({ theme }) => theme.color.post_info};
`;

export const PostContentCommentIcon = styled(MessageOutlined)`
  font-size: 1.125rem;

  color: ${({ theme }) => theme.color.black};
`;

// TODO: 버튼 컴포넌트 수정하기??
export const PostContentButton = styled(BaseButton)`
  border: none;
  font-size: 0.75rem;
  width: 1.875rem;

  color: ${({ theme }) => theme.color.post_info};
`;

export const LikeIcon = styled(LikeOutlined)`
  font-size: 1.125rem;

  color: ${({ theme }) => theme.color.black};
`;

export const Contents = styled.div`
  padding: 1.25rem 0;
`;

export const Image = styled.img`
  width: 100%;
  padding: 1.25rem 0;
`;

export const DivisionLine = styled.div`
  border-top: 0.0625rem solid ${({ theme }) => theme.color.divider};
`;
