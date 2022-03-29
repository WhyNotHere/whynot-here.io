import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getPostAsync } from '../../../apis/request';

import Button from '../../atoms/Button';

import * as Styled from './DetailPage.styled';
import { parseDate } from './DetailPage.utils';

const DetailPage = () => {
  const { id } = useParams<Record<string, string | undefined>>();
  // TODO: 타입 지정
  const [post, setPost] = useState<any>();

  // TODO: api 호출 정리
  const getPost = async (id: string | undefined) => {
    try {
      const newPost = await getPostAsync(id);

      setPost(newPost);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickApply = () => {
    console.log('click Apply Button');
  };

  useEffect(() => {
    getPost(id);
  }, []);

  return (
    <Styled.Container>
      {post && (
        <Styled.SubContainer>
          <Styled.Title>{post.title}</Styled.Title>
          <Styled.PostInfoContainer>
            <Styled.Writer>{post.writer.nickname}</Styled.Writer>
            <Styled.Date>{parseDate(post.createdDt)}</Styled.Date>
          </Styled.PostInfoContainer>
          <Styled.ProjectImage src={post.postImg} alt="포스트 이미지" />
          <Styled.Contents>{post.content}</Styled.Contents>
          <Styled.ButtonContainer>
            <Button onClick={onClickApply}>지원하기</Button>
          </Styled.ButtonContainer>
        </Styled.SubContainer>
      )}
    </Styled.Container>
  );
};

export default DetailPage;
