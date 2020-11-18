import App, { AppProps, AppContext } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '#styles/global'
import theme from '#styles/theme-styled'
import I18Next from '#i18next'
import { Navbar } from '#components/navbar'

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
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default I18Next.appWithTranslation(MyApp)
