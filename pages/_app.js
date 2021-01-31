import '../styles/globals.css'
import Head from 'next/head';
import styles from '../styles/Home.module.css';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Hashnode Blog Cards</title>
      <link rel="icon" href="/brand-icon.png" />
      <script async defer data-domain="hashnode-blog-cards.souravdey777.vercel.app" src="https://plausible.io/js/plausible.js"></script>
    </Head>
    <Component {...pageProps} />
    <footer className="footer">
      {/* <div className="footer_upper">
        Sourav Dey
      </div> */}
      <div className="footer_lower">
        © 2021 hashnode Blog Cards
      </div>
    </footer>
  </>
}

export default MyApp
