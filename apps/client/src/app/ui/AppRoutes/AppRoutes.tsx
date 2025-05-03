import { ERoutes } from '@constants';
import { HomePage } from '@pages/HomePage';
import { NotFoundPage } from '@pages/NotFoundPage';
import { RoomPage } from '@pages/RoomPage';
import { BrowserRouter, Routes, Route } from 'react-router';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ERoutes.Main} element={<HomePage />} />
        <Route path={ERoutes.Room} element={<RoomPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
