import Image from 'next/image';
import Lottie from "react-lottie";
import * as blogger from '../assets/blogger.json';
import * as coomingsoon from '../assets/flying.json';
import styles from '../styles/Home.module.css';
import React, { useState } from 'react';

export default function Home() {

  const [Endpoint, setEndpoint] = useState("getHashnodeBlog");

  const bloggerdefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: blogger.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const coomingsoondefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coomingsoon.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <main className={styles.main}>
      <nav>
        {/* <div className={styles.logo}> */}
        {/* <img src={logo}
          width={500}
          height={500}
        /> */}
        {/* </div> */}
      </nav>
      <div className={styles.appIntro}>
        <div className={styles.appIntroText}>

          {/* <Image src="/../assets/brand-full.min.svg" width="200" height="100" /> */}

          <img src="/hashnode-logo.png" className={styles.logo} />
          <div className={styles.title}>
            Welcome to hashnode <span>Blog Cards</span>
          </div>
          <p className={styles.description}>
            Blog links 🔗 are not enough, Give your blogs what it deserves with{' '}
            <span className={styles.code}>Blog Cards 🔥</span>
          </p>
        </div>
        <div>
          <Lottie
            options={bloggerdefaultOptions}
            height={320}
            width={320}
            isStopped={false}
            isPaused={false}
            isClickToPauseDisabled={true}
          />
        </div>
      </div>

      <div className={styles.apiPlayGround}>
        <div className={styles.apis}>
          <div onClick={() => setEndpoint("getHashnodeBlog")}>/getHashnodeBlog</div>
          <div onClick={() => setEndpoint("getHashnodeBlogBySequence")}>/getHashnodeBlogBySequence</div>
          <div onClick={() => setEndpoint("getLatestHashnodeBlog")}>/getLatestHashnodeBlog</div>
        </div>
        {/* <div>
          {}
        </div> */}
      </div>
      {/* <p className={styles.subHeading}>A list of the amazing Themes</p> */}
      <div className={styles.appCards}>
        <div className={styles.appCardsDiv}>
          <div className={styles.appCardsText1}>🌞 Light Theme</div>
          <p className={styles.subHeading}>This light theme of Blog Cards </p>
          <img src="https://hashnode-blog-cards.vercel.app/api/getHashnodeBlog?url=https://blog.larsbehrenberg.com/use-javascripts-fetch-api-with-asyncawait-to-fetch-your-instagram-feed-in-react" />
        </div>
        <div className={styles.appCardsDiv}>
          <div className={styles.appCardsText2}>🌙 Dark Theme</div>
          <p className={styles.subHeading}>This light theme of Blog Cards </p>
          <img src="https://hashnode-blog-cards.vercel.app/api/getHashnodeBlog?url=https://blog.larsbehrenberg.com/use-javascripts-fetch-api-with-asyncawait-to-fetch-your-instagram-feed-in-react&dark=true" />
        </div>
        <div className={styles.appCardsDiv}>
          <div className={styles.appCardsText3}>💧 Blue Theme</div>
          <p className={styles.subHeading}>This light theme of Blog Cards </p>
          <img src="https://hashnode-blog-cards.vercel.app/api/getHashnodeBlog?url=https://blog.larsbehrenberg.com/use-javascripts-fetch-api-with-asyncawait-to-fetch-your-instagram-feed-in-react" />
        </div>
      </div>
      <div className={styles.appCardsCommingSoon}>
        <div className={styles.appIntroText}>
          <p className={styles.description}>
            More Such themes          </p>
          <div className={styles.title}>
            <span>Cooming Soon...</span>
          </div>
        </div>
        <div>
          <Lottie
            options={coomingsoondefaultOptions}
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
