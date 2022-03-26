import { Route, Routes } from 'react-router-dom';

import PageTemplate from './PageTemplate/PageTemplate';
import HomePage from './components/pages/HomePage/HomePage';
import DetailPage from './components/pages/DetailPage/DetailPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import CheckEmailPage from './components/pages/CheckEmailPage/CheckEmailPage';
import CheckAuthenticationCodePage from './components/pages/CheckAuthenticationCodePage/CheckAuthenticationCodePage';
import RegistrationPage from './components/pages/RegistrationPage/RegistrationPage';

// TODO: path constants에 정리
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
    </Route>
  </Routes>
);

export default AppRouter;
