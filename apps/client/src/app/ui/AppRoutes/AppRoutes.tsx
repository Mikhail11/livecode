import { HomePage } from '@pages/Home';
import { RoomPage } from '@pages/Room';
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
