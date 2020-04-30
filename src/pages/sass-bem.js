import React from "react"

import LayoutMain from "../components/layouts/layout-main"
import SEO from "../components/seo"
import ImageGatsbyAstronaut from "../components/images/gatsby-astronaut"

const SassBem = () => (
    <>
        <LayoutMain>
            <SEO title="SASS + BEM" />
            <h1>SASS + BEM</h1>
            <p>Now go build something great.</p>
            <div className="sass-bem__image">
                <ImageGatsbyAstronaut />
            </div>
        </LayoutMain>
    </>
)

export default SassBem
