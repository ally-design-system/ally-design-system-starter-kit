/*
 * BackButton Component
 *
 */

import React from "react"
import PropTypes from "prop-types"

const BackButton = props => {
    return (
        <>
            <button className="--back">{props.text}</button>
        </>
    )
}

Button.defaultProps = {
    text: "Missing Text",
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default BackButton
