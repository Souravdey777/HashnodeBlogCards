import getLatestHashnodeBlog from "../../utils/datafetcher/getUserData";
import blogCard from "../../utils/blogCard";

export default async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  try {
    if (!req.query.username || !req.query.sequence) {
      res.write(JSON.stringify({ error: "Query parameters are missing!" }));
      res.end();
      return;
    } else if (req.query.sequence < 1) {
      res.write(JSON.stringify({ error: "Please enter a valid sequence!" }));
      res.end();
      return;
    }
    const large = req.query.large === "true" ? true : false;
    const theme = req.query.theme;
    const { username, sequence } = req.query;
    var sequenceBy6 = sequence % 6;
    sequenceBy6 = sequenceBy6 === 0 ? 6 : sequenceBy6;
    const page = parseInt((sequence - 1) / 6);
    const resultData = await getLatestHashnodeBlog(username, page);
    if (!resultData.data.user.publication.posts[sequenceBy6 - 1]) {
      res.write(JSON.stringify({ error: "Post does not exits!" }));
      res.end();
      return;
    }
    const blogCardObj = await blogCard(
      resultData.data.user.publication.posts[sequenceBy6 - 1],
      resultData.data.user.publicationDomain,
      large,
      theme
    );
    res.writeHead(200, { "Content-Type": "image/svg+xml" });
    res.write(blogCardObj);
    res.end();
  } catch (error) {
    console.log(error);
    res.send("Error while fetching the data" + error);
  }
};
