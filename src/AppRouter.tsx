import { Route, Routes } from 'react-router-dom';

import PageTemplate from './PageTemplate/PageTemplate';
import HomePage from './components/pages/HomePage/HomePage';
import DetailPage from './components/pages/DetailPage/DetailPage';

// TODO: path constants에 정리
const AppRouter = () => (
  <Routes>
    <Route element={<PageTemplate />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts/:id" element={<DetailPage />} />
    </Route>
  </Routes>
);

export default AppRouter;
