/*
 * InLink Component
 *
 */

import React from "react"
import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"

const InLink = props => {
    return (
        <>
            <GatsbyLink to={props.to}>{props.text}</GatsbyLink>
        </>
    )
}

InLink.defaultProps = {
    to: "/404/",
    text: "Link Text Missing",
}

InLink.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default InLink
