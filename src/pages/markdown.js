/*
 * Markdown Page
 */

import React from "react"

import MainSiteLayout from "../components/layouts/main-site-layout"
import SEO from "../components/seo"
import ImageGatsbyAstronaut from "../components/images/gatsby-astronaut"

const MarkdownPage = () => (
    <>
        <MainSiteLayout>
            <SEO title="Markdown" />
            <h1>Markdown</h1>
            <p>Now go build something great.</p>
            <div className="markdown-page__image">
                <ImageGatsbyAstronaut />
            </div>
        </MainSiteLayout>
    </>
)

export default MarkdownPage
