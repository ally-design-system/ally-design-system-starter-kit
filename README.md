<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Starter SASS + BEM + Markdown
</h1>

An opinionated Gatsby starter boilerplate including SASS setup with the BEM naming convention for styling plus the main Gatsby configuration files needed to get up and running with content sourced from markdown files.

_Have another more specific idea? Check out the vibrant collection of [official and community-created Gatsby starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Make sure you have the Gatsby CLI installed.**

    If you don't already have the Gatsby CLI installed, install it using npm.

    ```shell
    # install Gatsby CLI globally on your machine
    npm install -g gatsby-cli
    ```

2.  **Create a Gatsby site using this starter.**

    Use the Gatsby CLI to create a new site, specifying this starter.

    ```shell
    # create a new Gatsby site using this starter
    gatsby new new-gatsby-site https://github.com/nikkipantony/gatsby-starter-sass-bem-md
    ```

3.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd new-gatsby-site/
    gatsby develop
    ```

4.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000` or in Chrome at `http://127.0.0.1:8000`

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `new-gatsby-site` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in this Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`** This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`** This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`** This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`** This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`** This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`** This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`** This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`** This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`** Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`** A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`** A text file containing useful reference information about your project.

## 🧐 Inside Source Directory

A quick look at the files and directories in the src directory where your site files will live.

    .
    └── src
      ├── components
      | |
      | ├── images
      | | └── image-example.js
      | |
      | ├── layouts
      | | └── layout-example.js
      | |
      | ├── header.js
      | ├── footer.js
      | ├── component-example.js
      | └── seo.js
      |
      ├── icon
      | └── favicon.png
      |
      ├── images
      | └── image-example.png
      |
      ├── pages
      | ├── 404.js
      | ├── index.js
      | └── page-example.js
      |
      └── styles
        ├── components
        | ├── _component-example.scss
        | ├── _header.scss
        | └── _footer.scss
        |
        ├── layouts
        | └── _layout-example.scss
        |
        ├── pages
        | ├── _page-404.scss
        | ├── _page-index.scss
        | └── _page-example.scss
        |
        ├── _variables.scss
        ├── _globale.scss
        └── main.scss

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

-   **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

**`Deploy to Netlify`**

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/nikkipantony/gatsby-starter-sass-bem-md)

**`Deploy to Vercel (formerly ZEIT Now)`**

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/import/project?template=https://github.com/nikkipantony/gatsby-starter-sass-bem-md)
