import getLatestHashnodeBlog from "../../utils/datafetcher/getUserData";
import blogCard from "../../utils/blogCard";
import asyncForEach from "../../utils/asyncForEach";

export default async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    try {
        if (!req.query.username) {
            res.write(JSON.stringify({ error: "Query parameters are missing!" }));
            res.end();
            return;
        }
        const { username } = req.query;
        let limit = 3;
        if (req.query.limit) {
            limit = req.query.limit;
            if (limit > 6) {
                res.write(
                    JSON.stringify({ error: "limit parameters is more than 6!" })
                );
                res.end();
            }
        }
        const large = req.query.large === "true" ? true : false;
        const theme = req.query.theme
        const resultData = await getLatestHashnodeBlog(username);
        if (!resultData.data.user.publication.posts.length) {
            res.write(JSON.stringify({ error: "Post does not exits!" }));
            res.end();
            return;
        }
        let result = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${limit * (large ? 304 : 176)
            }" version="1.2" height="${large ? 530 : 310}">`;
        await asyncForEach(
            resultData.data.user.publication.posts,
            async (blog, index) => {
                if (index >= limit) {
                    return;
                }
                const blogCardObj = await blogCard(
                    blog,
                    resultData.data.user.publicationDomain,
                    large,
                    theme
                );
                result += `<svg x="${index * (large ? 304 : 176)
                    }" y="0">${blogCardObj}</svg>`;
            }
        );
        result += `</svg>`;
        res.writeHead(200, { "Content-Type": "image/svg+xml" });
        res.write(result);
        res.end();
    } catch (error) {
        console.log(error);
        res.send("Error while fetching the data" + error);
    }
};
