// import Image from 'next/image';
import Lottie from "react-lottie";
import * as animationData from '../assets/blogger.json';
import styles from '../styles/Home.module.css';
inport Head from 'next/head'

export default function Home() {

  // const [URL, setURL] = useState("http://localhost:3000/api/getHashnodeBlog");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Hashnode Blog Cards</title>
        <link rel="icon" href="/brand-icon.png" />
      </Head>
      <div>
        <Lottie
          options={defaultOptions}
          height={500}
          width={500}
          isStopped={false}
          isPaused={false}
          isClickToPauseDisabled={true}
        />
      </div>
      <div>

      </div>

      {/* <div className="rounded-3xl transform scale-110 -rotate-6 bg-gradient-to-br from-blue-400 to-indigo-500" style={{ width: "200px", height: "200px" }}>hi</div> */}
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div >
  )
}
