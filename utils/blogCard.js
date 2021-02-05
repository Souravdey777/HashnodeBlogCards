import { THEMES } from "./Constants";
import getBase64 from "./datafetcher/getBase64";

const blogCard = async (data, hostname, large = false, theme = "light") => {
  const { title, dateAdded, brief, author, slug } = data;
  const coverImage =
    data.coverImage !== "" ? await getBase64(data.coverImage) : "";
  const profileImage = await getBase64(author.photo);
  const blogDate = new Date(Date.parse(dateAdded)).toLocaleString("default", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const blogLink = `https://${hostname}/${slug}`;

  var color = THEMES.find((onetheme) => onetheme.THEME_NAME === theme);
  if (!color) {
    color = THEMES[0];
  }

  return `<svg  ${
    large ? ` width="302" height="522"` : ` width="174" height="300" `
  } viewBox="0 0 302 522" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <a href="${blogLink}" target="_blank">
    <rect x="1" y="1" width="300" height="520" rx="4" fill="${
      color.SVG_fill
    }" stroke="${color.SVG_stroke}" stroke-width="1" />
    <rect id="profileImage" x="16" y="20" width="40" height="40" rx="20" />
    <clipPath id="profileImageClip">
    <use xlink:href="#profileImage"/>
    </clipPath>
    <image x="16" y="20" width="40" height="40" clip-path="url(#profileImageClip)" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/png;base64,${profileImage}"/>
    <text fill="${
      color.author_name
    }"  font-family="Helvetica" font-size="14" letter-spacing="0em" x="71" y="38"><tspan font-weight="bold">${
    author.name
  }</tspan>
    <tspan fill="${
      color.author_username
    }" fill-opacity="0.75"  font-family="Helvetica" font-size="14" ${
    large ? "" : `font-weight="bold"`
  } letter-spacing="0em">@${author.username}</tspan></text>
    <text fill="${
      color.pub_date
    }" fill-opacity="0.75"  font-family="Helvetica" font-size="12" ${
    large ? "" : `font-weight="bold"`
  } letter-spacing="0em"><tspan x="71" y="55">${blogDate}</tspan></text>
    <foreignObject
          x="16" y="80" width="260" height="120">
          <p
            xmlns="http://www.w3.org/1999/xhtml"
            xlink:href="#blogName"
            style="color:${
              color.blog_title
            };font-family:Helvetica;font-size:20px;font-weight:bold;margin:0;padding:0;font-weight=bold"
            letter-spacing="0em"
            >${title}
            </p>
    </foreignObject >
    <text fill="${
      color.blog_name
    }"  font-family="Helvetica" font-size="14" font-weight="bold" letter-spacing="0em"><tspan x="16" y="215">${hostname}</tspan></text>
    <foreignObject
          x="16" y=${
            coverImage !== "" ? `"375"` : `"250"`
          } width="260" height="120">
          <p
            xmlns="http://www.w3.org/1999/xhtml"
            xlink:href="#blogName"
            style="color:${
              color.blog_brief
            };font-family:Helvetica;font-size:14px;margin:0;padding:0;font-weight=bold"
            letter-spacing="0em"
            >${brief}
            </p>
    </foreignObject >
  ${
    coverImage !== ""
      ? `<rect id="coverImage" x="16" y="225" width="260" height="151.2" rx="4"/>
    <clipPath id="coverImageClip">
    <use xlink:href="#coverImage"/>
    </clipPath>
    <image x="16" y="225" width="260" clip-path="url(#coverImageClip)" height="151.2" preserveAspectRatio="xMinYMin" xlink:href="data:image/png;base64,${coverImage}"/>`
      : null
  }
    </a >
    </svg > `;
};

export default blogCard;
