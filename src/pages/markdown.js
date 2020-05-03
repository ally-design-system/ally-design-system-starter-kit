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
                    </p>
                </div>
                <div className="default-page-layout__column">
                    <div className="default-page-layout__icons default-page-layout__icons--one">
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
