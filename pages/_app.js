import Head from 'next/head'
import '../styles/globals.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/NotoSans/NotoSans-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/NotoSans/NotoSans-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/NotoSans/NotoSans-Italic.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Component {...pageProps} />
    </>
  )

}