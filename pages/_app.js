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
        <script
          async
          defer
          data-domain="hashnode-blog-cards.souravdey777.vercel.app"
          src="https://plausible.io/js/plausible.js"
        ></script>
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
                hashnode
              </a>
            </div>
          </div>
          <div className="footer_upper_col">
            <div>
              <a
                href="https://github.com/Souravdey777/HashnodeBlogCards/discussions/"
                target="_blank"
                rel="noreferrer"
              >
                Ask for a feature
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Souravdey777/HashnodeBlogCards/discussions/"
                target="_blank"
                rel="noreferrer"
              >
                Ask for a theme
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Souravdey777/HashnodeBlogCards/issues/new"
                target="_blank"
                rel="noreferrer"
              >
                Report an Issue
              </a>
            </div>
          </div>
          <div className="footer_upper_col">
            {/* <div>Newsletter</div> */}
            <div>
              <a href="https://hashnode.com/" target="_blank" rel="noreferrer">
                Feedback
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Souravdey777/HashnodeBlogCards/blob/main/LICENSE"
                target="_blank"
                rel="noreferrer"
              >
                Licence
              </a>
            </div>
          </div>
        </div>
        <div className="footer_lower">
          <div>© {new Date().getFullYear()} hashnode Blog Cards</div>
          <div>
            Developed by{" "}
            <a
              href="https://github.com/Souravdey777/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Souravdey777
            </a>
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
