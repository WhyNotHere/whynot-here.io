import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getPostAsync } from './apis/request';

import styled from '@emotion/styled';

const DetailPage = () => {
  const { id } = useParams<Record<string, string | undefined>>();
  // TODO: 타입 지정
  const [post, setPost] = useState<any>();

  const getPost = async (id: string | undefined) => {
    try {
      const newPost = await getPostAsync(id);

      setPost(newPost);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPost(id);
  }, []);

  console.log(post);

  return (
    <>
      {post && (
        <Container>
          <div>제목 - {post.title}</div>
          <div>내용 - {post.content}</div>
          <div>닉네임 - {post.createdBy.nickname}</div>
          <img
            src="https://user-images.githubusercontent.com/40762111/155182843-d4bcf2e6-dd49-44b8-b78a-de238e2121e5.png"
            alt="포소트 이미지"
            width="100%"
          />
          <div>내용 - {post.content}</div>
        </Container>
      )}
    </>
  );
};

// TODO: styled 파일 분리
const Container = styled.div`
  width: 100%;
  padding: 4rem;
`;

export default DetailPage;
