/*
 * Image Component
 *
 * Gatsby Image: https://www.gatsbyjs.org/docs/gatsby-image
 * Help for creating a reusable component: https://stackoverflow.com/questions/55122752/reusable-gatsby-image-component-with-dynamic-image-sources
 */

// @todo: Need to fix warning "You can't use childImageSharp together with x.md
// — use publicURL instead. The childImageSharp portion of the query in this file will return null: undefined"
import React from "react"
import PropTypes from "prop-types"
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
                <figure>
                    <Img
                        className={`image ${props.className} ${props.modifier}`}
                        alt={props.alt}
                        fluid={image.node.childImageSharp.fluid}
                    />
                    <figcaption>{props.caption}</figcaption>
                </figure>
            )
        }}
    />
)

Image.defaultProps = {
    caption: "The Gatsby Logo",
    filename: "gatsby.png",
    alt: "Gatsby Logo",
    className: "",
    modifier: "",
}

Image.propTypes = {
    caption: PropTypes.string,
    filename: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    modifier: PropTypes.string,
}

export default Image
