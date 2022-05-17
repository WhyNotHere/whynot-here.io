import type * as DTO from './post.dto';
import type * as Type from './post.type';

export const jobNameKorean2Job = (
  job: '개발자' | '디자이너' | '기획자' | '그 외',
): 'developer' | 'designer' | 'planner' | 'etc' => {
  if (job === '개발자') {
    return 'developer';
  } else if (job === '디자이너') {
    return 'designer';
  } else if (job === '기획자') {
    return 'planner';
  } else {
    return 'etc';
  }
};

export const d2TMapper_getPostListResponse_PostList = (
  dto: DTO.GetPostListResponse,
): Array<Type.Post> => {
  return dto.map<Type.Post>((post) => ({
    id: post.id,
    title: post.title,
    postImg: post.postImg,
    createdDt: post.createdDt,
    updatedDt: post.updatedDt,
    writer: post.writer,
    content: post.content,
    jobs: post.jobs.map((job) => jobNameKorean2Job(job.name)),
    applicants: post.applicants,
    recruiting: post.recruiting,
  }));
};

export const d2TMapper_getPostResponse_Post = (dto: DTO.GetPostResponse): Type.Post => {
  return {
    id: dto.id,
    title: dto.title,
    postImg: dto.postImg,
    createdDt: dto.createdDt,
    updatedDt: dto.updatedDt,
    writer: dto.writer,
    content: dto.content,
    jobs: dto.jobs.map((job) => jobNameKorean2Job(job.name)),
    applicants: dto.applicants,
    recruiting: dto.recruiting,
  };
};
