// TODO: DTO 분리
import * as AccountDTO from '../account/account.dto';
import * as JobType from '../job/job.type';

export type Posts = {
  id: number;
  title: string;
  postImg: string;
  createdDt: string;
  updatedDt: string;
  writer: AccountDTO.AccountResponseDTO;
  content: string;
  jobs: Array<JobType.JobNameEnglish>;
  applicants: Array<AccountDTO.AccountResponseDTO>;
  recruiting: boolean;
};
