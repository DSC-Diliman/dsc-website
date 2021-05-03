import Head from 'next/head'
import Footer from './footer'
import Nav from './nav'

export default function Layout({ children, footerChildren, title }) {
  return (
    <>
      <Head>
        <title>{title ? title + " | DSC UPD" : "DSC UP Diliman"}</title>
      </Head>

      <Nav className="z-10" />

      <main className="flex flex-col flex-nowrap min-h-screen">
        {children}
        <Footer>{footerChildren}</Footer>
      </main>
    </>
  )
}