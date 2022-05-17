export type AccountInfo = {
  id: number;
  email: string;
  nickname: string;
  profileImg: string;
};

export type JobInfo = {
  id: number;
  name: '개발자' | '디자이너' | '기획자' | '그 외';
};

export type ResponseDTO = {
  statusCode: number;
  message: string;
};

export type ErrorResponseDTO = {
  statusCode: number;
  message: string;
  errors: null;
};
