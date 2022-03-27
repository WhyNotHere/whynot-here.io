// TODO: 응답 데이터 타입 지정
// TODO: id 타입 지정
// TODO: 파일 분리

import axios from 'axios';

export const request = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
});

export const getPostsAsync = async () => {
  const { data } = await request.get('/v1/posts');

  return data;
};

export const getPostAsync = async (id: string | undefined) => {
  const { data } = await request.get(`/v1/posts/${id}`);

  return data;
};

export const postCheckingEmailAsync = async (email: string) => {
  const { data } = await request.post('/v1/check-email-duplicate', { email });

  return data;
};

export const getCheckingAuthenticationCodeAsync = async (token: string, email: string) => {
  const { data } = await request.get(`/v1/check-email-token?token=${token}&email=${email}`);

  return data;
};

export const postCheckingNicknameAsync = async (nickname: string) => {
  const { data } = await request.post('/v1/check-nickname-duplicate', { nickname });

  return data;
};

export const postSignupAsync = async (nickname: string, email: string, password: string) => {
  const { data } = await request.post('/v1/sign-up', { nickname, email, password });

  return data;
};
