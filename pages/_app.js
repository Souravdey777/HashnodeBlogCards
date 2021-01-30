import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Hashnode Blog Cards</title>
      <link rel="icon" href="/brand-icon.png" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
