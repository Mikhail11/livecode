import { useEffect } from 'react';
import { AppRoutes } from '@routes/app';

import './App.css';

export function App() {
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}/api/user`)
      .then((response) => response.json())
      .then(console.log)
      .catch(console.error);
  }, []);

  return <AppRoutes />;
}
