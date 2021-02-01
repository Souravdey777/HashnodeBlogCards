import React from 'react';
import GetHashnodeBlog from './apiPlayGround/getHashnodeBlog';
import GetHashnodeBlogBySequence from './apiPlayGround/getHashnodeBlogBySequence';
import GetLatestHashnodeBlog from './apiPlayGround/getLatestHashnodeBlog';

function PlayGround(props) {
    if (props.Endpoint === 0) {
        return <GetHashnodeBlog />
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