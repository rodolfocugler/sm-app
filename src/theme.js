'use client';
import {Roboto} from 'next/font/google';
import {createTheme} from '@mui/material/styles';

const roboto = Roboto({
  weight: [ '300', '400', '500', '700' ],
  subsets: [ 'latin' ],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#002565', 900: '#002565', 700: '#0c3f87', 600: '#1a4893', 500: '#21509c',
      400: '#4969a9', 300: '#6b83b7'
    },
    secondary: {
      main: '#ffffff', 900: '#3c3c3c', 700: '#818181', 600: '#979797', 500: '#c2c2c2',
      400: '#dedede', 300: '#f0f0f0'
    },
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