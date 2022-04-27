// TODO: organisms가 맞는지 고민
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getPostsAsync } from '../../../apis/request';

import JobTag from '../../atoms/JobTag';

import * as Styled from './Contents.styled';

// TODO: 안에 있는 부분 컴포넌트로 분리
const Contents = () => {
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
  const onClickPost = useCallback((id: number) => navigate(`/posts/${id}`), [navigate]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Styled.Container>
      {posts &&
        posts.map((post) => (
          <Styled.InfoContainer key={post.id} onClick={() => onClickPost(post.id)}>
            <Styled.Image src={post.postImg} alt="포스트 이미지" width="100%" />
            <Styled.Title>{post.title}</Styled.Title>
            <Styled.Job>
              {post.jobs.map((job: any) => (
                <JobTag key={job.id} job={job.name} />
              ))}
            </Styled.Job>
          </Styled.InfoContainer>
        ))}
    </Styled.Container>
  );
};

export default Contents;
