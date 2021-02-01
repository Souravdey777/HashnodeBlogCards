import React, { useState } from 'react';
import axios from 'axios';

function GetHashnodeBlog(props) {
    // const [Response, setResponse] = useState(<div></div>)
    // const getData = async () => {
    //     console.log("clicked")
    //     return await axios
    //         .get("http://localhost:3000/api/getLatestHashnodeBlog?username=sandeep&limit=5&large=true")
    //         .then(response => {
    //             console.log(response.data)
    //             let blob = new Blob([response.data], { type: 'image/svg+xml' })
    //             let url = URL.createObjectURL(blob);
    //             setResponse(url);
    //         })
    // }
    return (
        <>
            {/* <div onClick={() => getData()}> */}
                GetHashnodeBlog
            {/* </div>
            <img src={Response} /> */}
        </>

    );
}

export default GetHashnodeBlog;