import React from "react"

import LayoutMain from "../components/layouts/layout-main"
import SEO from "../components/seo"
import ImageGatsbyLogos from "../components/images/graphql-react-webpack"

const ThirdPage = () => (
    <>
        <LayoutMain>
            <SEO title="Third Page" />
            <h1>This is the Third Page</h1>
            <p>Now go build something great.</p>
            <div className="page-third__image">
                <ImageGatsbyLogos />
            </div>
        </LayoutMain>
    </>
)

export default ThirdPage
