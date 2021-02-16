import React from "react";
import "../styles/globals.css";
import Head from "next/head";
import propTypes from "prop-types";

function HashnodeBlogCard({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hashnode Blog Cards</title>
        <link rel="icon" href="/hashnode-logo.png" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossOrigin="anonymous"
        />
        {/* Buy me a Coffee */}
        <script
          data-name="BMC-Widget"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="Souravdey777"
          data-description="Support me on Buy me a coffee!"
          data-message=""
          data-color="#2962ff"
          data-position="Right"
          data-x_margin="16"
          data-y_margin="16"
        ></script>
        <script
          async
          defer
          data-domain="hashnode-blog-cards.souravdey777.vercel.app"
          src="https://plausible.io/js/plausible.js"
        ></script>
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
      </Head>
      <Component {...pageProps} />
      <footer className="footer">
        <div className="footer_upper">
          <div className="footer_upper_col_1">
            <div>
              <img
                src="/brand-full-white.png"
                alt="hashnode logo"
                className="navlogo"
              />
              <div
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  color: "#232326",
                }}
              >
                Blog Cards
              </div>
            </div>
            <div>
              This website has no official affiliation with{" "}
              <a href="https://hashnode.com/" target="_blank" rel="noreferrer">
                <span className="link">hashnode.com</span>
              </a>
            </div>
          </div>
          <div className="footer_upper_col">
            <p
              style={{
                margin: "0.5rem 0rem",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              Important Links
            </p>
            <div>
              <a
                href="https://github.com/Souravdey777/HashnodeBlogCards/discussions/"
                target="_blank"
                rel="noreferrer"
              >
                <span role="img" aria-label="fire">
                  ⚡️
                </span>{" "}
                Ask for a feature
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Souravdey777/HashnodeBlogCards/discussions/"
                target="_blank"
                rel="noreferrer"
              >
                <span role="img" aria-label="fire">
                  🎨
                </span>{" "}
                Ask for a theme
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Souravdey777/HashnodeBlogCards/issues/new"
                target="_blank"
                rel="noreferrer"
              >
                <span role="img" aria-label="fire">
                  🚑
                </span>{" "}
                Report an Issue
              </a>
            </div>

            <div>
              <a
                href="https://github.com/Souravdey777/HashnodeBlogCards/blob/main/LICENSE"
                target="_blank"
                rel="noreferrer"
              >
                <span role="img" aria-label="fire">
                  📄
                </span>{" "}
                MIT Licence
              </a>
            </div>
          </div>
          {/* <div className="footer_upper_col">
            <div>Newsletter</div>
            <div>
              <a href="" target="_blank" rel="noreferrer">
                Feedback Form
              </a>
            </div>
          </div> */}
        </div>
        <div className="footer_lower">
          <div>
            <div>© {new Date().getFullYear()} hashnode Blog Cards</div>
            {/* <div>Support the project with a Star in Github</div> */}
          </div>
          <div>
            Developed with{" "}
            <span role="img" aria-label="fire">
              ❤️
            </span>{" "}
            by{" "}
            <a
              href="https://github.com/Souravdey777/"
              target="_blank"
              rel="noopener noreferrer"
              className="developer"
            >
              @Souravdey777
            </a>
            <br />
            <div className="social_icons">
              <a
                href="https://github.com/Souravdey777/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/souravdey777/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com/Souravdey777/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://souravdey777.hashnode.dev/"
                target="_blank"
                rel="noreferrer"
              >
                <span
                  className="iconify logosvg"
                  data-icon="simple-icons:hashnode"
                  data-inline="false"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

HashnodeBlogCard.propTypes = {
  Component: propTypes.func,
  pageProps: propTypes.object,
};

export default HashnodeBlogCard;
