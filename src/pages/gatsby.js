/*
 * Gatsby Page
 */

import React from "react"

import MainSiteLayout from "../components/layouts/main-site-layout"
import SEO from "../components/seo"
import GatsbyLogoImage from "../components/images/Gatsby-logo"

const GatsbyPage = () => (
    <>
        <MainSiteLayout>
            <SEO title="Learn about Gatsby" />
            <section className="default-page-layout__grid">
                <div className="default-page-layout__single-column">
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
                <div className="default-page-layout__single-column">
                    <div className="default-page-layout__feature-image">
                        <GatsbyLogoImage />
                    </div>
                </div>
                {/* <div className="default-page-layout__double-column">
                    <div className="default-page-layout__icon">
                    </div>
                </div> */}
            </section>
        </MainSiteLayout>
    </>
)

export default GatsbyPage
