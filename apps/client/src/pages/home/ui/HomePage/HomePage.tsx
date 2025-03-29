import { useEffect } from 'react';

export const HomePage = () => {
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}/api/user`)
      .then((response) => response.json())
      .then(console.log)
      .catch(console.error);
  }, []);

  return <div></div>;
};
