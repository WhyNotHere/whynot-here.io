import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';
import { deletePostAsync, getPostAsync } from '../../../apis/request';

import Button from '../../Button';
import CircleTag from '../../CircleTag';

import * as Styled from './DetailPage.styled';

import type { Job } from '../../../domains/job/job.type';
import * as JobMapper from '../../../domains/job/job.mapper';

import { parseDate } from '../../utils/parseDate';

type DetailPageProps = {
  setRevisionModalVisible: (isRevisionModalVisible: boolean) => void;
};

const DetailPage = (props: DetailPageProps) => {
  const { setRevisionModalVisible } = props;

  const { id } = useParams<Record<string, string | undefined>>();
  // TODO: 타입 지정
  const [post, setPost] = useState<any>();
  const { isEditable } = useAuth({ postId: id });
  const navigate = useNavigate();

  // TODO: api 호출 정리
  const getPost = useCallback(async (id: string | undefined) => {
    try {
      const newPost = await getPostAsync(id);

      setPost(newPost);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const onClickApply = () => {
    console.log('click Apply Button');
  };

  const handlePostDelete = useCallback(async () => {
    try {
      if (confirm('해당 게시물을 삭제하시겠습니까?')) {
        await deletePostAsync(Number(id));

        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  }, [id, navigate]);

  useEffect(() => {
    getPost(id);
  }, [id, getPost]);

  return (
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
                  <Styled.PostContentButton
                    $type="text"
                    onClick={() => setRevisionModalVisible(true)}
                  >
                    수정
                  </Styled.PostContentButton>
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
              {post.jobs.map((job: Job) => {
                const jobWithColor = JobMapper.job2JobWithColor(job);

                return (
                  <CircleTag
                    key={jobWithColor.id}
                    circleColor={jobWithColor.color}
                    text={jobWithColor.name}
                  />
                );
              })}
            </Styled.JobContainer>
          </Styled.RecruitmentContainer>

          <Styled.DivisionLine />

          <Styled.PostContentContainer>
            <Styled.Contents>{post.content}</Styled.Contents>
            <Styled.Image src={post.postImg} alt="포스트 이미지" />
            <Styled.PostContentLeftContainer>
              <Styled.IconInfoContainer>
                <Styled.LikeIcon />
                <Styled.Like>{'좋아요'}</Styled.Like>
              </Styled.IconInfoContainer>
              <Styled.IconInfoContainer>
                <Styled.PostContentCommentIcon />
                <Styled.PostContentComment>{0}</Styled.PostContentComment>
              </Styled.IconInfoContainer>
            </Styled.PostContentLeftContainer>
          </Styled.PostContentContainer>

          <Styled.DivisionLine />

          <Styled.ButtonContainer>
            <Button onClick={onClickApply}>지원하기</Button>
          </Styled.ButtonContainer>
        </Styled.SubContainer>
      )}
    </Styled.Container>
  );
};

export default DetailPage;
