import { theme } from '../../styles/theme';
import { Job, JobWithColor } from './job.type';

export const job2JobWithColor = (job: Job): JobWithColor => {
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
    name: job.name,
    color: color,
  };
};
