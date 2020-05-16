/*
 * ExLink Component
 *
 * prop-types: https://www.npmjs.com/package/prop-types
 * How to use prop-types: https://www.npmjs.com/package/prop-types#usage
 * Use target="_blank" with rel="noopener noreferrer" for security: https://mathiasbynens.github.io/rel-noopener/
 */

import React from "react"
import PropTypes from "prop-types"

const ExLink = props => {
    return (
        <>
            <a href={props.href} rel="noopener noreferrer" target="_blank">
                {props.text}
            </a>
        </>
    )
}

ExLink.defaultProps = {
    href: "/404/",
    text: "Link Text Missing",
}

ExLink.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default ExLink
