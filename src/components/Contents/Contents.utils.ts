import * as JobType from '../../domains/job/job.type';

import type { SearchFilter } from '../Filter/Filter.type';

export const isJobsInclude = (
  jobs: Array<JobType.Job>,
  searchFilter: Array<SearchFilter>,
): boolean => {
  if (JSON.stringify(searchFilter) === JSON.stringify(['all'])) {
    return true;
  } else {
    return jobs.some((job: JobType.Job) => searchFilter.includes(job));
  }
};
