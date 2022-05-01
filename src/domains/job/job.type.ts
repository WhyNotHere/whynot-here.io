export type Job = {
  id: number;
  name: '개발자' | '디자이너' | '기획자' | '그 외';
};

export type JobWithColor = Job & {
  color: string;
};
