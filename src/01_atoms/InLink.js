/*
 * InLink Component
 *
 * prop-types: https://www.npmjs.com/package/prop-types
 * Typechecking with proptypes https://reactjs.org/docs/typechecking-with-proptypes.html
 * How to use prop-types: https://www.npmjs.com/package/prop-types#usage
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
