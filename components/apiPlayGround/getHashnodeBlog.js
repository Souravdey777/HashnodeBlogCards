import React, { useState } from 'react';
import axios from 'axios';
import styles from "../../styles/PlayGround.module.css"

function GetHashnodeBlog(props) {
    const [Response, setResponse] = useState(null)
    const [BlogURL, setBlogURL] = useState()
    const getData = async () => {
        console.log("clicked")
        return await axios
            .get(`https://hashnode-blog-cards.souravdey777.vercel.app/api/getHashnodeBlog?url=${BlogURL}&large=true`)
            .then(res => {
                console.log(res.data)
                // let blob = new Blob([response.data], { type: 'image/svg+xml' })
                // let url = URL.createObjectURL(blob);
                // setResponse(url);
                // var parse = new DOMParser();
                // var url = parse.parseFromString(res)
                // setResponse(res.data);
                const buff = new Buffer(res.data);
                const base64data = buff.toString('base64');
                console.log(typeof (res.data))
                setResponse(base64data);
            })
    }
    const handleBlogURL = (event) => {
        setBlogURL(event.target.value);
    }
    return (
        <div className={styles.PlayGround}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <input
                    className={styles.textBox}
                    placeholder="Enter the URL..."
                    type="text" value={BlogURL} onChange={(e) => handleBlogURL(e)} />
                {console.log(BlogURL)}
                <div className={styles.sendRequest} onClick={() => getData()}>
                    Send 🚀
                </div>
            </div>
            <div className={styles.responseHolder}>
                {Response ? <img src={`data:image/svg+xml;base64,${Response}`} /> : null}
                {/* <img src={`https://hashnode-blog-cards.souravdey777.vercel.app/api/getLatestHashnodeBlog?username=${BlogURL}&large=true&limit=6`} /> */}
            </div>
        </div>

    );
}

export default GetHashnodeBlog;