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
    <>
      <Head>
        <title>Sapo FInance</title>
        <link rel="manifest" href="/manifest.json" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="application-name" content="Housi Invest" />
        <meta name="apple-mobile-web-app-title" content="Housi Invest" />
        <meta name="theme-color" content="#fa3c6e" />
        <meta
          name="description"
          content="Gerencie seus investimentos com a Housi e tenha todas as informações em suas mãos."
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/logo192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/logo192.png"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <SidebarProvider>
          <GlobalStyles />
          <SidebarComponent />
          <Component {...pageProps} />
        </SidebarProvider>
      </ThemeProvider>
    </>
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
