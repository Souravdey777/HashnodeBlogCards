import React, { useState } from 'react';
import axios from 'axios';
import styles from "../../styles/PlayGround.module.css"

function GetHashnodeBlog(props) {
    const [Response, setResponse] = useState(null)
    const [BlogURL, setBlogURL] = useState()
    const getData = async () => {
        console.log("clicked")
        return await axios
            .get(`http://localhost:3000/api/getHashnodeBlog?url=${BlogURL}&large=true`)
            .then(response => {
                console.log(response.data)
                let blob = new Blob([response.data], { type: 'image/svg+xml' })
                let url = URL.createObjectURL(blob);
                setResponse(url);
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
            <div>
                {Response ? <img src={Response} /> : null}
            </div>
        </div>

    );
}

export default GetHashnodeBlog;