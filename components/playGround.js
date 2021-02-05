import React, { useState } from "react";
import GetHashnodeBlog from "./apiPlayGround/getHashnodeBlog";
import GetHashnodeBlogBySequence from "./apiPlayGround/getHashnodeBlogBySequence";
import GetLatestHashnodeBlog from "./apiPlayGround/getLatestHashnodeBlog";
import { THEMES } from "../utils/Constants";
import propTypes from "prop-types";

function PlayGround(props) {
  const [isLoading, setisLoading] = useState(false);

  //GetHashnodeBlog states
  const [GetHashnodeBlog_API_URL, set_GetHashnodeBlog_API_URL] = useState("");
  const [GetHashnodeBlog_params, set_GetHashnodeBlog_params] = useState({
    blogURL: "",
    large: "false",
    theme: THEMES[0].THEME_NAME,
  });

  //GetHashnodeBlogBySequence states
  const [
    GetHashnodeBlogBySequence_API_URL,
    set_GetHashnodeBlogBySequence_API_URL,
  ] = useState("");
  const [
    GetHashnodeBlogBySequence_params,
    set_GetHashnodeBlogBySequence_params,
  ] = useState({
    username: "",
    sequence: 1,
    large: "false",
    theme: THEMES[0].THEME_NAME,
  });

  //GetLatestHashnodeBlog states
  const [
    GetLatestHashnodeBlog_API_URL,
    set_GetLatestHashnodeBlog_API_URL,
  ] = useState("");
  const [
    GetLatestHashnodeBlog_params,
    set_GetLatestHashnodeBlog_params,
  ] = useState({
    username: "",
    limit: 3,
    large: "false",
    theme: THEMES[0].THEME_NAME,
  });

  if (props.Endpoint === 0) {
    return (
      <GetHashnodeBlog
        API_URL={GetHashnodeBlog_API_URL}
        setAPI_URL={set_GetHashnodeBlog_API_URL}
        params={GetHashnodeBlog_params}
        setparams={set_GetHashnodeBlog_params}
        isLoading={isLoading}
        setisLoading={setisLoading}
      />
    );
  } else if (props.Endpoint === 1) {
    return (
      <GetHashnodeBlogBySequence
        API_URL={GetHashnodeBlogBySequence_API_URL}
        setAPI_URL={set_GetHashnodeBlogBySequence_API_URL}
        params={GetHashnodeBlogBySequence_params}
        setparams={set_GetHashnodeBlogBySequence_params}
        isLoading={isLoading}
        setisLoading={setisLoading}
      />
    );
  } else if (props.Endpoint === 2) {
    return (
      <GetLatestHashnodeBlog
        API_URL={GetLatestHashnodeBlog_API_URL}
        setAPI_URL={set_GetLatestHashnodeBlog_API_URL}
        params={GetLatestHashnodeBlog_params}
        setparams={set_GetLatestHashnodeBlog_params}
        isLoading={isLoading}
        setisLoading={setisLoading}
      />
    );
  }
  return <div>Wrong API</div>;
}

PlayGround.propTypes = {
  Endpoint: propTypes.number,
};

export default PlayGround;
