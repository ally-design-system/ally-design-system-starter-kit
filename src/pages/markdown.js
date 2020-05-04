/*
 * Markdown Page
 */

import React from "react"

import MainSiteLayout from "../components/layouts/main-site-layout"
import SEO from "../components/seo"
import MarkdownIconImage from "../components/images/Markdown-icon"

const MarkdownPage = () => (
    <>
        <MainSiteLayout>
            <SEO title="Markdown" />
            <section className="default-page-layout__grid">
                <div className="default-page-layout__column">
                    <h1>Learn about using Markdown as a content source</h1>
                    <p>
                        Text{" "}
                        <a
                            href="https://www.link.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Link
                        </a>
                    </p>
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
                    <div className="default-page-layout__icons default-page-layout__icons--one-icon">
                        <div className="default-page-layout__icon">
                            <MarkdownIconImage />
                        </div>
                    </div>
                </div>
            </section>
        </MainSiteLayout>
    </>
)

export default MarkdownPage
