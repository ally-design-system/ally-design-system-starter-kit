/*
 * Markdown Page
 */

import React from "react"
import { Link } from "gatsby"

import MainSiteLayout from "../04_templates/main-site-layout"
import SEO from "../07_utilities/seo"
import MarkdownIconImage from "../01_atoms/images/Markdown-icon"

const MarkdownPage = () => (
    <>
        <MainSiteLayout>
            <SEO title="Markdown" />
            <section className="default-page-layout__grid">
                <div className="default-page-layout__column">
                    <h1>Learn about using Markdown as a content source</h1>
                    <p>
                        <a
                            href="https://www.gatsbyjs.org/docs/adding-markdown-pages/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Gatsby Docs Adding Markdown Pages
                        </a>
                    </p>
                    <h2>Markdown Post Examples</h2>
                    <ul>
                        <li>
                            <Link to="/markdown/first-post">
                                First Markdown Post Example
                            </Link>
                        </li>
                        <li>
                            <Link to="/markdown/second-post">
                                Second Markdown Post Example
                            </Link>
                        </li>
                        <li>
                            <Link to="/markdown/third-post">
                                Third Markdown Post Example
                            </Link>
                        </li>
                    </ul>
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
