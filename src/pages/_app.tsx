import App, { AppProps } from 'next/app'
import Head from 'next/head'
import { Router, useRouter } from 'next/router'
import { ThemeProvider } from 'styled-components'
import { AppContextType } from 'next/dist/next-server/lib/utils'
import nookies from 'nookies'

import GlobalStyle from '#styles/global'
import theme from '#styles/theme-styled'
import I18Next from '#i18next'
import { Navbar } from '#components/navbar'
import { AuthProvider } from '#auth/auth'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const validToken = () => {
    if (pageProps.isAuth) {
      return
    }
    return router.push('/login')
  }

  useEffect(() => {
    validToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageProps.isAuth])

  return (
    <>
      <Head>
        <title>Sapo Finance</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="application-name" content="Sapo Finance" />
        <meta name="apple-mobile-web-app-title" content="Sapo Finance" />
        <meta name="theme-color" content="#009444" />
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
          {Component.displayName !== 'Login' &&
          Component.displayName !== 'Register' ? (
            <>
              <Navbar />
              <Component {...pageProps} />
            </>
          ) : (
            <Component {...pageProps} />
          )}
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

MyApp.getInitialProps = async (appContext: AppContextType<Router>) => {
  const appProps = await App.getInitialProps(appContext)
  const cookies = nookies.get(appContext.ctx)

  return {
    pageProps: {
      isAuth: !!cookies.token,
      namespacesRequired: [...(appProps.pageProps.namespacesRequired || [])],
    },
  }
}

export default I18Next.appWithTranslation(MyApp)
