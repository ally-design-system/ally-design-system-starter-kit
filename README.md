<img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="80" />

# Ally Starter Kit

**[WIP] This project is still currently a work in progress and the first version has not yet been released.**

## 👋 Introduction

Ally Starter Kit is a Front-End, Design-System-First, Gatsby Starter Kit with a project architecture inspired by Brad Frost's Atomic Design Methodology.

This starter kit aims to create an enjoyable and productive developer experience for Jamstack Design System based projects while still prioritising Web Accessibility (A11y), Best Practices and Performance.

## 💨 Quick Start

1.  **Make sure you have the Gatsby CLI installed.**

    If you don't already have the Gatsby CLI installed, install it using npm.

    ```shell
    npm install -g gatsby-cli
    ```

2.  **Create a Gatsby site using this starter.**

    Use the Gatsby CLI to create a new site, specifying this starter.

    ```shell
    gatsby new new-gatsby-site https://github.com/nikkipantony/ally-starter-kit
    ```

3.  **Install Ally Starter Kit's packages using npm.**

    ```shell
    npm install
    ```

4.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd new-gatsby-site/
    gatsby develop
    ```

5.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000` or in Chrome at `http://127.0.0.1:8000`

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open your `new-gatsby-site` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🗺️ Road Map

The starter kit will include:

-   An extended Atomic Design project architecture using 'Particles' (sub-atomic particles representing design tokens)
-   A Storybook (v5) powered UI Component Library (For UI presentation, testing and documentation)
-   Unit testing with Jest and CircleCI (This may not be included in the first version of the kit)
-   Nested Sass(SCSS) with the Atomic BEM naming convention (an extended version of BEM including an atomic prefix which deals with modifiers more gracefully than the original BEM convention)
-   Markdown files as the content source for pages and posts
-   Pre-built UI components including:
    -   SEO component
    -   Skip-Link component
    -   Header component
    -   Responsive Menu navigation component
    -   Footer component
    -   Default CSS-Grid page template
    -   Possibly being extended with future base components in the future

## 🎓 Learning Gatsby

Looking for more guidance?

You can find loads more information about Gatsby on their website: [gatsbyjs.org](https://www.gatsbyjs.org/). They offer fantastic tutorials at: [gatsbyjs.org/tutorial](https://www.gatsbyjs.org/tutorial) and full, very well written documentation at: [gatsbyjs.org/docs](https://www.gatsbyjs.org/docs).

## 🚀 Deploy

Ready to deploy your project and make it live?

**`Deploy to Netlify`**

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/nikkipantony/gatsby-starter-sass-bem-md)

**`Deploy to Vercel (formerly ZEIT Now)`**

[![Deploy to ZEIT Now](https://zeit.co/button)](https://zeit.co/import/project?template=https://github.com/nikkipantony/gatsby-starter-sass-bem-md)
