/*
 * SASS + BEM Page
 */

import React from "react"

import MainLayout from "../components/layouts/main-layout"
import SEO from "../components/seo"
import ImageGatsbyAstronaut from "../components/images/gatsby-astronaut"

const SassBem = () => (
    <>
        <MainLayout>
            <SEO title="SASS + BEM" />
            <h1>SASS + BEM</h1>
            <p>Now go build something great.</p>
            <div className="sass-bem-page__image">
                <ImageGatsbyAstronaut />
            </div>
        </MainLayout>
    </>
)

export default SassBem
