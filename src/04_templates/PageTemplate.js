/*
 * Page Template
 */

import React from "react"
import { graphql } from "gatsby"
import Layout from "./LayoutTemplate"
import SEO from "../09_utilities/SEO"

import GatsbyLogoImage from "../01_atoms/images/Gatsby-Logo"
import ReactIconImage from "../01_atoms/images/React-icon"
import GraphQLIconImage from "../01_atoms/images/GraphQL-icon"
import WebpackIconImage from "../01_atoms/images/Webpack-icon"
import SassIconImage from "../01_atoms/images/Sass-icon"
import BEMIconImage from "../01_atoms/images/BEM-icon"
import MarkdownIconImage from "../01_atoms/images/Markdown-icon"

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
                        <div className="default-page-layout__feature-image">
                            <GatsbyLogoImage />
                        </div>
                        <div className="default-page-layout__icons">
                            <div className="default-page-layout__icon">
                                <ReactIconImage />
                            </div>
                            <div className="default-page-layout__icon">
                                <GraphQLIconImage />
                            </div>
                            <div className="default-page-layout__icon">
                                <WebpackIconImage />
                            </div>
                            <div className="default-page-layout__icon">
                                <SassIconImage />
                            </div>
                            <div className="default-page-layout__icon">
                                <BEMIconImage />
                            </div>
                            <div className="default-page-layout__icon">
                                <MarkdownIconImage />
                            </div>
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
