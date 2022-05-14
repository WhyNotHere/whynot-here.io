import { theme } from '../../styles/theme';

import * as JobType from './job.type';
import * as CommonDTO from '../common.dto';

export const job2JobWithColor = (job: CommonDTO.JobInfo): JobType.JobWithColor => {
  let color = '';

  if (job.id === 1) {
    color = theme.color.jobs.developer;
  } else if (job.id === 2) {
    color = theme.color.jobs.designer;
  } else if (job.id === 3) {
    color = theme.color.jobs.planner;
  } else {
    color = theme.color.jobs.etc;
  }

  return {
    id: job.id,
    name: job.name === '그 외' ? '기타' : job.name,
    color: color,
  };
};

export const jobNameKoreanToJobNameEnglish = (
  job: CommonDTO.JobInfoName,
): JobType.JobNameEnglish => {
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
