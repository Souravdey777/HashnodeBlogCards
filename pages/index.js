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
      <div>
        <div className={styles.appIntro}>
          <div className={styles.appIntroText}>
            <img
              src="/hashnode-logo.png"
              alt="hashonde logo"
              className={styles.logo}
            />
            <div className={styles.title}>
              Welcome to hashnode{" "}
              <span className={styles.code}>Blog Cards</span>
            </div>
            <p className={styles.description}>
              Are you a blogger in{" "}
              <a href="https://hashnode.com/" target="_blank" rel="noreferrer">
                <span className={[styles.code]}>Hashnode</span>
              </a>
              ?
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
            <a
              href="https://www.producthunt.com/posts/hashnode-blog-cards?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-hashnode-blog-cards"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=283707&theme=light"
                alt="Hashnode Blog Cards - Replace your Hashnode Blog links with Blogs Cards. | Product Hunt"
              />
            </a>
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

        <div className={styles.appDescription}>
          <p>
            <p className={styles.title}>
              <span role="img" aria-label="hand">
                👋
              </span>{" "}
              Hi Bloggers,
            </p>
            <p className={styles.description}>
              The <span className={styles.whiteBg}>Hashnode Blog Cards</span> is
              a set of GET requests which will fetch the Blogs from your
              Hashnode ids with few parameters and will create SVG cards to
              bring{" "}
              <span role="img" aria-label="glasses">
                😎
              </span>{" "}
              awesomeness to your blog links.{" "}
              <span role="img" aria-label="glasses">
                🎉
              </span>
            </p>
            <p className={styles.description}>
              This is the{" "}
              <span className={styles.whiteBg}>
                <span role="img" aria-label="glasses">
                  🍻
                </span>{" "}
                API playground
              </span>{" "}
              website to explore the Endpoints. Try it out, put it anywhere in
              .md files, or any markdown editor. It can also be added to any
              website with HTML.
            </p>
            <p className={styles.title}>What is Hashnode?</p>
            <p className={styles.description}>
              <span className={styles.whiteBg}>Hashnode</span> is a free
              developer blogging platform that allows developers to publish
              articles on their own domain and helps them stay connected with a
              global developer community. This gives them a huge advantage:
              Google and other search engines send traffic directly to the
              authors&apos; domain, and Hashnode community members discover
              articles on their feed.
            </p>
            <p className={styles.description}>
              Hashnode Blog Cards website and APIs completely Open Source.
              <br />
              Show your love with{" "}
              <span role="img" aria-label="glasses">
                ⭐
              </span>
              <div style={{ paddingTop: "20px" }}>
                <a
                  href="https://github.com/Souravdey777/HashnodeBlogCards"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className={styles.githubLink}
                    title="Hashnode Blog Cards"
                    alt="Hashnode Blog Cards"
                    src="https://img.shields.io/badge/Click%20here%20for%20Source%20Code-2962ff?style=flat-square&logo=github&logoColor=fff&label=Github&labelColor=333"
                  />
                </a>
              </div>
            </p>
          </p>
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
