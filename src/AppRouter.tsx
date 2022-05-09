import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import PageTemplate from './PageTemplate/PageTemplate';
import HomePage from './components/pages/HomePage/HomePage';
import DetailPage from './components/pages/DetailPage/DetailPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import CheckEmailPage from './components/pages/CheckEmailPage/CheckEmailPage';
import CheckAuthenticationCodePage from './components/pages/CheckAuthenticationCodePage/CheckAuthenticationCodePage';
import RegistrationPage from './components/pages/RegistrationPage/RegistrationPage';

// TODO: path constants에 정리
// TODO: private 설정
const AppRouter = () => {
  // TODO: 더 좋은 방식 찾아보기 - 훅으로 빼기
  const [isWritingModalVisible, setWritingModalVisible] = useState(false);
  const [isRevisionModalVisible, setRevisionModalVisible] = useState(false);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup">
        <Route path="check-email" element={<CheckEmailPage />} />
        <Route path="check-authentication-code" element={<CheckAuthenticationCodePage />} />
        <Route path="registration" element={<RegistrationPage />} />
      </Route>
      <Route
        element={
          <PageTemplate
            isWritingModalVisible={isWritingModalVisible}
            isRevisionModalVisible={isRevisionModalVisible}
            setWritingModalVisible={setWritingModalVisible}
            setRevisionModalVisible={setRevisionModalVisible}
          />
        }
      >
        <Route path="/" element={<HomePage modalChanged={isWritingModalVisible} />} />
        <Route
          path="/posts/:id"
          element={<DetailPage setRevisionModalVisible={setRevisionModalVisible} />}
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
