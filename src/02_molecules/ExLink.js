/*
 * ExLink Component
 *
 * prop-types: https://www.npmjs.com/package/prop-types
 * Typechecking with proptypes https://reactjs.org/docs/typechecking-with-proptypes.html
 * How to use prop-types: https://www.npmjs.com/package/prop-types#usage
 * Use target="_blank" with rel="noopener noreferrer" for security: https://mathiasbynens.github.io/rel-noopener/
 */

import React from "react"
import PropTypes from "prop-types"
import Icon from "../01_atoms/Icon"

const ExLink = props => {
    return (
        <>
            <a
                className="m-ex-link"
                href={props.href}
                rel="noopener noreferrer"
                target="_blank"
            >
                {props.text}{" "}
                <Icon
                    id="open-in-new"
                    title="Link will open in new
                    tab"
                />
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
