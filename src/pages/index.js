/*
 * Index Page
 *
 * Gatsby useStaticQuery Hook: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import MainLayout from "../components/layouts/main-layout"
import SEO from "../components/seo"
import ImageGatsbyLogo from "../components/images/gatsby-logo"

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query HomeSiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <MainLayout>
                <SEO title="Gatsby Starter SASS + BEM + Markdown" />
                <h1>Welcome to the {data.site.siteMetadata.title}</h1>
                <p>
                    An opinionated Gatsby starter boilerplate including SASS
                    setup with the BEM naming convention for styling plus the
                    main Gatsby configuration files needed to get up and running
                    with content sourced from markdown files.
                </p>
                <div className="home-page__image">
                    <ImageGatsbyLogo />
                </div>
            </MainLayout>
        </>
    )
}

export default IndexPage
