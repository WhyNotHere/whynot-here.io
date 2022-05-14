import { AxiosError } from 'axios';
import { MutationKey, useMutation, UseMutationOptions } from 'react-query';

import { axiosInstance } from '../../apis/request';

import type * as Action from './sign-in.action';
import type * as DTO from './sign-in.dto';

const signInWithEmailNickname = async ({
  email,
  password,
}: Action.SignInWithEmailNicknameCommand): Promise<DTO.SignInWithEmailNicknameResponse> => {
  const form = new FormData();
  form.append('email', email);
  form.append('password', password);

  const res = await axiosInstance.post('/v1/login', form);

  const data = res.data as DTO.SignInWithEmailNicknameResponse;

  return data;
};

const signOut = async (): Promise<DTO.SignOutResponse> => {
  const res = await axiosInstance.post('/v1/logout');

  const data = res.data as DTO.SignOutResponse;

  return data;
};

export const useSignInWithEmailNickname = (
  options?: UseMutationOptions<
    DTO.SignInWithEmailNicknameResponse,
    AxiosError,
    Action.SignInWithEmailNicknameCommand
  >,
) => {
  return useMutation(
    'signInWithEmailNickname' as MutationKey,
    ({ email, password }) => signInWithEmailNickname({ email, password }),
    options,
  );
};

export const useSignOut = (options?: UseMutationOptions<DTO.SignOutResponse, AxiosError, void>) => {
  return useMutation('signOut' as MutationKey, () => signOut(), options);
};
