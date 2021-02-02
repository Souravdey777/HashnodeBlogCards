import React, { useState } from 'react';
import styles from "../../styles/PlayGround.module.css";
import { THEMES } from '../../utils/Constants';

function GetHashnodeBlog() {
    const [API_URL, setAPI_URL] = useState()
    const [params, setparams] = useState({
        blogURL: "",
        large: "true",
        theme: THEMES[0]
    })
    const getData = () => {
        console.log("SEND clicked")
        setAPI_URL(`https://hashnode-blog-cards.souravdey777.vercel.app/api/getHashnodeBlog?url=${params.blogURL}&large=${params.large}&theme=${params.theme}`)
        console.log(API_URL)
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
    return (
        <div className={styles.PlayGround}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <input
                    className={styles.textBox}
                    placeholder="Enter the URL..."
                    type="text" value={params.blogURL} onChange={handleblogURL} />
                <div className={styles.commonParams}>
                    <div>
                        <div className={styles.labels}>Choose Size</div>
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
                        <div className={styles.labels}>Choose Theme</div>
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
            </div>
            <div className={styles.responseHolder}>
                <object data={API_URL}
                    type="text/html"></object>
            </div>
        </div>

    );
}

export default GetHashnodeBlog;