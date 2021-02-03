import React, { useState } from 'react';
import GetHashnodeBlog from './apiPlayGround/getHashnodeBlog';
import GetHashnodeBlogBySequence from './apiPlayGround/getHashnodeBlogBySequence';
import GetLatestHashnodeBlog from './apiPlayGround/getLatestHashnodeBlog';
import { THEMES } from '../utils/Constants';

function PlayGround(props) {
    const [isLoading, setisLoading] = useState(false)

    const [API_URL, setAPI_URL] = useState("")
    const [params, setparams] = useState({
        blogURL: "",
        large: "true",
        theme: THEMES[0].THEME_NAME
    })
    if (props.Endpoint === 0) {
        return <GetHashnodeBlog
            API_URL={API_URL}
            setAPI_URL={setAPI_URL}
            params={params}
            setparams={setparams}
            isLoading={isLoading}
            setisLoading={setisLoading} />
    }
    else if (props.Endpoint === 1) {
        return <GetHashnodeBlogBySequence />
    }
    else if (props.Endpoint === 2) {
        return <GetLatestHashnodeBlog />
    }
    return <div>Wrong API</div>
}

export default PlayGround;