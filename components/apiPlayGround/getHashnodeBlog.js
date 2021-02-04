import styles from "../../styles/PlayGround.module.css";
import { THEMES } from '../../utils/Constants';
import * as loader from '../../assets/loader.json';
import Lottie from "react-lottie";

function GetHashnodeBlog(props) {
    const loaderdefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loader.default,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const { API_URL, setAPI_URL, params, setparams, isLoading, setisLoading } = props
    const getData = () => {
        console.log(API_URL)
        if (`https://hashnode-blog-cards.souravdey777.vercel.app/api/getHashnodeBlog?url=${params.blogURL}&large=${params.large}&theme=${params.theme}` !== API_URL) {
            setisLoading(true)
            console.log("SEND clicked");
            setAPI_URL(`https://hashnode-blog-cards.souravdey777.vercel.app/api/getHashnodeBlog?url=${params.blogURL}&large=${params.large}&theme=${params.theme}`);
            console.log(API_URL);
        }
    }
    const handleblogURL = (event) => {
        setparams({ ...params, blogURL: event.target.value });
        console.log({ ...params, blogURL: event.target.value })
    }
    const handlelarge = (event) => {
        setparams({ ...params, large: event.target.value });
    }
    const handletheme = (event) => {
        setparams({ ...params, theme: event.target.value });
    }
    const copyToClipboard = () => {
        navigator.clipboard.writeText(API_URL)
    };
    return (
        <div className={styles.PlayGround}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className={styles.labels}>Blog URL</div>
                    <input
                        className={styles.textBox}
                        placeholder="Enter the Blog URL..."
                        type="text" value={params.blogURL} onChange={handleblogURL} />
                </div>
                <div className={styles.commonParams}>
                    <div>
                        <div className={styles.labels}>Size</div>
                        <select
                            className={styles.textBox}
                            value={params.large}
                            onChange={handlelarge}
                            placeholder="large size">
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
                            placeholder="">.
                            {THEMES.map((onetheme, key) =>
                                <option key={key} value={onetheme.THEME_NAME}>{onetheme.THEME_NAME}</option>
                            )}
                        </select></div>
                </div>
                <div className={styles.sendRequest} onClick={() => getData()}>
                    Send 🚀
                </div>
                <div className={styles.labels}>Request URL 👇</div>
                <div className={styles.API_URL}>
                    {
                        <div onClick={() => copyToClipboard()} className={styles.copyIcon}><i style={{ fontSize: "16px" }} className="material-icons">content_copy</i>
                            <span className={styles.tooltiptext}>Copy</span>
                        </div>
                    }
                    {API_URL === "" ? "GET Request" : API_URL}
                </div>
            </div>
            <div className={styles.labels}>Response Body 👇</div>
            <div className={styles.responseHolder}>
                <object data={API_URL} style={{
                    position: "absolute",
                }} onLoad={() => { setisLoading(false) }}
                    type="text/html"></object>
                {isLoading ?
                    <div className={styles.responseHolderLoader}>
                        <Lottie
                            options={loaderdefaultOptions}
                            height={250}
                            width={250}
                            isStopped={false}
                            isPaused={false}
                            isClickToPauseDisabled={true}
                        />
                    </div> : null}
            </div>
        </div>

    );
}

export default GetHashnodeBlog;