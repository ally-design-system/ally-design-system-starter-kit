/*
 * Gatsby Image Component
 *
 * Gatsby Image API`: https://gatsby.dev/gatsby-image
 * Gatsby useStaticQuery Hook: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GatsbyAstronautImage = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(
                relativePath: { eq: "gatsby-astronaut.jpg" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 350) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <Img
            alt="Gatsby Astronaut"
            fluid={data.placeholderImage.childImageSharp.fluid}
        />
    )
}

export default GatsbyAstronautImage
