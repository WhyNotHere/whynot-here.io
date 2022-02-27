import axios from 'axios';

export const request = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
});

// TODO: 응답 데이터 타입 지정
export const getPostsAsync = async () => {
  const { data } = await request.get('/v1/posts');

  return data;
};
