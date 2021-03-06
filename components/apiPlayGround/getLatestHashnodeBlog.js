import React from "react";
import styles from "../../styles/PlayGround.module.css";
import { THEMES } from "../../utils/Constants";
import * as loader from "../../assets/loader.json";
import Lottie from "react-lottie";
import propTypes from "prop-types";

function GetLatestHashnodeBlog(props) {
  const loaderdefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const {
    API_URL,
    setAPI_URL,
    params,
    setparams,
    isLoading,
    setisLoading,
  } = props;
  const getData = () => {
    console.log(API_URL);
    if (
      `https://hashnode-blog-cards.souravdey777.vercel.app/api/getLatestHashnodeBlog?username=${params.username}&limit=${params.limit}&large=${params.large}&theme=${params.theme}` !==
      API_URL
    ) {
      setisLoading(true);
      console.log("SEND clicked");
      setAPI_URL(
        `https://hashnode-blog-cards.souravdey777.vercel.app/api/getLatestHashnodeBlog?username=${params.username}&limit=${params.limit}&large=${params.large}&theme=${params.theme}`
      );
      console.log(API_URL);
    }
  };
  const handleusername = (event) => {
    setparams({ ...params, username: event.target.value });
    console.log({ ...params, username: event.target.value });
  };
  const handlelimit = (event) => {
    setparams({ ...params, limit: event.target.value });
    console.log({ ...params, limit: event.target.value });
  };
  const handlelarge = (event) => {
    setparams({ ...params, large: event.target.value });
  };
  const handletheme = (event) => {
    setparams({ ...params, theme: event.target.value });
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(API_URL);
  };
  return (
    <div className={styles.PlayGround}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className={styles.commonParams}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className={styles.labels}>Username</div>
            <input
              className={styles.textBox}
              placeholder="Enter the hashnode Blog Username..."
              type="text"
              value={params.username}
              onChange={handleusername}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className={styles.labels}>No of Blogs</div>
            <input
              className={styles.textBox}
              placeholder="Enter the limit..."
              type="number"
              min="1"
              value={params.limit}
              onChange={handlelimit}
            />
          </div>
        </div>
        <div className={styles.commonParams}>
          <div>
            <div className={styles.labels}>Size</div>
            <select
              className={styles.textBox}
              value={params.large}
              onChange={handlelarge}
              placeholder="large size"
            >
              <option value="true">large</option>
              <option value="false">small</option>
            </select>
          </div>
          <div>
            <div className={styles.labels}>Theme</div>
            <select
              className={styles.textBox}
              value={params.theme}
              onChange={handletheme}
              placeholder=""
            >
              .
              {THEMES.map((onetheme, key) => (
                <option key={key} value={onetheme.THEME_NAME}>
                  {onetheme.THEME_NAME}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div
          role="button"
          tabIndex={0}
          className={styles.sendRequest}
          onKeyDown={() => getData()}
          onClick={() => getData()}
        >
          Send{" "}
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </div>
        <div className={styles.labels}>
          Request URL
          <span role="img" aria-label="downpointer">
            👇
          </span>
        </div>
        <div className={styles.API_URL}>
          {
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => getData()}
              onClick={() => copyToClipboard()}
              className={styles.copyIcon}
            >
              <i style={{ fontSize: "16px" }} className="material-icons">
                content_copy
              </i>
              <span className={styles.tooltiptext}>Copy</span>
            </div>
          }
          {API_URL === "" ? "GET Request" : API_URL}
        </div>
      </div>
      <div className={styles.labels}>
        Response Body{" "}
        <span role="img" aria-label="downpointer">
          👇
        </span>
      </div>
      <div className={styles.responseHolder}>
        <object
          data={API_URL}
          style={{
            position: "absolute",
          }}
          onLoad={() => {
            setisLoading(false);
          }}
          type="text/html"
        >
          Response
        </object>
        {isLoading ? (
          <div className={styles.responseHolderLoader}>
            <Lottie
              options={loaderdefaultOptions}
              height={250}
              width={250}
              isStopped={false}
              isPaused={false}
              isClickToPauseDisabled={true}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

GetLatestHashnodeBlog.propTypes = {
  API_URL: propTypes.string,
  setAPI_URL: propTypes.func,
  params: propTypes.object,
  setparams: propTypes.func,
  isLoading: propTypes.bool,
  setisLoading: propTypes.func,
};

export default GetLatestHashnodeBlog;
