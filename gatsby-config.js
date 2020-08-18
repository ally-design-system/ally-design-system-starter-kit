/*
 * Gatsby Configuration
 *
 * Add Gatsby configuration options in this file.
 *
 * Gatsby Configuration: https://www.gatsbyjs.org/docs/gatsby-config
 */

module.exports = {
    siteMetadata: {
        title: `Ally Design System Starter Kit`,
        description: `The Ally Design System Starter Kit. Built with Gatsby (v2) and Storybook (v5) with a custom project architecture inspired by Brad Frost's Atomic Design Methodology.`,
        author: `@nikkipantony`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/07_images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `${__dirname}/src/06_posts`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/05_pages`,
            },
        },
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `ally-starter-kit`,
                short_name: `ally-starter-kit`,
                start_url: `/`,
                background_color: `#542c85`,
                theme_color: `#542c85`,
                display: `minimal-ui`, // https://developer.mozilla.org/en-US/docs/Web/Manifest/display
                icon: `favicon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
