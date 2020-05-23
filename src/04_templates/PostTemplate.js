/*
 * Markdown Post Template
 */

import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "./LayoutTemplate"
import SEO from "../09_utilities/seo"

export default function Template({
    data, // This prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark

    return (
        <>
            <Layout>
                <SEO title={frontmatter.title} />

                <Link to="/markdown">&larr; Back To Markdown Page</Link>

                <article className="t-post-template">
                    <div className="t-post-template__frontmatter">
                        <h1>{frontmatter.title}</h1>
                        <p className="t-post-template__date">
                            {frontmatter.date}
                        </p>
                        <div
                            className="t-post-template__content"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    </div>
                </article>
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
                path
                title
            }
        }
    }
`
