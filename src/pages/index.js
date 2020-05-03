/*
 * Home Page
 *
 * Gatsby useStaticQuery Hook: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import MainSiteLayout from "../components/layouts/main-site-layout"
import SEO from "../components/seo"
import GatsbyLogoImage from "../components/images/Gatsby-Logo"
import ReactIconImage from "../components/images/React-icon"
import GraphQLIconImage from "../components/images/GraphQL-icon"
import WebpackIconImage from "../components/images/Webpack-icon"

import SassIconImage from "../components/images/Sass-icon"
import BEMIconImage from "../components/images/BEM-icon"
import MarkdownIconImage from "../components/images/Markdown-icon"

const HomePage = () => (
    <>
        <MainSiteLayout>
            <SEO title="Gatsby Starter SASS + BEM + Markdown" />
            <section className="default-page-layout__grid">
                <div className="default-page-layout__column">
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
                <div className="default-page-layout__column">
                    <div className="default-page-layout__feature-image">
                        <GatsbyLogoImage />
                    </div>
                    <div className="default-page-layout__icons">
                        <div className="default-page-layout__icon">
                            <ReactIconImage />
                        </div>
                        <div className="default-page-layout__icon">
                            <GraphQLIconImage />
                        </div>
                        <div className="default-page-layout__icon">
                            <WebpackIconImage />
                        </div>

                        <div className="default-page-layout__icon">
                            <SassIconImage />
                        </div>
                        <div className="default-page-layout__icon">
                            <BEMIconImage />
                        </div>
                        <div className="default-page-layout__icon">
                            <MarkdownIconImage />
                        </div>
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
