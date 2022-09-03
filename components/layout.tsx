import Head from 'next/head';
import Nav from './nav'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Welcome to the NUS Museum Search Engine!"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css" />
      </Head>
      <Nav></Nav>
      <main>{children}</main>
    </>
  );
}
