/*
 * Internal Link Component Stories
 *
 */

import React from "react"
import InLink from "./InLink"

export default {
    title: "/Atoms/Internal Link",
    component: InLink,
}

export const InternalLink = args => <InLink to="/" {...args} />
InternalLink.args = {
    to: "/",
    text: "Internal Link Example",
    className: "",
    modifier: "",
}
