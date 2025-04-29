import { HomePage } from '@pages/HomePage';
import { RoomPage } from '@pages/RoomPage';
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
