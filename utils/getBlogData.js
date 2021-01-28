import axios from 'axios';
// API URL
const hashnodeURL = "https://api.hashnode.com/";

const getHashnodeBlog = async (slug, hostname) => {
  try {
    const result = await axios.post(hashnodeURL, {
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