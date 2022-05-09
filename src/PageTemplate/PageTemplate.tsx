import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import WritingModal from '../components/pages/WritingModal';
import RevisionModal from '../components/pages/RevisionModal';

import * as Styled from './PageTemplate.styled';

type PageTemplateProps = {
  isWritingModalVisible: boolean;
  isRevisionModalVisible: boolean;
  setWritingModalVisible: (isWritingModalVisible: boolean) => void;
  setRevisionModalVisible: (isRevisionModalVisible: boolean) => void;
};

const PageTemplate = (props: PageTemplateProps) => {
  const {
    isWritingModalVisible,
    isRevisionModalVisible,
    setWritingModalVisible,
    setRevisionModalVisible,
  } = props;

  return (
    <Styled.Container>
      {isWritingModalVisible && <WritingModal onHide={() => setWritingModalVisible(false)} />}
      {isRevisionModalVisible && <RevisionModal onHide={() => setRevisionModalVisible(false)} />}
      <Header setModalVisible={setWritingModalVisible} />
      <Styled.SubContainer>
        <Outlet />
      </Styled.SubContainer>
    </Styled.Container>
  );
};

export default PageTemplate;
