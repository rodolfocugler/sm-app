import * as React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";

export default function RootLayout(props) {
  return (
    <html lang="pt-BR">
    <head>
      <meta name="viewport" content="initial-scale=1, width=device-width"/>
      <title>SM Assessoria em Radioproteção</title>
      <link rel="icon" href="/favicon.ico"/>
    </head>
    <body>
    <AppRouterCacheProvider options={{enableCssLayer: true}}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline/>
        {props.children}
      </ThemeProvider>
    </AppRouterCacheProvider>
    </body>
    </html>
  );
}