/*
 * Navigation Link Component Stories
 *
 */

import React from "react"
import NavLink from "./NavLink"

export default {
    title: "Atoms/Navigation Link",
    component: NavLink,
}

export const Default = () => <NavLink to="/" text="Home" />

export const MissingText = () => <NavLink to="/" />

export const AllPropsMissing = () => <NavLink />
