import styled from '@emotion/styled';
import { CloseOutlined } from '@ant-design/icons';

import { rgbaWithHex } from '../../styles/color';

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;

  background-color: ${({ theme }) => rgbaWithHex(theme.color.black, 0.8)};
`;

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  width: 46.875rem;
  height: 33.75rem;
  background-color: ${({ theme }) => theme.color.white};
`;

export const HeaderButtonContainer = styled.div`
  width: 3.75rem;
  height: 4.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderSubmitButtonContainer = styled(HeaderButtonContainer)`
  font-size: 1.125rem;
  font-weight: 700;
  cursor: pointer;
  padding-right: 0.625rem;

  color: ${({ theme }) => theme.color.post_info};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4.125rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.divider};
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 700;
`;

export const CloseIcon = styled(CloseOutlined)`
  font-size: 1.125rem;
`;
