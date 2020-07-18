/*
 * Navigation Link Component Stories
 *
 */

import React from "react"
import NavLink from "./NavLink"

export default {
    title: "/01 Atoms/Navigation Link",
    component: NavLink,
}

export const WithText = () => <NavLink to="/" text="Home" />

export const TextMissing = () => <NavLink to="/" text="" />

export const PropsMissing = () => <NavLink />
