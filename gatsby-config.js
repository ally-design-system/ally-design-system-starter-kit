module.exports = {
    siteMetadata: {
        title: `Gatsby Starter SASS + BEM + Markdown`,
        description: `Gatsby starter including SASS setup with the BEM naming convention for styling plus the main Gatsby configuration files needed to get up and running.`,
        author: `@nikkipantony`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/src/content`, // Contains '/images' and '/markdown'
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-sass-bem-md`,
                short_name: `starter-sass-bem-md`,
                start_url: `/`,
                background_color: `#542c85`,
                theme_color: `#542c85`,
                display: `minimal-ui`, // https://developer.mozilla.org/en-US/docs/Web/Manifest/display
                icon: `src/icon/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
