// TODO: 응답 데이터 타입 지정
// TODO: id 타입 지정
// TODO: 파일 분리

import axios from 'axios';

import type { PostWritingAsyncType } from './request.type';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true,
});

/* Account */

export const getLoginStateAsync = async () => {
  const { data } = await axiosInstance.get('/v1/account/login-state');

  return data;
};

export const getAccountInfoAsync = async () => {
  const { data } = await axiosInstance.get('/v1/account/info');

  return data;
};

export const postSignupAsync = async (nickname: string, email: string, password: string) => {
  const { data } = await axiosInstance.post('/v1/sign-up', { nickname, email, password });

  return data;
};

export const postCheckingNicknameAsync = async (nickname: string) => {
  const { data } = await axiosInstance.post('/v1/check-nickname-duplicate', { nickname });

  return data;
};

export const postCheckingEmailAsync = async (email: string) => {
  const { data } = await axiosInstance.post('/v1/check-email-duplicate', { email });

  return data;
};

export const getCheckingAuthenticationCodeAsync = async (token: string, email: string) => {
  const { data } = await axiosInstance.get(`/v1/check-email-token?token=${token}&email=${email}`);

  return data;
};

/* Post */

export const getPostAsync = async (id: string | undefined) => {
  const { data } = await axiosInstance.get(`/v1/posts/${id}`);

  return data;
};

export const deletePostAsync = async (id: number) => {
  const { data } = await axiosInstance.delete(`/v1/posts/${id}`);

  return data;
};

export const postWritingAsync = async ({
  title,
  content,
  postImg,
  jobIds,
}: PostWritingAsyncType) => {
  const { data } = await axiosInstance.post('/v1/posts', {
    title,
    content,
    postImg,
    jobIds: jobIds,
  });

  return data;
};

/* Login */

export const postLoginAsync = async (email: string, password: string) => {
  const form = new FormData();
  form.append('email', email);
  form.append('password', password);

  const { data } = await axiosInstance.post('/v1/login', form);

  return data;
};

export const postLogoutAsync = () => {
  axiosInstance.post('/v1/logout');
};
