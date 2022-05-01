import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';
import { getPostAsync } from '../../../apis/request';

import Button from '../../Button';
import CircleTag from '../../CircleTag';

import * as Styled from './DetailPage.styled';
import { parseDate } from './DetailPage.utils';

import type { Job } from '../../../domains/job/job.type';
import * as JobMapper from '../../../domains/job/job.mapper';

const DetailPage = () => {
  const { id } = useParams<Record<string, string | undefined>>();
  // TODO: 타입 지정
  const [post, setPost] = useState<any>();
  const { isDeletable } = useAuth({ postId: id });

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

  const handlePostDelete = useCallback(() => {
    console.log('deletion');
  }, []);

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
              {isDeletable && <Styled.DeleteIcon onClick={handlePostDelete} />}
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
