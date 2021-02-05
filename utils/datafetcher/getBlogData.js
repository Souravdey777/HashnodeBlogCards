import axios from "axios";
import { HASHNODE_API_URL } from "../Constants";

const getHashnodeBlog = async (slug, hostname) => {
  try {
    const result = await axios.post(HASHNODE_API_URL, {
      query: `query{
        post(slug:"${slug}",hostname:"${hostname}") {
          author{
            username
            name
            photo
          }
          title
          coverImage
          dateAdded
          brief
          slug
        }
      }`,
    });
    const filteredResult = result.data;
    return filteredResult;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default getHashnodeBlog;
