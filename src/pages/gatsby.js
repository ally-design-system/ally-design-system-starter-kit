import React from "react"

import LayoutMain from "../components/layouts/layout-main"
import SEO from "../components/seo"
import ImageGatsbyLogos from "../components/images/graphql-react-webpack"

const Gatsby = () => (
    <>
        <LayoutMain>
            <SEO title="Gatsby" />
            <h1>Gatsby (React + Webpack + GraphQL)</h1>
            <p>Now go build something great.</p>
            <div className="gatsby__image">
                <ImageGatsbyLogos />
            </div>
        </LayoutMain>
    </>
)

export default Gatsby
