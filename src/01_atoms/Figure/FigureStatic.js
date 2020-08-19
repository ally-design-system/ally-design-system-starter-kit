/*
 * Figure Component
 *
 * Without GraphQL or gatsby-image for demo in Storybook until query error is fixed
 */

import React from "react"
import PropTypes from "prop-types"

const FigureStatic = props => {
    return (
        <>
            <figure className={`figure ${props.className} ${props.modifier}`}>
                <img
                    className={`figure__image`}
                    alt={props.alt}
                    src={props.imageFile}
                />
                <figcaption>{props.figcaption}</figcaption>
            </figure>
        </>
    )
}

FigureStatic.defaultProps = {
    imageFile: "../../07_images/gatsby.png",
    figcaption: "The Gatsby Logo",
    alt: "Gatsby Logo",
    className: "",
    modifier: "--maxWidth500",
}

FigureStatic.propTypes = {
    figcaption: PropTypes.string,
    imageFile: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    modifier: PropTypes.string,
}

export default FigureStatic
