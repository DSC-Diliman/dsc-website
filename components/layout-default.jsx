import Head from 'next/head'
import Footer from './footer'
import Nav from './nav'

export default function Layout({ children, footerChildren, title }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | GDSC UPD` : "GDSC UP Diliman"}</title>
      </Head>

      <Nav />

      <main className="flex flex-col flex-nowrap min-h-screen">
        {children}
        <Footer>{footerChildren}</Footer>
      </main>
    </>
  )
}