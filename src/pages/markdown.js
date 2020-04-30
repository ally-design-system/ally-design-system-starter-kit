import React from "react"

import LayoutMain from "../components/layouts/layout-main"
import SEO from "../components/seo"
import ImageGatsbyAstronaut from "../components/images/gatsby-astronaut"

const Markdown = () => (
    <>
        <LayoutMain>
            <SEO title="Markdown" />
            <h1>Markdown</h1>
            <p>Now go build something great.</p>
            <div className="markdown__image">
                <ImageGatsbyAstronaut />
            </div>
        </LayoutMain>
    </>
)

export default Markdown
