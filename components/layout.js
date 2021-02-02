import Head from 'next/head'
import Footer from './footer'
import Nav from './nav'

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? title + " | DSC UPD" : "DSC UP Diliman"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <div className="flex flex-col flex-nowrap min-h-screen px-10">
        <main className="flex-1 flex flex-col justify-center">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}