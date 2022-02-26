// organisms가 맞는지 고민

import testPosts from '../../../mock/posts.json';

import * as Styled from './Contents.styled';

// 안에 있는 부분 컴포넌트로 분리하기
const Contents = () => {
  return (
    <Styled.Container>
      {testPosts.map((post) => (
        <Styled.TempContainer key={post.id}>
          <Styled.ImageContainer>
            <img src={post.postImg} alt="포스트 이미지" width="100%" />
          </Styled.ImageContainer>
          <Styled.InfoContainer>hi</Styled.InfoContainer>
        </Styled.TempContainer>
      ))}
    </Styled.Container>
  );
};

export default Contents;
