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

export const WithText = () => <InLink to="/" text="Home" />

export const TextMissing = () => <InLink to="/" text="" />

export const AllPropsMissing = () => <InLink />
