/*
 * Button Component
 *
 */

import React from "react"
import PropTypes from "prop-types"

const Button = props => {
    return (
        <>
            <button className="button">{props.text}</button>
        </>
    )
}

Button.defaultProps = {
    text: "Missing Text",
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button
