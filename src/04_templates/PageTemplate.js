/*
 * Page Template
 *
 */

import React from "react"
import { graphql } from "gatsby"
import Layout from "./MainLayout"
import SEO from "../09_utilities/SEO"

export default function Template({
    data, // This prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark

    return (
        <>
            <Layout>
                <SEO title={frontmatter.title} />
                <section className="default-page-layout__grid">
                    <div
                        className="default-page-layout__column"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                    <div className="default-page-layout__column">
                        <div className="default-page-layout__feature-image"></div>
                        <div className="default-page-layout__icons">
                            <div className="default-page-layout__icon"></div>
                            <div className="default-page-layout__icon"></div>
                            <div className="default-page-layout__icon"></div>
                            <div className="default-page-layout__icon"></div>
                            <div className="default-page-layout__icon"></div>
                            <div className="default-page-layout__icon"></div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                type
                path
                title
            }
        }
    }
`
