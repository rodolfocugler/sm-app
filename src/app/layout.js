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
      <meta charSet="UTF-8"/>
      <meta name='description'
            content='Empresa sediada em Sorocaba atuante no ramo de presta&ccedil;&atilde;o de servi&ccedil;os, consultoria e treinamentos em Prote&ccedil;&atilde;o Radiol&oacute;gica.'/>
      <meta name='keywords'
            content='radioprote&ccedil;&atilde;o, radiologia, radioprote&ccedil;&atilde;o industrial, empresa de radioprote&ccedil;&atilde;o, Sorocaba, sm assessoria, cnen prote&ccedil;&atilde;o radiol&oacute;gica'/>
      <link rel='shortcut icon' href='http://smradioprotecao.com.br/'/>
      <link rel='icon' href='http://smradioprotecao.com.br/'/>
      <meta name='google-site-verification' content='UA-98439575-1'/>
      <meta name="googlebot" content="notranslate" />

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