import React from "react"

import LayoutMain from "../components/layouts/layout-main"
import SEO from "../components/seo"
import ImageGatsbyLogo from "../components/images/gatsby-logo"

const IndexPage = () => (
    <>
        <LayoutMain>
            <SEO title="Home" />
            <h1>Gatsby + SASS + BEM + Markdown</h1>
            <p>
                An opinionated Gatsby starter boilerplate including SASS setup
                with the BEM naming convention for styling plus the main Gatsby
                configuration files needed to get up and running with content
                sourced from markdown files.
            </p>
            <div className="index__image">
                <ImageGatsbyLogo />
            </div>
        </LayoutMain>
    </>
)

export default IndexPage
