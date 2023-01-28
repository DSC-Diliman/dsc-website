import Head from "next/head"
import Script from "next/script"

import "../styles/globals.scss"
import "../styles/calendar.scss"

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page)

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
			<Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      { getLayout(<Component {...pageProps}></Component>) }
    </>
  )
}