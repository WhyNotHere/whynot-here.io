// TODO: organisms가 맞는지 고민
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getPostsAsync } from '../../apis/request';

import CircleTag from '../CircleTag';

import * as Styled from './Contents.styled';
import * as JobMapper from '../../domains/job/job.mapper';

import { parseDate } from '../utils/parseDate';

import { Job } from '../../domains/job/job.type';

type ContentsProps = {
  modalChanged: boolean;
};

// TODO: 안에 있는 부분 컴포넌트로 분리
const Contents = (props: ContentsProps) => {
  const { modalChanged } = props;
  const navigate = useNavigate();
  // TODO: 타입 지정
  const [posts, setPosts] = useState<any[]>();

  // TODO: 로직 분리
  // TODO: 에러 처리
  const getPosts = useCallback(async () => {
    try {
      const newPosts = await getPostsAsync();

      setPosts(newPosts);
    } catch (error) {
      console.error(error);
    }
  }, []);

  // TODO: id type 지정
  const handlePostClick = useCallback((id: number) => navigate(`/posts/${id}`), [navigate]);

  useEffect(() => {
    getPosts();
  }, [getPosts, modalChanged]);

  return (
    <Styled.Container>
      {posts &&
        posts.map((post) => (
          <Styled.InfoCard key={post.id} onClick={() => handlePostClick(post.id)}>
            <Styled.Job>
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
            </Styled.Job>

            <Styled.TitleContentImageContainer>
              <Styled.TitleContentContainer>
                <Styled.Title>{post.title}</Styled.Title>
                <Styled.Content>{post.content}</Styled.Content>
              </Styled.TitleContentContainer>
              {!!post.postImg && <Styled.Image src={post.postImg} alt="project image" />}
            </Styled.TitleContentImageContainer>

            <Styled.Writer>{post.writer.nickname}</Styled.Writer>

            <Styled.InfoCardFooterContainer>
              <Styled.FooterLeftContainer>
                <Styled.IconContainer>
                  <Styled.Like />
                  <Styled.IconText>{'좋아요'}</Styled.IconText>
                </Styled.IconContainer>
                <Styled.IconContainer>
                  <Styled.Comment />
                  <Styled.IconText>{0}</Styled.IconText>
                </Styled.IconContainer>
              </Styled.FooterLeftContainer>
              <Styled.IconText>{parseDate(post.createdDt)}</Styled.IconText>
            </Styled.InfoCardFooterContainer>
          </Styled.InfoCard>
        ))}
    </Styled.Container>
  );
};

export default Contents;
