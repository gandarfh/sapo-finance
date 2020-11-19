import App, { AppProps } from 'next/app'
import Head from 'next/head'
import { Router } from 'next/router'
import { ThemeProvider } from 'styled-components'
import { AppContextType } from 'next/dist/next-server/lib/utils'

import GlobalStyle from '#styles/global'
import theme from '#styles/theme-styled'
import I18Next from '#i18next'
import { Navbar } from '#components/navbar'
import { AuthProvider } from '#auth/auth'
import { ProtectRoute } from '#context/protect-routes.context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sapo Finance</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="Sapo Finance" />
        <meta name="apple-mobile-web-app-title" content="Sapo Finance" />
        <meta
          name="description"
          content="Encontre sua maneira de gerenciar suas próprias finanças"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/icon-192x192.png"
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
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AuthProvider>
          <ProtectRoute>
            {Component.displayName !== 'Login' &&
            Component.displayName !== 'Register' ? (
              <>
                <Navbar />
                <Component {...pageProps} />
              </>
            ) : (
              <Component {...pageProps} />
            )}
          </ProtectRoute>
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

MyApp.getInitialProps = async (appContext: AppContextType<Router>) => {
  const appProps = await App.getInitialProps(appContext)

  return {
    pageProps: {
      namespacesRequired: [...(appProps.pageProps.namespacesRequired || [])],
    },
  }
}

export default I18Next.appWithTranslation(MyApp)
