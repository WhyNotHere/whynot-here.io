import type * as CommonDTO from '../common.dto';

type SignInResponseDTO = CommonDTO.ResponseDTO & { errors: null };

export type SignInWithEmailNicknameResponse = CommonDTO.AccountInfo | SignInResponseDTO;

export type SignOutResponse = CommonDTO.ResponseDTO;
