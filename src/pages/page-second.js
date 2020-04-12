import React from "react"

import LayoutMain from "../components/layouts/layout-main"
import SEO from "../components/seo"
import ImageGatsbyAstronaut from "../components/images/gatsby-astronaut"

const SecondPage = () => (
    <>
        <LayoutMain>
            <SEO title="Second Page" />
            <h1>This is the Second Page</h1>
            <p>Now go build something great.</p>
            <div className="page-second__image">
                <ImageGatsbyAstronaut />
            </div>
        </LayoutMain>
    </>
)

export default SecondPage
