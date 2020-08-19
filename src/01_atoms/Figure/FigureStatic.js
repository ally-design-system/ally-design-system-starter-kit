/*
 * Figure Static Component
 *
 * Static version of Figure component without GraphQL or gatsby-image for demo in Storybook until query error is fixed
 * https://storybook.js.org/docs/react/configure/images-and-assets
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
    imageFile: "",
    figcaption: "",
    alt: "",
    className: "",
    modifier: "",
}

FigureStatic.propTypes = {
    figcaption: PropTypes.string,
    imageFile: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    modifier: PropTypes.string,
}

export default FigureStatic
