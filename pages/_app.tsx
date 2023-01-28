import Head from "next/head";
import Script from "next/script";
import Layout from "../components/layout-default";

import { AppProps } from "next/app";

import "../styles/globals.scss";
import "../styles/calendar.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
