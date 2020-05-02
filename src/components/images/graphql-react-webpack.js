/*
 * Gatsby Image Component
 *
 * Gatsby Image API`: https://gatsby.dev/gatsby-image
 * Gatsby useStaticQuery Hook: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GraphqlReactWebpackImage = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(
                relativePath: { eq: "graphql-react-webpack.png" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <Img
            alt="Graphql React and Webpack logos"
            fluid={data.placeholderImage.childImageSharp.fluid}
        />
    )
}

export default GraphqlReactWebpackImage
