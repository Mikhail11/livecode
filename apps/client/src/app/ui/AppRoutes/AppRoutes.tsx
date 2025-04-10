import { HomePage } from '@pages/home';
import { RoomPage } from '@pages/room';
import { BrowserRouter, Routes, Route } from 'react-router';

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
