export type AccountInfo = {
  id: number;
  email: string;
  nickname: string;
  profileImg: string;
};

// TODO: 업앨 수 있는지 확인
export type JobInfoName = '개발자' | '디자이너' | '기획자' | '그 외';

export type JobInfo = {
  id: number;
  name: JobInfoName;
};

export type ResponseDTO = {
  statusCode: number;
  message: string;
};
