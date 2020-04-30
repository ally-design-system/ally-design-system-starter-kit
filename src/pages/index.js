import React from "react"

import LayoutMain from "../components/layouts/layout-main"
import SEO from "../components/seo"
import ImageGatsbyLogo from "../components/images/gatsby-logo"

const IndexPage = () => (
    <>
        <LayoutMain>
            <SEO title="Home" />
            <h1>Home page of the Gatsby Starter SASS + BEM</h1>
            <p>
                This Gatsby starter includes SASS setup with the BEM naming
                convention for styling plus the main Gatsby configuration files
                needed to get up and running.
            </p>
            <p>Now go build something great.</p>
            <div className="page-index__image">
                <ImageGatsbyLogo />
            </div>
        </LayoutMain>
    </>
)

export default IndexPage
