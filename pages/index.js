// import Image from 'next/image';
import Lottie from "react-lottie";
import * as blogger from '../assets/blogger.json';
import * as coomingsoon from '../assets/flying.json';
import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import PlayGround from "../components/playGround";

export default function Home() {

  const [Endpoint, setEndpoint] = useState(0);

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
      <nav className={styles.navHeader}>
        <img src="/brand-full.png" className={styles.navlogo} />
        {' '}
        <div>Blog Cards</div>
      </nav>
      <div className={styles.appIntro}>
        <div className={styles.appIntroText}>
          <img src="/hashnode-logo.png" className={styles.logo} />
          <div className={styles.title}>
            Welcome to hashnode <span className={styles.code}>Blog Cards</span>
          </div>
          <p className={styles.description}>
            Are you a blogger in {' '}
            <a href="https://hashnode.com/"><span className={[styles.code]}>Hashnode</span></a>?
            <br />
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
          <div className={styles.apiPlayGroundHeader}>🍻 APIs Playground</div>
          <div onClick={() => setEndpoint(0)} className={Endpoint === 0 ? styles.apibuttonActive : styles.apibutton}> &rarr; getHashnodeBlog</div>
          <div onClick={() => setEndpoint(1)} className={Endpoint === 1 ? styles.apibuttonActive : styles.apibutton}> &rarr; getHashnodeBlogBySequence</div>
          <div onClick={() => setEndpoint(2)} className={Endpoint === 2 ? styles.apibuttonActive : styles.apibutton}> &rarr; getLatestHashnodeBlog</div>
        </div>
        <div style={{ width: "100%" }}>
          <PlayGround Endpoint={Endpoint} />
        </div>
      </div>
      <div className={styles.subHeading}>🌞 Light Theme</div>
      <div className={styles.appCards}>
        <div className={styles.appCardsDiv}>
          <div className={styles.appCardsText1}>🌞 Light Theme</div>
          <p className={styles.subHeading}>Checkout the light theme of Blog Cards. Set the theme param as <span className={styles.greyBg}>light</span> in th GET Request</p>
          <img src="https://hashnode-blog-cards.vercel.app/api/getHashnodeBlog?url=https://townhall.hashnode.com/announcing-hashnode-hackathon-powered-by-vercel&theme=light&large=true" />
        </div>
        <div className={styles.appCardsDiv}>
          <div className={styles.appCardsText2}>🌚 Dark Theme</div>
          <p className={styles.subHeading}>Checkout the light theme of Blog Cards. Set the theme param as <span className={styles.greyBg}>dark</span> in th GET Request</p>
          <img src="https://hashnode-blog-cards.vercel.app/api/getHashnodeBlog?url=https://townhall.hashnode.com/announcing-hashnode-hackathon-powered-by-vercel&theme=dark&large=true" />
        </div>
        <div className={styles.appCardsDiv}>
          <div className={styles.appCardsText3}>🚀 Blue Theme</div>
          <p className={styles.subHeading}>Checkout the light theme of Blog Cards. Set the theme param as <span className={styles.greyBg}>blue</span> in th GET Request</p>
          <img src="https://hashnode-blog-cards.vercel.app/api/getHashnodeBlog?url=https://townhall.hashnode.com/announcing-hashnode-hackathon-powered-by-vercel&theme=blue&large=true" />
        </div>
      </div>
      <div className={styles.appCardsCommingSoon}>
        <div className={styles.appIntroText}>
          <p className={styles.description}>
            More Such themes
          </p>
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
    </main>
  )
}
