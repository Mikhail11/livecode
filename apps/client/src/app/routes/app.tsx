import { BrowserRouter, Routes, Route } from 'react-router';
import { HomePage, RoomPage } from '@pages';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/room" element={<RoomPage />} />
      </Routes>
    </BrowserRouter>
  );
};
