import { Route, Routes } from 'react-router-dom';

import PageTemplate from './PageTemplate/PageTemplate';
import MainPage from './MainPage';

const AppRouter = () => (
  <Routes>
    <Route element={<PageTemplate />}>
      <Route path="/" element={<MainPage />} />
    </Route>
  </Routes>
);

export default AppRouter;
