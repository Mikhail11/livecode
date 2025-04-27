import { AppRoutes } from '../AppRoutes';
import { StoreProvider } from '../StoreProvider';

import './App.css';

export function App() {
  return (
    <StoreProvider>
      <AppRoutes />
    </StoreProvider>
  );
}
