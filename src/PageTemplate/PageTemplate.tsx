import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import WritingModal from '../components/pages/WritingModal';

import * as Styled from './PageTemplate.styled';

type PageTemplateProps = {
  isModalVisible: boolean;
  setModalVisible: (isModalVisible: boolean) => void;
};

const PageTemplate = (props: PageTemplateProps) => {
  const { isModalVisible, setModalVisible } = props;

  return (
    <Styled.Container>
      {isModalVisible && <WritingModal onHide={() => setModalVisible(false)} />}
      <Header setModalVisible={setModalVisible} />
      <Styled.SubContainer>
        <Outlet />
      </Styled.SubContainer>
    </Styled.Container>
  );
};

export default PageTemplate;
