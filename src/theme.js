'use client';
import {Roboto} from 'next/font/google';
import {createTheme} from '@mui/material/styles';
import { blue } from '@mui/material/colors';

const roboto = Roboto({
  weight: [ '300', '400', '500', '700' ],
  subsets: [ 'latin' ],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: blue,
    secondary: {main: '#cf8f8a'},
    error: {main: '#cf8f8a'},
    warning: {main: '#cf8f8a'},
    info: {main: '#cf8f8a'},
    success: {main: '#cf8f8a'},
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        sx: {
          zIndex: -1
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ownerState}) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;