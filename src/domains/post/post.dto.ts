import * as JobDTO from '../job/job.dto';
import * as AccountDTO from '../account/account.dto';

export type PostResponseDTO = {
  id: number;
  title: string;
  postImg: string;
  createdDt: string;
  updatedDt: string;
  writer: AccountDTO.AccountResponseDTO;
  content: string;
  jobs: Array<JobDTO.Job>;
  applicants: Array<AccountDTO.AccountResponseDTO>;
  recruiting: boolean;
};

export type GetPostsResponse = Array<PostResponseDTO>;
