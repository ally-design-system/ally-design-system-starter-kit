/**
 * IndexPage component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import LayoutMain from "../components/layouts/layout-main"
import SEO from "../components/seo"
import ImageGatsbyLogo from "../components/images/gatsby-logo"

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <LayoutMain>
                <SEO title="Home" />
                <h1>Welcome to the {data.site.siteMetadata.title}</h1>
                <p>Now go build something great.</p>
                <div className="page-index__image">
                    <ImageGatsbyLogo />
                </div>
            </LayoutMain>
        </>
    )
}

export default IndexPage
