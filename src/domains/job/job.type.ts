export type JobNameEnglish = 'developer' | 'designer' | 'planner' | 'etc';

export type Job = {
  id: number;
  name: '개발자' | '디자이너' | '기획자' | '기타';
};

export type JobWithColor = Job & {
  color: string;
};
