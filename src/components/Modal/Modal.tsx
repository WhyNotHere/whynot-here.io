import { ReactNode } from 'react';

import * as Styled from './Modal.styled';

type ModalProps = {
  children: ReactNode;
  title?: string;
  submitTitle?: string;
  onHide: () => void;
  onSubmit?: (event: React.SyntheticEvent) => Promise<void>;
};

const Modal = (props: ModalProps) => {
  const { children, title, submitTitle, onHide, onSubmit } = props;

  return (
    <Styled.Background>
      <Styled.Container onSubmit={onSubmit}>
        <Styled.Header>
          <Styled.HeaderButtonContainer>
            <Styled.CloseIcon onClick={onHide} />
          </Styled.HeaderButtonContainer>
          <Styled.Title>{title}</Styled.Title>
          <Styled.HeaderSubmitButton>{submitTitle}</Styled.HeaderSubmitButton>
        </Styled.Header>
        {children}
      </Styled.Container>
    </Styled.Background>
  );
};

export default Modal;
