/*
 * Gatsby Page
 */

import React from "react"

import MainSiteLayout from "../components/layouts/main-site-layout"
import SEO from "../components/seo"
import ImageGatsbyLogos from "../components/images/graphql-react-webpack"

const GatsbyPage = () => (
    <>
        <MainSiteLayout>
            <SEO title="Learn about Gatsby" />
            <h1>Learn About Gatsby</h1>
            <p>
                Gatsby is a free and open source framework based on React that
                helps developers build blazing fast websites and apps.
            </p>
            <p>
                It offers the power of modern web technologies without the
                headaches like React.js, Webpack, modern JavaScript and CSS as
                well as GraphQL to pull in data from anywhere.
            </p>
            <p>
                Find out more by visiting:{" "}
                <a
                    href="https://www.gatsbyjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    gatsbyjs.org
                </a>
                .
            </p>
            <div className="gatsby-page__image">
                <ImageGatsbyLogos />
            </div>
        </MainSiteLayout>
    </>
)

export default GatsbyPage
