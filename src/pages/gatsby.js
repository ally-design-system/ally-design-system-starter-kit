/*
 * Gatsby Page
 */

import React from "react"
import SEO from "../07_utilities/seo"
import MainSiteLayout from "../04_templates/main-layout-template"
import GatsbyLogoImage from "../01_atoms/images/Gatsby-Logo"
import ReactIconImage from "../01_atoms/images/React-icon"
import GraphQLIconImage from "../01_atoms/images/GraphQL-icon"
import WebpackIconImage from "../01_atoms/images/Webpack-icon"

const GatsbyPage = () => (
    <>
        <MainSiteLayout>
            <SEO title="Learn about Gatsby" />
            <section className="default-page-layout__grid">
                <div className="default-page-layout__column">
                    <h1>Learn About Gatsby</h1>
                    <p>
                        Gatsby is a free and open source framework based on{" "}
                        <a
                            href="https://reactjs.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            React
                        </a>{" "}
                        that helps developers build blazing fast websites and
                        apps.
                    </p>
                    <p>
                        It offers the power of modern web technologies without
                        the headaches like React.js,{" "}
                        <a
                            href="https://webpack.js.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Webpack
                        </a>
                        , modern JavaScript and CSS as well as{" "}
                        <a
                            href="https://graphql.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GraphQL
                        </a>{" "}
                        to pull in data from anywhere.
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
