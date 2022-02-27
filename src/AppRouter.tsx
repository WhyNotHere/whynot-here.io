import { Route, Routes } from 'react-router-dom';

import PageTemplate from './PageTemplate/PageTemplate';
import MainPage from './MainPage';
import DetailPage from './DetailPage';

// TODO: path constants에 정리
const AppRouter = () => (
  <Routes>
    <Route element={<PageTemplate />}>
      <Route path="/" element={<MainPage />} />
      <Route path="/posts/:id" element={<DetailPage />} />
    </Route>
  </Routes>
);

export default AppRouter;
