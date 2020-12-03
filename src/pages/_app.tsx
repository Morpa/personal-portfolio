import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { NextSeo } from 'next-seo'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import { Router } from 'next/router'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})

Router.events.on('routeChangeError', () => {
  NProgress.done()
})

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Morpa</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="My personal portfolio" />
      </Head>
      <NextSeo
        title="Morpa"
        description="My personal portfolio"
        canonical="https://morpa.vercel.app/"
        openGraph={{
          url: 'https://morpa.vercel.app/',
          title: 'Morpa',
          description: 'My personal portfolio',
          images: [
            {
              url:
                'https://res.cloudinary.com/morpa/image/upload/v1606985396/MyFiles/Morpa_qrqyfj.png'
            }
          ],
          site_name: 'Morpa',
          locale: 'pt_BR'
        }}
        twitter={{
          handle: '@MorpaDre',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
