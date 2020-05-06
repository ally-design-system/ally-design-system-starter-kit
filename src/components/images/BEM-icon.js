/*
 * Gatsby Image Component
 *
 * Gatsby Image API`: https://gatsby.dev/gatsby-image
 * Gatsby useStaticQuery Hook: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BEMIconImage = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "images/BEM.png" }) {
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
            alt="BEM Icon"
            fluid={data.placeholderImage.childImageSharp.fluid}
        />
    )
}

export default BEMIconImage
