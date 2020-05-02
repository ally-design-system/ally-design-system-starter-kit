/*
 * Markdown Page
 */

import React from "react"

import MainSiteLayout from "../components/layouts/main-site-layout"
import SEO from "../components/seo"
import GatsbyLogoImage from "../components/images/gatsby-logo"
import Icon from "../components/images/graphql-react-webpack"

const MarkdownPage = () => (
    <>
        <MainSiteLayout>
            <SEO title="Markdown" />
            <section className="default-page-layout__grid">
                <div className="default-page-layout__single-column">
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
                        .
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

export default MarkdownPage
