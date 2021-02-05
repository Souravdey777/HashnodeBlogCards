import Lottie from "react-lottie";
import * as blogger from "../assets/blogger.json";
import * as coomingsoon from "../assets/flying.json";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import PlayGround from "../components/playGround";

export default function Home() {
  const [Endpoint, setEndpoint] = useState(0);

  const bloggerdefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: blogger.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const coomingsoondefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coomingsoon.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <main className={styles.main}>
      <nav className={styles.navHeader}>
        <img
          src="/brand-full.png"
          alt="hashonde logo"
          className={styles.navlogo}
        />{" "}
        <div>Blog Cards</div>
      </nav>
      <div className={styles.appIntro}>
        <div className={styles.appIntroText}>
          <img
            src="/hashnode-logo.png"
            alt="hashonde logo"
            className={styles.logo}
          />
          <div className={styles.title}>
            Welcome to hashnode <span className={styles.code}>Blog Cards</span>
          </div>
          <p className={styles.description}>
            Are you a blogger in{" "}
            <a href="https://hashnode.com/">
              <span className={[styles.code]}>Hashnode</span>
            </a>
            ?
            <br />
            <br />
            Reference Link 🔗 of Blogs are not enough, Give your blogs what it
            deserves with{" "}
            <span className={styles.code}>
              Blog Cards{" "}
              <span role="img" aria-label="fire">
                🔥
              </span>
            </span>
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
          <div className={styles.apiPlayGroundHeader}>
            <span role="img" aria-label="cheers">
              🍻
            </span>{" "}
            APIs Playground
          </div>
          <button
            onClick={() => setEndpoint(0)}
            className={
              Endpoint === 0 ? styles.apibuttonActive : styles.apibutton
            }
          >
            &rarr; getHashnodeBlog
          </button>
          <button
            onClick={() => setEndpoint(1)}
            className={
              Endpoint === 1 ? styles.apibuttonActive : styles.apibutton
            }
          >
            &rarr; getHashnodeBlogBySequence
          </button>
          <button
            onClick={() => setEndpoint(2)}
            className={
              Endpoint === 2 ? styles.apibuttonActive : styles.apibutton
            }
          >
            &rarr; getLatestHashnodeBlog
          </button>
        </div>
        <div style={{ width: "100%" }}>
          <PlayGround Endpoint={Endpoint} />
        </div>
      </div>
      <div className={styles.appCards}>
        <div className={styles.appCardsDiv}>
          <div className={styles.appCardsText1}>
            <span role="img" aria-label="sun">
              🌞
            </span>{" "}
            Light Theme
          </div>
          <p className={styles.subHeading}>
            Checkout the light theme of Blog Cards. Set the theme param as{" "}
            <span className={styles.greyBg}>light</span> in th GET Request
          </p>
          <img
            alt="light theme sample"
            src="https://hashnode-blog-cards.vercel.app/api/getHashnodeBlog?url=https://townhall.hashnode.com/announcing-hashnode-hackathon-powered-by-vercel&theme=light&large=true"
          />
        </div>
        <div className={styles.appCardsDiv}>
          <div className={styles.appCardsText2}>
            <span role="img" aria-label="sun">
              🌚
            </span>{" "}
            Dark Theme
          </div>
          <p className={styles.subHeading}>
            Checkout the light theme of Blog Cards. Set the theme param as{" "}
            <span className={styles.greyBg}>dark</span> in th GET Request
          </p>
          <img
            alt="dark theme sample"
            src="https://hashnode-blog-cards.vercel.app/api/getHashnodeBlog?url=https://townhall.hashnode.com/announcing-hashnode-hackathon-powered-by-vercel&theme=dark&large=true"
          />
        </div>
        <div className={styles.appCardsDiv}>
          <div className={styles.appCardsText3}>
            <span role="img" aria-label="rocket">
              🚀
            </span>{" "}
            Blue Theme
          </div>
          <p className={styles.subHeading}>
            Checkout the light theme of Blog Cards. Set the theme param as{" "}
            <span className={styles.greyBg}>blue</span> in th GET Request
          </p>
          <img
            alt="blue theme sample"
            src="https://hashnode-blog-cards.vercel.app/api/getHashnodeBlog?url=https://townhall.hashnode.com/announcing-hashnode-hackathon-powered-by-vercel&theme=blue&large=true"
          />
        </div>
      </div>
      <div className={styles.appCardsCommingSoon}>
        <div className={styles.appIntroText}>
          <p className={styles.description}>More Such themes</p>
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
  );
}
