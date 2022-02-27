// TODO: organisms가 맞는지 고민
import { useEffect, useState } from 'react';

import { getPostsAsync } from '../../../apis/request';

import JobTag from '../../atoms/JobTag';

import * as Styled from './Contents.styled';

// 임시
import testPosts from '../../../mock/posts.json';

// TODO: 안에 있는 부분 컴포넌트로 분리
const Contents = () => {
  // TODO: 타입 지정
  const [posts, setPosts] = useState<any[]>();

  // TODO: 로직 분리
  // TODO: 에러 처리
  const getPosts = async () => {
    try {
      const newPosts = await getPostsAsync();

      setPosts(newPosts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  console.log(posts);

  return (
    <Styled.Container>
      {testPosts.map((post) => (
        <Styled.InfoContainer key={post.id}>
          <Styled.Image src={post.postImg} alt="포스트 이미지" width="100%" />
          <Styled.Title>{post.title}</Styled.Title>
          <Styled.Job>
            {post.jobs.map((job) => (
              <JobTag key={job.id} job={job.name} />
            ))}
          </Styled.Job>
        </Styled.InfoContainer>
      ))}
    </Styled.Container>
  );
};

export default Contents;
