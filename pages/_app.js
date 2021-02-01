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
    <footer className="footer">
      <div className="footer_upper">
        <div>hashnode Blog Cards</div>
        <div>Sourav Dey</div>
        <div>Newsletter</div>
        <div>Feedback</div>
      </div>
      <div className="footer_lower">
        <div>
          Copyright © {(new Date).getFullYear()} hashnode Blog Cards
        </div>
        {/* <div>
          
        </div> */}
      </div>
    </footer>
  </>
}

export default MyApp
