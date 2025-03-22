import { BrowserRouter, Routes, Route } from 'react-router';
import { HomePage } from '@pages/home';
import { RoomPage } from '@pages/room';

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
