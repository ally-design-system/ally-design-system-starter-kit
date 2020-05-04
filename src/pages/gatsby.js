/*
 * Gatsby Page
 */

import React from "react"

import MainSiteLayout from "../components/layouts/main-site-layout"
import SEO from "../components/seo"
import GatsbyLogoImage from "../components/images/Gatsby-Logo"
import ReactIconImage from "../components/images/React-icon"
import GraphQLIconImage from "../components/images/GraphQL-icon"
import WebpackIconImage from "../components/images/Webpack-icon"

const GatsbyPage = () => (
    <>
        <MainSiteLayout>
            <SEO title="Learn about Gatsby" />
            <section className="default-page-layout__grid">
                <div className="default-page-layout__column">
                    <h1>Learn About Gatsby</h1>
                    <p>
                        Gatsby is a free and open source framework based on
                        React that helps developers build blazing fast websites
                        and apps.
                    </p>
                    <p>
                        It offers the power of modern web technologies without
                        the headaches like React.js, Webpack, modern JavaScript
                        and CSS as well as GraphQL to pull in data from
                        anywhere.
                    </p>
                    <p>
                        Find out more by visiting:{" "}
                        <a
                            href="https://www.gatsbyjs.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            gatsbyjs.org
                        </a>
                    </p>
                </div>
                <div className="default-page-layout__column">
                    <div className="default-page-layout__feature-image">
                        <GatsbyLogoImage />
                    </div>
                    <div className="default-page-layout__icons default-page-layout__icons--three-icons">
                        <div className="default-page-layout__icon">
                            <ReactIconImage />
                        </div>
                        <div className="default-page-layout__icon">
                            <GraphQLIconImage />
                        </div>
                        <div className="default-page-layout__icon">
                            <WebpackIconImage />
                        </div>
                    </div>
                </div>
            </section>
        </MainSiteLayout>
    </>
)

export default GatsbyPage
