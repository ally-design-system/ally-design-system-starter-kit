/*
 * Button Component
 *
 */

import React from "react"
import PropTypes from "prop-types"

const Button = props => {
    return (
        <>
            <button className={`button ${props.className} ${props.modifier}`}>
                {props.text}
            </button>
        </>
    )
}

Button.defaultProps = {
    text: "Missing Text",
    className: "",
    modifier: "",
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    modifier: PropTypes.string,
}

export default Button
