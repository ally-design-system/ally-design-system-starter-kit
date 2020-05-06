/*
 * Gatsby Image Component
 *
 * Gatsby Image API`: https://gatsby.dev/gatsby-image
 * Gatsby useStaticQuery Hook: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MarkdownIconImage = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(
                relativePath: { eq: "images/Markdown.png" }
            ) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <Img
            alt="Markdown Icon"
            fluid={data.placeholderImage.childImageSharp.fluid}
        />
    )
}

export default MarkdownIconImage
