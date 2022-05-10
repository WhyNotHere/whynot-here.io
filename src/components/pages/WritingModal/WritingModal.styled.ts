import styled from '@emotion/styled';
import { CameraOutlined } from '@ant-design/icons';

import BaseButton from '../../Button';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 3.125rem 3.125rem 3.4375rem;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1.875rem 0;
`;

export const FilterTitle = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  margin-right: 1.875rem;
`;

export const Button = styled(BaseButton)`
  width: 8rem;
`;

export const TitleInput = styled.input`
  height: 4.6875rem;
  font-size: 1.25rem;

  ::placeholder {
    color: ${({ theme }) => theme.color.placeholder};
  }
`;

export const Divider = styled.div`
  height: 1.875rem;

  border-top: 0.0625rem solid ${({ theme }) => theme.color.divider};
`;

export const TextArea = styled.textarea`
  height: 9.375rem;
  font-size: 1rem;
  resize: none;

  ::placeholder {
    color: ${({ theme }) => theme.color.placeholder};
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  min-height: 4.125rem;
  padding: 0 1.5rem;

  background-color: ${({ theme }) => theme.color.divider};
`;

export const ImageIcon = styled(CameraOutlined)`
  font-size: 1.25rem;
`;
