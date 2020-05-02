/*
 * Home Page
 *
 * Gatsby useStaticQuery Hook: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import MainSiteLayout from "../components/layouts/main-site-layout"
import SEO from "../components/seo"
import GatsbyLogoImage from "../components/images/gatsby-logo"
import Icon from "../components/images/graphql-react-webpack"

const HomePage = () => {
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
            <MainSiteLayout>
                <SEO title="Gatsby Starter SASS + BEM + Markdown" />
                <section className="default-page-layout__grid">
                    <div className="default-page-layout__single-column">
                        <h1>Welcome to the {data.site.siteMetadata.title}</h1>
                        <p>
                            An opinionated Gatsby starter boilerplate including
                            SASS setup with the BEM naming convention for
                            styling plus the main Gatsby configuration files
                            needed to get up and running with content sourced
                            from markdown files.
                        </p>
                    </div>
                    <div className="default-page-layout__single-column">
                        <div className="default-page-layout__feature-image">
                            <GatsbyLogoImage />
                        </div>
                    </div>
                    <div className="default-page-layout__double-column">
                        <div className="default-page-layout__icon">
                            <Icon />
                        </div>
                        <div className="default-page-layout__icon">
                            <Icon />
                        </div>
                        <div className="default-page-layout__icon">
                            <Icon />
                        </div>
                    </div>
                </section>
            </MainSiteLayout>
        </>
    )
}

export default HomePage
