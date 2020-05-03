/*
 * Home Page
 *
 * Gatsby useStaticQuery Hook: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import MainSiteLayout from "../components/layouts/main-site-layout"
import SEO from "../components/seo"
import GatsbyLogoImage from "../components/images/Gatsby-Logo"

const HomePage = () => (
    <>
        <MainSiteLayout>
            <SEO title="Gatsby Starter SASS + BEM + Markdown" />
            <section className="default-page-layout__grid">
                <div className="default-page-layout__single-column">
                    <h1>
                        Welcome to the Gatsby Starter for building a Gatsby Site
                        using SASS + BEM + Markdown
                    </h1>
                    <p>
                        An opinionated Gatsby starter boilerplate including SASS
                        setup with the BEM naming convention for styling plus
                        the main Gatsby configuration files needed to get up and
                        running with content sourced from markdown files.
                    </p>
                    <p>
                        @Todo: Talk about: A11y, SEO, Responsiveness and
                        Performance.
                    </p>
                    <p>
                        @Todo: Add Skip Link, Add Mobile Menu, Add content to
                        pages, Add logos/icons.
                    </p>
                    <p>
                        The repo for this starter can be found at:{" "}
                        <a
                            href="https://github.com/nikkipantony/gatsby-starter-sass-bem-md"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            github.com/nikkipantony/gatsby-starter-sass-bem-md
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

export default HomePage
