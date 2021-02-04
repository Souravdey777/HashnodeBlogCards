import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Hashnode Blog Cards</title>
      <link rel="icon" href="/hashnode-logo.png" />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <script async defer data-domain="hashnode-blog-cards.souravdey777.vercel.app" src="https://plausible.io/js/plausible.js"></script>
    </Head>
    <Component {...pageProps} />
    <footer className="footer">
      <div className="footer_upper">
        <div>
          <img src="/brand-full-white.png" className="navlogo" />
          {' '}
          <div style={{ fontSize: "1.2rem", fontWeight: "700", color: "#232326" }}>Blog Cards</div>
        </div>
        <div className="">Sourav Dey</div>
        <div>Newsletter</div>
        <div>Feedback</div>
      </div>
      <div className="footer_lower">
        <div>
          © {(new Date).getFullYear()} hashnode Blog Cards
        </div>
        <div>
          Developed by <a href="https://github.com/Souravdey777/" target="_blank" rel="noopener noreferrer">Sourav Dey</a>
        </div>
      </div>
    </footer>
  </>
}

export default MyApp
