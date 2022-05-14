import { AxiosError } from 'axios';
import {
  useQuery,
  UseQueryOptions,
  QueryKey,
  useMutation,
  UseMutationOptions,
  MutationKey,
} from 'react-query';

import { axiosInstance } from '../../apis/request';

import type * as Action from './post.action';
import type * as DTO from './post.dto';
import type * as Type from './post.type';
import * as Mapper from './post.mapper';

const getPostList = async (): Promise<Array<Type.Post>> => {
  const res = await axiosInstance.get('/v1/posts');

  const data = res.data as DTO.GetPostsResponse;
  const info = Mapper.d2TMapper_getPostsResponse_Post(data);

  return info;
};

const getPost = async (postId: Action.GetPostCriteria): Promise<Type.Post> => {
  const res = await axiosInstance.get(`/v1/posts/${postId}`);

  const data = res.data as DTO.GetPostResponse;
  const info = Mapper.d2TMapper_getPostResponse_Post(data);

  return info;
};

const deletePost = async (postId: Action.DeletePostCommand): Promise<DTO.DeletePostResponse> => {
  const res = await axiosInstance.delete(`/v1/posts/${postId}`);

  const data = res.data as DTO.DeletePostResponse;

  return data;
};

export const useGetPostList = <T = Array<Type.Post>>(
  options?: UseQueryOptions<Array<Type.Post>, AxiosError, T>,
) => {
  return useQuery('getPosts' as QueryKey, getPostList, options);
};

export const useGetPost = <T = Type.Post>(
  postId: Action.GetPostCriteria,
  options?: UseQueryOptions<Type.Post, AxiosError, T>,
) => {
  return useQuery(['getPost', postId] as QueryKey, () => getPost(postId), options);
};

export const useDeletePost = (
  option?: UseMutationOptions<DTO.DeletePostResponse, AxiosError, Action.DeletePostCommand>,
) => {
  return useMutation(
    'deletePost' as MutationKey,
    (postId: Action.DeletePostCommand) => deletePost(postId),
    option,
  );
};
