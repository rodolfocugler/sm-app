'use client';
import {Roboto} from 'next/font/google';
import {createTheme} from '@mui/material/styles';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap'
});

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#003E92', 800: '#085ab1', 900: '#003d92', 700: '#0d6bc3', 600: '#137cd5', 500: '#168ae3',
            400: '#3c9ae7', 300: '#5eabea'
        },
        secondary: {
            main: '#ffffff', 900: '#3c3c3c', 700: '#818181', 600: '#979797', 500: '#c2c2c2',
            400: '#dedede', 300: '#f0f0f0',  200: '#f5f5f5',  100: '#fafafa', 50: '#ffffff'
        },
        error: {main: '#cf8f8a'},
        warning: {main: '#cf8f8a'},
        info: {main: '#cf8f8a'},
        success: {main: '#cf8f8a'},
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
        body1: {
            fontSize: 17
        },
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