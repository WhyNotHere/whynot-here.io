import { Route, Routes } from 'react-router-dom';

import PageTemplate from './PageTemplate/PageTemplate';
import HomePage from './components/pages/HomePage/HomePage';
import DetailPage from './components/pages/DetailPage/DetailPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import CheckEmailPage from './components/pages/CheckEmailPage/CheckEmailPage';
import CheckAuthenticationCodePage from './components/pages/CheckAuthenticationCodePage/CheckAuthenticationCodePage';
import RegistrationPage from './components/pages/RegistrationPage/RegistrationPage';
import WritingPage from './components/pages/WritingPage/WritingPage';

// TODO: path constants에 정리
// TODO: private 설정
const AppRouter = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup">
      <Route path="check-email" element={<CheckEmailPage />} />
      <Route path="check-authentication-code" element={<CheckAuthenticationCodePage />} />
      <Route path="registration" element={<RegistrationPage />} />
    </Route>
    <Route element={<PageTemplate />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts/:id" element={<DetailPage />} />
      <Route path="writing" element={<WritingPage />} />
    </Route>
  </Routes>
);

export default AppRouter;
