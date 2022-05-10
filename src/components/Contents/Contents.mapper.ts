// TODO: DTO 분리
import type * as PostDTO from '../../domains/post/post.dto';
import * as JobMapper from '../../domains/job/job.mapper';

export const objectJobs2ArrayJobs = (posts: PostDTO.PostResponseDTO[]) =>
  posts.map((post) => ({
    id: post.id,
    title: post.title,
    postImg: post.postImg,
    createdDt: post.createdDt,
    updatedDt: post.updatedDt,
    writer: post.writer,
    content: post.content,
    jobs: post.jobs.map((job) => JobMapper.jobNameKoreanToJobNameEnglish(job.name)),
    applicants: post.applicants,
    recruiting: post.recruiting,
  }));
