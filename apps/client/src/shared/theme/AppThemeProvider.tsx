import { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from './appTheme.ts';

interface IAppThemeProviderProps {
  children: ReactNode;
}

const AppThemeProvider = ({ children }: IAppThemeProviderProps): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
