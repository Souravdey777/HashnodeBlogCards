import getHashnodeBlog from "../../utils/datafetcher/getBlogData";
import blogCard from "../../utils/blogCard";

export default async (req, res) => {
    try {
        if (!req.query.url) {
            res.write(JSON.stringify({ error: "URL parameters are missing!" }));
            res.end();
            return;
        }
        var { hostname, pathname } = new URL(req.query.url);
        const slug = pathname.replace("/", "");
        const large = req.query.large === "true" ? true : false;
        const theme = req.query.theme
        const resultData = await getHashnodeBlog(slug, hostname);
        if (!resultData.data.post) {
            res.write(JSON.stringify({ error: "Post does not exits!" }));
            res.end();
            return;
        }
        const blogCardObj = await blogCard(
            resultData.data.post,
            hostname,
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
