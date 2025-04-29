import { AppThemeProvider } from '@shared/theme';

import { AppRoutes } from '../AppRoutes';
import { StoreProvider } from '../StoreProvider';

import './App.css';

export function App() {
  return (
    <AppThemeProvider>
      <StoreProvider>
      <AppRoutes />
      </StoreProvider>
    </AppThemeProvider>
  );
}
