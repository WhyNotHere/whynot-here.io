import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import type * as SignUpAction from '../../../domains/sign-up/sign-up.action';
import { useCheckEmail } from '../../../domains/sign-up/sign-up.api';

import * as Styled from './CheckEmailPage.styled';

import { RoutePath } from '../../../RoutePath';

const CheckEmailPage = () => {
  const navigate = useNavigate();
  const { mutateAsync: mutateCheckEmail, isLoading, isError } = useCheckEmail();
  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = useForm<SignUpAction.CheckEmailCommand>({
    defaultValues: { email: '' },
  });

  const onSubmit = useCallback(
    async (data: SignUpAction.CheckEmailCommand) => {
      try {
        await mutateCheckEmail(data);
        alert('이메일을 발송했습니다.');

        navigate(`${RoutePath.SIGN_UP}/${RoutePath.CHECK_AUTHENTICATION_CODE}`, {
          state: { tmpEmail: data.email },
        });
      } catch (error) {
        alert('이미 가입한 이메일입니다.');
      }
    },
    [mutateCheckEmail, navigate],
  );

  return (
    <Styled.Container>
      <Styled.SubContainerForm onSubmit={handleSubmit(onSubmit)}>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error</div>
        ) : (
          <>
            <Styled.Title>이메일 중복 확인</Styled.Title>
            <Styled.Input
              type="email"
              placeholder="이메일을 입력해주세요."
              {...register('email')}
            />
            <Styled.CheckingEmailButton disabled={!isDirty}>
              이메일로 인증 코드 받기
            </Styled.CheckingEmailButton>
          </>
        )}
      </Styled.SubContainerForm>
    </Styled.Container>
  );
};

export default CheckEmailPage;
