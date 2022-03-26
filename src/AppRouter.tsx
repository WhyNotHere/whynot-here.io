import { Route, Routes } from 'react-router-dom';

import PageTemplate from './PageTemplate/PageTemplate';
import HomePage from './components/pages/HomePage/HomePage';
import DetailPage from './components/pages/DetailPage/DetailPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import CheckEmailPage from './components/pages/CheckEmailPage/CheckEmailPage';

// TODO: path constants에 정리
const AppRouter = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/check-email" element={<CheckEmailPage />} />
    <Route element={<PageTemplate />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts/:id" element={<DetailPage />} />
    </Route>
  </Routes>
);

export default AppRouter;
