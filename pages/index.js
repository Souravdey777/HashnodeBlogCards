// import Image from 'next/image';
import Lottie from "react-lottie";
import * as animationData from '../assets/blogger.json';
import styles from '../styles/Home.module.css';

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
    <main className={styles.main}>
      <div className={styles.appIntro}>
        <div className={styles.appIntroText}>
          <h1 className={styles.title}>
            Welcome to hashnode <span>Blog Cards</span>
          </h1>
          <p className={styles.description}>
            Get started by editing{' '}
            {/* <code className={styles.code}>pages/index.js</code> */}
          </p>
        </div>
        <div>
          <Lottie
            options={defaultOptions}
            height={320}
            width={320}
            isStopped={false}
            isPaused={false}
            isClickToPauseDisabled={true}
          />
        </div>
      </div>

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
  )
}
