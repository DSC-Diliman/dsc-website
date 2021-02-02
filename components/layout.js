import Head from 'next/head'
import styles from '../styles/layout.module.scss'
import Footer from './footer'
import Nav from './nav'

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? title + " | DSC UPD" : "DSC UP Diliman"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Nav />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}