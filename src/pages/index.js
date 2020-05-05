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
            <SEO title="Gatsby Starter Sass + BEM + Markdown" />
            <section className="default-page-layout__grid">
                <div className="default-page-layout__column">
                    <h1>
                        Welcome to the Gatsby Starter for building Gatsby Sites
                        using Sass + BEM + Markdown
                    </h1>
                    <p>
                        This is an opinionated{" "}
                        <a
                            href="https://www.gatsbyjs.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Gatsby
                        </a>{" "}
                        starter boilerplate including{" "}
                        <a
                            href="https://sass-lang.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Sass
                        </a>{" "}
                        setup with the{" "}
                        <a
                            href="http://getbem.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            BEM Naming Convention
                        </a>{" "}
                        for styling plus the main Gatsby configuration files
                        needed to get up and running with content sourced from{" "}
                        <a
                            href="https://www.markdownguide.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Markdown
                        </a>{" "}
                        files.
                    </p>

                    <p>
                        It also includes{" "}
                        <a
                            href="https://www.gatsbyjs.org/packages/gatsby-image/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Gatsby Image
                        </a>{" "}
                        for advanced image loading and optimization plus{" "}
                        <a
                            href="https://prettier.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Prettier
                        </a>{" "}
                        for code formatting.
                    </p>
                    <p>
                        For improved search engine optimization it is also setup
                        with a{" "}
                        <a
                            href="https://www.gatsbyjs.org/docs/add-seo-component/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            SEO Component
                        </a>{" "}
                        and is fully responsive including a burger menu for
                        navigation on smaller devices.
                    </p>
                    <p>
                        This starter has also been built with web accessibility
                        in mind and includes a skip link as standard.
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
                    {/* @Todo: 
                    - Add content to all pages.
                    - Add Markdown
                    - Add Skip Link 
                    - Add Mobile Menu 
                    */}
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
            </section>
        </MainSiteLayout>
    </>
)

export default HomePage
