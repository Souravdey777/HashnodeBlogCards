import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Hashnode Blog Cards</title>
      <link rel="icon" href="/brand-icon.png" />
      <script async defer data-domain="hashnode-blog-cards.souravdey777.vercel.app" src="https://plausible.io/js/plausible.js"></script>
    </Head>
    <Component {...pageProps} />
    {/* <footer className="footer">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
      </a>
    </footer> */}
  </>
}

export default MyApp
