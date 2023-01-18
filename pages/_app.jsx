import Head from "next/head"
import "../styles/globals.scss"
import "../styles/calendar.scss"

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page)

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      {getLayout(<Component {...pageProps}></Component>)}
    </>
  )
}