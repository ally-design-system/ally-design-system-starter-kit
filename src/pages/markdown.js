/*
 * Markdown Page
 */

import React from "react"

import MainLayout from "../components/layouts/main-layout"
import SEO from "../components/seo"
import ImageGatsbyAstronaut from "../components/images/gatsby-astronaut"

const Markdown = () => (
    <>
        <MainLayout>
            <SEO title="Markdown" />
            <h1>Markdown</h1>
            <p>Now go build something great.</p>
            <div className="markdown-page__image">
                <ImageGatsbyAstronaut />
            </div>
        </MainLayout>
    </>
)

export default Markdown
