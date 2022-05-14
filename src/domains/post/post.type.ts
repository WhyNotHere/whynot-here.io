import type * as CommonType from '../common.type';

export type Post = {
  id: number;
  title: string;
  postImg: string;
  createdDt: string;
  updatedDt: string;
  writer: CommonType.AccountInfo;
  content: string;
  jobs: Array<CommonType.JobEnglish>;
  applicants: Array<CommonType.AccountInfo>;
  recruiting: boolean;
};
