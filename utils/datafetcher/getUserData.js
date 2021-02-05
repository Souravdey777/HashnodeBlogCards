import axios from "axios";
import { HASHNODE_API_URL } from "../Constants";

const getLatestHashnodeBlog = async (username, page = 0) => {
  try {
    const result = await axios.post(HASHNODE_API_URL, {
      query: `query{
            user(username: "${username}") {
                publicationDomain
                publication {
                  posts(page:${page}) {
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
                }
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

export default getLatestHashnodeBlog;
