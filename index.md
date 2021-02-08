<p align="center">
<a  href="https://hashnode-blog-cards.vercel.app/" target="_blank">
<img src="./public/hashnode-logo.png?raw=true" width=100px title="Hashnode Blog Cards" alt="Hashnode Blog Cards"/>
</a>
</p>
<p align="center">
<a  href="https://hashnode-blog-cards.vercel.app/" target="_blank">
<img src="https://img.shields.io/badge/-Hashnode Blog Cards-2962FF?style=flat&logo=hashnode&logoColor=white" height="30px" title="Hashnode Blog Cards" alt="Hashnode Blog Cards"/>
</a>
</p>


# `Hashnode Blog Cards`

Are you a blogger 📝 on **[Hashnode](https://hashnode.com/)**?


Reference Link 🔗 of Blogs are not enough, Give your blogs what it actually deserves with Blog Cards 🔥

⚡ Fetch the Blogs from Hashnode and put it anywhere in .md file, or any markdown editor. It can also be added to any website with HTML syntax.

<p >
<a  href="https://hashnode-blog-cards.vercel.app/" target="_blank">
  <b>Go to Hashnode Blog Cards &rarr;</b>
</a>
</p>

<p align="center">
<a  href="https://hashnode-blog-cards.vercel.app/" target="_blank">
<img src="https://raw.githubusercontent.com/Souravdey777/HashnodeBlogCards/main/public/Hashnode%20Blog%20Cards%20Screenshot.png" width="600px" title="Hashnode Blog Cards" alt="Hashnode Blog Cards"/>
</a>
</p>

### Table of Contents

- [About `Hashnode Blog Cards`](#about-hashnode-blog-cards)
- [About The API Endpoints](#about-the-api-endpoints)
  - [getHashnodeBlog](#gethashnodeblog)
  - [getHashnodeBlogBySequence](#gethashnodeblogbysequence)
  - [getLatestHashnodeBlog](#getlatesthashnodeblog)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Contribution and Support](#contribution-and-support)
- [License](#license)
- [Contact](#contact)
- [Learn More about `nextjs`](#learn-more-about-nextjs)

## About `Hashnode Blog Cards`

##### What is Hashnode?

> **Hashnode** is a free developer blogging platform that allows developers to publish articles on their own domain and helps them stay connected with a global developer community. This gives them a huge advantage: Google and other search engines send traffic directly to the authors' domain, and Hashnode community members discover articles on their feed.

##### What is Hashnode Blog Cards

>⚡ The Hashnode Blog Cards is a set of GET requests which will fetch the Blogs from your Hashnode ids with few parameters and will create SVG cards to bring 😎 awesomeness to your blog links. 🎉

It can be added anywhere in Github, Hashnode, Devpost, Postman Documentation, or any markdown editor. It can also be added to any website with HTML syntax with just the img tag

It is simple to use and the APIs can be explored with the `Hashnode Blog Cards API Playground`.

**Why wait? Straightaway go to the website and join the `Awesomeness`** 😎

[https://hashnode-blog-cards.vercel.app](https://hashnode-blog-cards.vercel.app)

<!--<p align="center">
<a  href="https://flexbox-guide.souravdey777.vercel.app" target="_blank">
  <img src="./public/flexbox-guide.gif" width=1280px title="Flexbox-Guide: A Flexbox Code Generator" alt="Flexbox-Guide"/>
</a>
</p>

<!-- ##### Video Demo-->
## You can also Check my blog on `Hashnode Blog Cards`

[![Blog on Hashnode Blog Cards](https://hashnode-blog-cards.souravdey777.vercel.app/api/getHashnodeBlog?url=https://souravdey777.hashnode.dev/hashnode-blog-cards-reference-link-of-blogs-are-not-enough-give-your-blogs-what-it-deserves-with-blog-cards&large=true&theme=dark)](https://souravdey777.hashnode.dev/hashnode-blog-cards-reference-link-of-blogs-are-not-enough-give-your-blogs-what-it-deserves-with-blog-cards)

## About The API Endpoints 

#### How to use it?

---

#### getHashnodeBlog

This API endpoint will fetch a specific blog by its URL

```
https://hashnode-blog-cards.vercel.app/api/getHashnodeBlog?url=https://souravdey777.hashnode.dev/flexbox-guide-flexbox-layout-made-simple-with-an-interactive-tool&large=true&theme=light
```

Response 

![](https://hashnode-blog-cards.vercel.app/api/getHashnodeBlog?url=https://souravdey777.hashnode.dev/flexbox-guide-flexbox-layout-made-simple-with-an-interactive-tool&large=true&theme=light)

#### List of parameters

- `url`= The URL of the specific blog

This is a mandatory parameter

eg. `https://souravdey777.hashnode.dev/flexbox-guide-flexbox-layout-made-simple-with-an-interactive-tool`

- `theme`= The theme of the Card.

This is not a mandatory parameter and the default value is `light`.
Other values are possible values are `dark` or `blue`

- `large`= The size of the Card.

This is not a mandatory parameter and the default value is `false`. And when set to true gives a larger Card.

---

#### getHashnodeBlogBySequence

This API endpoint will fetch a specific blog by the Hashnode username of the author and the serial no of the blog starting from 1 being the latest.

```
https://hashnode-blog-cards.vercel.app/api/getHashnodeBlogBySequence?username=Souravdey777&sequence=1&large=true&theme=light
```

Response 

![](https://hashnode-blog-cards.vercel.app/api/getHashnodeBlogBySequence?username=Souravdey777&sequence=1&large=true&theme=light)

#### List of parameters

- `username`= The hashnode username of the blogger.

This is a mandatory parameter.

eg. `souravdey777` this is my hashnode username.

- `sequence`= The serial no of the blog starting from 1 being the latest. Because of this parameter, the blogs will be changing when you add them to your website or Github profile whenever you add a new blog.

This is a mandatory parameter.

eg. `souravdey777` this is my hashnode username.

- `theme`= The theme of the Card.

This is not a mandatory parameter and the default value is `light`.
Other values are possible values are `dark` or `blue`

- `large`= The size of the Card.

This is not a mandatory parameter and the default value is `false`. And when set to true gives a larger Card.

---

#### getLatestHashnodeBlog

This API endpoint will fetch a set of the latest blogs by the Hashnode username of the author and the limit up to which the blogs are needed

```
https://hashnode-blog-cards.vercel.app/api/getLatestHashnodeBlog?username=Souravdey777&limit=3&large=true&theme=light
``` 
Response 

![](https://hashnode-blog-cards.vercel.app/api/getLatestHashnodeBlog?username=Souravdey777&limit=3&large=true&theme=light)

#### List of parameters

- `username`= The hashnode username of the blogger.

This is a mandatory parameter.

eg. `souravdey777` this is my hashnode username.

- `limit`= The no of the blog starting from latest to the limit defined or all blog you have if the no of blog you have is less than the limit defined.

It is not a mandatory param and the default value is `3`. The maximum possible value is 6.

eg. `souravdey777` this is my hashnode username.

- `theme`= The theme of the Card.

This is not a mandatory parameter and the default value is `light`.
Other values are possible values are `dark` or `blue`

- `large`= The size of the Card.

This is not a mandatory parameter and the default value is `false`. And when set to true gives a larger Card.

---

Now let's see what are the themes we have, 

`theme=light`,`theme=dark` and `theme=blue`

<p align="center">
<img src="https://hashnode-blog-cards.vercel.app/api/getHashnodeBlog?url=https://souravdey777.hashnode.dev/flexbox-guide-flexbox-layout-made-simple-with-an-interactive-tool&large=true&theme=light"/>
<img src="https://hashnode-blog-cards.vercel.app/api/getHashnodeBlog?url=https://souravdey777.hashnode.dev/flexbox-guide-flexbox-layout-made-simple-with-an-interactive-tool&large=true&theme=dark"/>
<img src="https://hashnode-blog-cards.vercel.app/api/getHashnodeBlog?url=https://souravdey777.hashnode.dev/flexbox-guide-flexbox-layout-made-simple-with-an-interactive-tool&large=true&theme=blue"/>
</p>

---

Now let's see the different size we have

`large=true` and `large=false`

<p align="center">
<img src="https://hashnode-blog-cards.vercel.app/api/getHashnodeBlog?url=https://souravdey777.hashnode.dev/flexbox-guide-flexbox-layout-made-simple-with-an-interactive-tool&large=true&theme=light"/>
<img src="https://hashnode-blog-cards.vercel.app/api/getHashnodeBlog?url=https://souravdey777.hashnode.dev/flexbox-guide-flexbox-layout-made-simple-with-an-interactive-tool&large=false&theme=light"/>
</p>

**For 'img' tag custom size defined with `width` and `height` attributes.**

---

#### Markdown Syntax

```
[![Hashnode Blog Card](https://hashnode-blog-cards.vercel.app/api/API_ENDPOINT?PARAMS)](BLOG_URL)
```

#### HTML

```
<a href="BLOG_URL">
<img src="https://hashnode-blog-cards.vercel.app/api/getHashnodeBlog?url="https://hashnode-blog-cards.vercel.app/api/API_ENDPOINT?PARAMS" alt="Sourav Dey's Hashnode Blog Cards" />
</a>
```

## Features

- Dynamic URL creation
- Dynamic SVG
- Tool to share your Hashnode Blog

## Technologies

- nextjs
- reactjs
- nodejs
- lottie animation

##### Dependencies

```
  "dependencies": {
    "axios": "^0.21.1",
    "next": "10.0.5",
    "prop-types": "^15.7.2",
    "react": "17.0.1",
    "react-dom": "17.0.1",
    "react-lottie": "^1.2.3"
  },
  "devDependencies": {
    "eslint": "^7.19.0",
    "eslint-config-prettier": "^7.2.0",
    "eslint-plugin-jsx-a11y": "^6.4.1",
    "eslint-plugin-prettier": "^3.3.1",
    "eslint-plugin-react": "^7.22.0",
    "eslint-plugin-react-hooks": "^4.2.0",
    "eslint-plugin-simple-import-sort": "^7.0.0",
    "prettier": "^2.2.1"
  }

``` 

## Setup

##### Clone/download the repository on your local machine.

    `git clone https://github.com/Souravdey777/HashnodeBlogCards.git`

##### Install dependencies

    `npm install` or `yarn install`

##### Run `dev` server on your local machine. 🚀

    `npm run dev` or `yarn run dev`
    
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
    
##### Or you can open it using Gitpod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Souravdey777/HashnodeBlogCards)

## Contribution and Support

Loved it!. ⭐ `Star the Repository` and support the project.

Upvote in 🚀 **Product Hunt**.

<a href="https://www.producthunt.com/posts/hashnode-blog-cards?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-hashnode-blog-cards" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=283707&theme=light" alt="Hashnode Blog Cards - ⚡ Give your blogs what it actually deserves with Blog Cards. | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>


- [Ask for a new `feature` or `theme`](https://github.com/Souravdey777/HashnodeBlogCards/discussions/)

- [Open a Pull Request](https://github.com/Souravdey777/HashnodeBlogCards/pulls) 
 
- [Raise an Issue](https://github.com/Souravdey777/HashnodeBlogCards/issues/new)

👨‍🚀 Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

<a href="https://www.buymeacoffee.com/Souravdey777" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="160" >
</a>

## License

📝 Distributed under the `MIT` License. See [LICENSE](https://github.com/Souravdey777/HashnodeBlogCards/blob/main/LICENSE) for more information.

## Contact

[![Portfolio](http://img.shields.io/badge/-Portfolio%20Website-ffffff?style=flat&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8%2F9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEYSURBVDiNxdHNK4RRFMfxzzMzhVJeirKwIZKVyG4WY22nrCwoG%2FkHbGYzO%2FkfLKysZSHFgmxtKCJkNTLEyEtZTGPx3KnpaWSS8q3bOffcc37ndC7%2FTYRldKKCdMJ%2Bxwbm8QJ57GMOV5jFaRD5iXyEHZzjCb24D7bYhEAugwOsNpHciCiNa7wlHiYTE%2FSggHEM4CTEsynxMmAME8GfRg6D4f6Kh%2BDf1HdKBTsaio4xhAscYhH96K4Ty2IF64hqAo%2FoQitmsIV2tKCMEs7QFk4ae6jWBEpYwzAy%2BAh%2BIYzfh6nQoBUj2BSUsjjCe5jkUrzUIj7rdvAs%2Fuo7bIu%2F%2BzYTOtaohIQkVew2iC9EWEJHg8dmKP%2By7g%2F5Ahl%2FO9wcY8OAAAAAAElFTkSuQmCC&logoColor=white)][website]
[![LinkedIn](http://img.shields.io/badge/-LinkedIn-0077B5?style=flat&logo=linkedIn&logoColor=white)][linkedin]
[![Twitter](http://img.shields.io/badge/-Twitter-1DA1F2?style=flat&logo=twitter&logoColor=white)][twitter]
[![Mail](https://img.shields.io/badge/-Gmail-D14836?style=flat&logo=gmail&logoColor=white)][mail]
[![Medium](http://img.shields.io/badge/-Hashnode-2962ff?style=flat&logo=hashnode&logoColor=white)][hashnode]
[![Medium](http://img.shields.io/badge/-Medium-black?style=flat&logo=medium&logoColor=white)][medium]
[![Coder Rank](http://img.shields.io/badge/-Coders%20Rank-67A4AC?style=flat&logo=CodersRank&logoColor=white)][codersrank]
[![Product Hunt](http://img.shields.io/badge/-Product%20Hunt-DA552F?style=flat&logo=Product%20Hunt&logoColor=white)][producthunt]
[![Speaker Deck](http://img.shields.io/badge/-Speaker%20Deck-009287?style=flat&logo=Speaker%20deck&logoColor=white)][speakerdeck]
[![Instagram](http://img.shields.io/badge/-Instagram-E4405F?style=flat&logo=instagram&logoColor=white)][instagram]

[website]: https://souravdey777.github.io/Portfolio/
[mail]:mailto:piyush.kolkata@gmail.com
[twitter]: https://twitter.com/Souravdey777
[codersrank]: https://profile.codersrank.io/user/souravdey777
[youtube]: https://youtube.com/
[instagram]: https://www.instagram.com/souravdey777/
[linkedin]: https://www.linkedin.com/in/sourav-dey/
[hashnode]: https://souravdey777.hashnode.dev/
[medium]: https://medium.com/@Souravdey777
[producthunt]: https://www.producthunt.com/@souravdey777
[speakerdeck]: https://speakerdeck.com/Souravdey777


## Learn More about `Nextjs`

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

##### To learn more about `Next.js`, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

##### To learn about `React`, check out the [React documentation](https://reactjs.org/).

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
