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
      <div className="footer_upper">
        <div>hashnode Blog Cards</div>
        <div>Sourav Dey</div>
        <div>Newsletter</div>
        <div>feedback form</div>
      </div>
      <div className="footer_lower">
        <div>
          © 2021 hashnode Blog Cards
        </div>
        {/* <div>
          
        </div> */}
      </div>
    </footer>
  </>
}

export default MyApp
