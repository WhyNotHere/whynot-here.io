// TODO: 응답 데이터 타입 지정
// TODO: id 타입 지정
// TODO: 파일 분리

import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true,
});

/* Account */

export const getLoginStateAsync = async () => {
  const { data } = await axiosInstance.get('/v1/account/login-state');

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

export const getCheckingAuthenticationCodeAsync = async (token: string, email: string) => {
  const { data } = await axiosInstance.get(`/v1/check-email-token?token=${token}&email=${email}`);

  return data;
};
