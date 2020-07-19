/*
 * External Link Component
 *
 * Prop-types: https://www.npmjs.com/package/prop-types
 * Typechecking with proptypes https://reactjs.org/docs/typechecking-with-proptypes.html
 * How to use prop-types: https://www.npmjs.com/package/prop-types#usage
 * Use target="_blank" with rel="noopener noreferrer" for security: https://mathiasbynens.github.io/rel-noopener
 */

import React from "react"
import PropTypes from "prop-types"
import Icon from "../../00_design_tokens/Icon/Icon"

const ExLink = props => {
    return (
        <>
            <a
                className={`ex-link ${props.className} ${props.modifier}`}
                href={props.to}
                rel="noopener noreferrer"
                target="_blank"
            >
                {props.text}{" "}
                <Icon
                    name="open-in-new"
                    title="Link will open in new
                    tab"
                />
            </a>
        </>
    )
}

ExLink.defaultProps = {
    to: "/",
    text: "Link Text Missing",
    className: "",
    modifier: "",
}

ExLink.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    modifier: PropTypes.string,
}

export default ExLink
