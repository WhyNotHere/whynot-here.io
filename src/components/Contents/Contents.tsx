// TODO: organisms가 맞는지 고민
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type * as PostType from '../../domains/post/post.type';
import { useGetPostList } from '../../domains/post/post.api';

import * as Utils from './Contents.utils';
import * as Styled from './Contents.styled';

// TODO: DTO 분리
// import CircleTag from '../CircleTag';
// import * as JobMapper from '../../domains/job/job.mapper';
// import * as DTO from '../../domains/job/job.dto';

import type { SearchFilter } from '../Filter/Filter.type';

import { parseDate } from '../utils/parseDate';

type ContentsProps = {
  modalChanged: boolean;
  searchFilter: Array<SearchFilter>;
};

// TODO: 안에 있는 부분 컴포넌트로 분리
const Contents = (props: ContentsProps) => {
  const { modalChanged, searchFilter } = props;
  const navigate = useNavigate();
  const [filteredPosts, setFilteredPosts] = useState<PostType.Post[]>();

  const { data: posts, isLoading, isError, refetch } = useGetPostList();

  // TODO: 서버 필터 기능 작업되면 수정
  const getFilteredPosts = useCallback(() => {
    if (!posts) {
      return;
    }

    setFilteredPosts(posts.filter((post) => Utils.isJobsInclude(post.jobs, searchFilter)));
  }, [posts, searchFilter]);

  const handlePostClick = useCallback((id: number) => navigate(`/posts/${id}`), [navigate]);

  useEffect(() => {
    refetch();
  }, [refetch, modalChanged]);

  useEffect(() => {
    getFilteredPosts();
  }, [getFilteredPosts, searchFilter, posts]);

  return isLoading ? (
    <div>Loading...</div>
  ) : isError ? (
    <div>Error</div>
  ) : (
    <Styled.Container>
      {filteredPosts &&
        filteredPosts.map((post) => (
          <Styled.InfoCard key={post.id} onClick={() => handlePostClick(post.id)}>
            {/* <Styled.Job>
          {post.jobs.map((job: DTO.Job) => {
            const jobWithColor = JobMapper.job2JobWithColor(job);

            return (
              <CircleTag
                key={jobWithColor.id}
                circleColor={jobWithColor.color}
                text={jobWithColor.name}
              />
            );
          })}
        </Styled.Job> */}

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
