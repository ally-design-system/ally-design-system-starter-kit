/*
 * SASS + BEM Page
 */

import React from "react"

import MainSiteLayout from "../components/layouts/main-site-layout"
import SEO from "../components/seo"
import SassIconImage from "../components/images/Sass-icon"
import BEMIconImage from "../components/images/BEM-icon"

const SassBemPage = () => (
    <>
        <MainSiteLayout>
            <SEO title="SASS + BEM" />
            <section className="default-page-layout__grid">
                <div className="default-page-layout__column">
                    <h1>
                        Learn about using Sass with the BEM naming convention
                    </h1>
                    <p>
                        There are many different ways to write styling in Gatsby
                        and you can read about some of them on the{" "}
                        <a
                            href="https://www.gatsbyjs.org/docs/styling/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Gatsby Docs Styling Page
                        </a>
                    </p>

                    <p>
                        but for this starter I have choosen to use nested SASS
                        with the BEM naming convention.
                    </p>
                    <p>
                        BEM Articles:
                        https://seesparkbox.com/foundry/bem_by_example
                        https://codeburst.io/understanding-css-bem-naming-convention-a8cca116d252
                        BEM + Nested SASS:
                        https://medium.com/@andrew_barnes/bem-and-sass-a-perfect-match-5e48d9bc3894
                        https://css-tricks.com/using-sass-control-scope-bem-naming/
                        https://css-tricks.com/using-sass-control-scope-bem-naming/
                    </p>
                </div>
                <div className="default-page-layout__column">
                    <div className="default-page-layout__icons default-page-layout__icons--two-icons">
                        <div className="default-page-layout__icon">
                            <SassIconImage />
                        </div>
                        <div className="default-page-layout__icon">
                            <BEMIconImage />
                        </div>
                    </div>
                </div>
            </section>
        </MainSiteLayout>
    </>
)

export default SassBemPage
