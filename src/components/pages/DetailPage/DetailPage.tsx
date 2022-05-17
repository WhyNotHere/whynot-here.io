import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import usePost from '../../../hooks/usePost';

import type * as PostAction from '../../../domains/post/post.action';
import { useDeletePost, useGetPost } from '../../../domains/post/post.api';

import * as Styled from './DetailPage.styled';

import Button from '../../Button';
import Tag from '../../Tag';

import { parseDate } from '../../utils/parseDate';
import { RoutePath } from '../../../RoutePath';

// type DetailPageProps = {
//   setRevisionModalVisible: (isRevisionModalVisible: boolean) => void;
// };

const DetailPage = () => {
  // const { setRevisionModalVisible } = props;
  const { id: postId } = useParams();
  const { isEditable } = usePost();
  const navigate = useNavigate();
  // TODO: getPost, deletePost의 isLoading, isError 구분
  const {
    data: post,
    isLoading,
    isError,
  } = useGetPost(postId as unknown as PostAction.GetPostCriteria);
  const { mutateAsync: mutateDeletePost } = useDeletePost();

  const handlePostDelete = useCallback(async () => {
    try {
      if (confirm('해당 게시물을 삭제하시겠습니까?')) {
        await mutateDeletePost(postId as unknown as PostAction.DeletePostCommand);

        navigate(RoutePath.HOME);
      }
    } catch (error) {
      console.error(error);
    }
  }, [postId, mutateDeletePost, navigate]);

  return isLoading ? (
    <div>Loading...</div>
  ) : isError ? (
    <div>Error</div>
  ) : (
    <Styled.Container>
      {post && (
        <Styled.SubContainer>
          <Styled.PostHeaderContainer>
            <Styled.Title>{post.title}</Styled.Title>
            <Styled.Writer>{post.writer.nickname}</Styled.Writer>
            <Styled.PostInfoContainer>
              <Styled.PostHeaderLeftContainer>
                <Styled.IconInfoContainer>
                  <Styled.ClockIcon />
                  <Styled.Date>{parseDate(post.createdDt)}</Styled.Date>
                </Styled.IconInfoContainer>
                <Styled.IconInfoContainer>
                  <Styled.PostHeaderCommentIcon />
                  <Styled.PostHeaderComment>{0}</Styled.PostHeaderComment>
                </Styled.IconInfoContainer>
              </Styled.PostHeaderLeftContainer>
              {isEditable && (
                <Styled.PostHeaderRightContainer>
                  {/* <Styled.PostContentButton
                    $type="text"
                    onClick={() => setRevisionModalVisible(true)}
                  >
                    수정
                  </Styled.PostContentButton> */}
                  <Styled.PostContentButton $type="text" onClick={handlePostDelete}>
                    삭제
                  </Styled.PostContentButton>
                </Styled.PostHeaderRightContainer>
              )}
            </Styled.PostInfoContainer>
          </Styled.PostHeaderContainer>

          <Styled.DivisionLine />

          <Styled.RecruitmentContainer>
            <Styled.RecruitmentTitle>모집</Styled.RecruitmentTitle>

            <Styled.JobContainer>
              {post.jobs.map((job, index) => (
                <Tag key={index} type={job} />
              ))}
            </Styled.JobContainer>
          </Styled.RecruitmentContainer>

          <Styled.DivisionLine />

          <Styled.PostContentContainer>
            <Styled.Contents>{post.content}</Styled.Contents>
            <Styled.Image src={post.postImg} alt="포스트 이미지" />
            <Styled.PostContentLeftContainer>
              <Styled.IconInfoContainer onClick={() => alert('아직 준비 중입니다.')}>
                <Styled.LikeIcon />
                <Styled.Like>{'좋아요'}</Styled.Like>
              </Styled.IconInfoContainer>
              <Styled.IconInfoContainer onClick={() => alert('아직 준비 중입니다.')}>
                <Styled.PostContentCommentIcon />
                <Styled.PostContentComment>{0}</Styled.PostContentComment>
              </Styled.IconInfoContainer>
            </Styled.PostContentLeftContainer>
          </Styled.PostContentContainer>

          <Styled.DivisionLine />

          <Styled.ButtonContainer>
            <Button onClick={() => alert('아직 준비 중입니다.')}>지원하기</Button>
          </Styled.ButtonContainer>
        </Styled.SubContainer>
      )}
    </Styled.Container>
  );
};

export default DetailPage;
