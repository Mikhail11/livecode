import { AppThemeProvider } from '@shared/theme';

import { AppRoutes } from '../AppRoutes';

import './App.css';

export function App() {
  return (
    <AppThemeProvider>
      <AppRoutes />
    </AppThemeProvider>
  );
}
