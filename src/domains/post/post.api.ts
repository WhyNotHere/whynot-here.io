import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions, QueryKey } from 'react-query';

import { axiosInstance } from '../../apis/request';

import * as DTO from './post.dto';
import * as Type from './post.type';
import { d2TMapper_getPostsResponse_Post } from './post.mapper';

const getPosts = async (): Promise<Array<Type.Post>> => {
  const res = await axiosInstance.get('/v1/posts');

  const data = res.data as DTO.GetPostsResponse;
  const info = d2TMapper_getPostsResponse_Post(data) as Array<Type.Post>;

  return info;
};

export const useGetPosts = <T = Array<Type.Post>>(
  options?: UseQueryOptions<Array<Type.Post>, AxiosError, T>,
) => {
  return useQuery('getPosts' as QueryKey, getPosts, options);
};
