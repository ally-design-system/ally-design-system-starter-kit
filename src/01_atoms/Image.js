/*
 * Image Component
 *
 * Gatsby Image: https://www.gatsbyjs.org/docs/gatsby-image/
 * Help (with example code) from: https://stackoverflow.com/questions/55122752/reusable-gatsby-image-component-with-dynamic-image-sources
 *
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = props => (
    <StaticQuery
        query={graphql`
            query {
                images: allFile {
                    edges {
                        node {
                            relativePath
                            name
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid_tracedSVG
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={data => {
            const image = data.images.edges.find(n => {
                return n.node.relativePath.includes(props.filename)
            })
            if (!image) {
                return null
            }

            return (
                <Img alt={props.alt} fluid={image.node.childImageSharp.fluid} />
            )
        }}
    />
)

export default Image
