import { AxiosError } from 'axios';
import { MutationKey, useMutation, UseMutationOptions } from 'react-query';

import { axiosInstance } from './../../apis/request';

import type * as Action from './sign-up.action';
import type * as DTO from './sign-up.dto';

const checkEmail = async (email: Action.CheckEmailCommand): Promise<DTO.CheckEmailResponse> => {
  const res = await axiosInstance.post('/v1/check-email-duplicate', email);

  const data = res.data as DTO.CheckEmailResponse;

  return data;
};

export const useCheckEmail = (
  options?: UseMutationOptions<DTO.CheckEmailResponse, AxiosError, Action.CheckEmailCommand>,
) => {
  return useMutation(
    'checkEmail' as MutationKey,
    (email: Action.CheckEmailCommand) => checkEmail(email),
    options,
  );
};
