import Head from "next/head"
import "../styles/globals.scss"
import "../styles/calendar.scss"

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page)

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        {/* <link
          rel="preload"
          href="/fonts/GoogleSans/GoogleSans-Regular.woff"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/GoogleSans/GoogleSans-Medium.woff"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/GoogleSans/GoogleSans-Bold.woff"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/GoogleSans/GoogleSans-Italic.woff"
          as="font"
          crossOrigin="anonymous"
        /> */}
      </Head>
      {getLayout(<Component {...pageProps}></Component>)}
    </>
  )
}