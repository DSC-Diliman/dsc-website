import Head from 'next/head'
import '../styles/globals.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/GoogleSans/GoogleSans-Regular.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/GoogleSans/GoogleSans-Medium.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/GoogleSans/GoogleSans-Bold.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/GoogleSans/GoogleSans-Italic.woff"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Component {...pageProps} />
    </>
  )

}