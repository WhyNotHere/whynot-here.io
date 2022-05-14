import { AxiosError } from 'axios';
import { QueryKey, useQuery, UseQueryOptions } from 'react-query';

import { axiosInstance } from './../../apis/request';

import type * as DTO from './account.dto';
import type * as Type from './account.type';

const getAccountInfo = async (): Promise<DTO.GetAccountInfo> => {
  const res = await axiosInstance.get('v1/account/info');

  // TODO: error handling
  const data = res.data as DTO.GetAccountInfo;

  return data;
};

export const useGetAccountInfo = <T = Type.AccountInfo>(
  options?: UseQueryOptions<Type.AccountInfo, AxiosError, T>,
) => {
  return useQuery('getAccountInfo' as QueryKey, getAccountInfo, options);
};
