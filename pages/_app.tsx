import Head from 'next/head'
import App, { AppProps, AppContext } from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from '@styles/theme-styled'
import GlobalStyles from '@styles/global'
import { appWithTranslation } from '@i18next'
import SidebarProvider from '@context/sidebar.context'
import { SidebarComponent } from '@components/sidebar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Sapo FInance</title>
        <link rel="manifest" href="/manifest.json" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="application-name" content="Sapo FInance" />
        <meta name="apple-mobile-web-app-title" content="Sapo FInance" />
        <meta name="theme-color" content="#009444" />
        <meta
          name="description"
          content="Encontre sua maneira de gerenciar suas próprias finanças."
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/icon-192x192.png"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <SidebarProvider>
        <GlobalStyles />
        <SidebarComponent />
        <Component {...pageProps} />
      </SidebarProvider>
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)

  return {
    pageProps: {
      namespacesRequired: [...(appProps.pageProps.namespacesRequired || [])],
    },
  }
}

export default appWithTranslation(MyApp)
