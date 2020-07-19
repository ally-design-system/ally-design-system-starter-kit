/*
 * Button Component
 *
 */

import React from "react"
import PropTypes from "prop-types"

const Button = props => {
    return (
        <>
            <button className={`button ${props.modifier}`}>{props.text}</button>
        </>
    )
}

Button.defaultProps = {
    text: "Missing Text",
    modifier: "",
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    modifier: PropTypes.string,
}

export default Button
