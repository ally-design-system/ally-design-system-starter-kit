/*
 * SASS + BEM Page
 */

import React from "react"

import MainSiteLayout from "../components/layouts/main-site-layout"
import SEO from "../components/seo"
import ImageGatsbyAstronaut from "../components/images/gatsby-astronaut"

const SassBemPage = () => (
    <>
        <MainSiteLayout>
            <SEO title="SASS + BEM" />
            <h1>Learn about using SASS with the BEM naming convention</h1>
            <p>
                There are many different ways to write styling in Gatsby and you
                can read about some of them on the{" "}
                <a
                    href="https://www.gatsbyjs.org/docs/styling/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Gatsby Docs Styling Page
                </a>
                .
            </p>

            <p>
                but for this starter I have choosen to use SASS with the BEM
                naming convention.
            </p>
            <p>
                https://medium.com/@andrew_barnes/bem-and-sass-a-perfect-match-5e48d9bc3894
            </p>
            <div className="sass-bem-page__image">
                <ImageGatsbyAstronaut />
            </div>
        </MainSiteLayout>
    </>
)

export default SassBemPage
