import React from "react"

import LayoutMain from "../components/layouts/layout-main"
import SEO from "../components/seo"
import ImageGatsbyAstronaut from "../components/images/gatsby-astronaut"

const Gatsby = () => (
    <>
        <LayoutMain>
            <SEO title="Gatsby" />
            <h1>Gatsby (React + Webpack + GraphQL)</h1>
            <p>Now go build something great.</p>
            <div className="gatsby__image">
                <ImageGatsbyAstronaut />
            </div>
        </LayoutMain>
    </>
)

export default Gatsby
