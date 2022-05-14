import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import PageTemplate from './PageTemplate/PageTemplate';
import HomePage from './components/pages/HomePage/HomePage';
import DetailPage from './components/pages/DetailPage/DetailPage';
import SignInPage from './components/pages/SignInPage/SignInPage';
import CheckEmailPage from './components/pages/CheckEmailPage/CheckEmailPage';
import CheckAuthenticationCodePage from './components/pages/CheckAuthenticationCodePage/CheckAuthenticationCodePage';
import RegistrationPage from './components/pages/RegistrationPage/RegistrationPage';

import { RoutePath } from './RoutePath';

// TODO: private 설정
const AppRouter = () => {
  // TODO: 더 좋은 방식 찾아보기 - 훅으로 빼기
  const [isWritingModalVisible, setWritingModalVisible] = useState(false);
  const [isRevisionModalVisible, setRevisionModalVisible] = useState(false);

  return (
    <Routes>
      <Route path={RoutePath.SIGN_IN} element={<SignInPage />} />
      <Route path={RoutePath.SIGN_UP}>
        <Route path={RoutePath.CHECK_EMAIL} element={<CheckEmailPage />} />
        <Route
          path={RoutePath.CHECK_AUTHENTICATION_CODE}
          element={<CheckAuthenticationCodePage />}
        />
        <Route path={RoutePath.REGISTRATION} element={<RegistrationPage />} />
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
        <Route path={RoutePath.HOME} element={<HomePage modalChanged={isWritingModalVisible} />} />
        <Route
          path={RoutePath.DETAIL}
          element={<DetailPage setRevisionModalVisible={setRevisionModalVisible} />}
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
