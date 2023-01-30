import Head from "next/head";
import Nav from "./nav";
import Footer from "./footer";

interface Props {
  children: JSX.Element;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Website for the Google Developer Student Clubs - UP Diliman chapter."
        />
        <meta
          name="keywords"
          content="Google Developer Student Clubs, GDSC, UP Diliman"
        />
        <meta name="author" content="GDSC UP Diliman" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Nav />
      <main className="flex flex-col flex-nowrap min-h-screen">
        {children}
        <Footer />
      </main>
    </>
  );
}
