import React from "react"
import InLink from "../01_atoms/InLink"

export default {
    title: "/01 Atoms/Internal Link",
    component: InLink,
}

export const WithText = () => <InLink to="/" text="Home" />

export const TextMissing = () => <InLink to="/" text="" />

export const PropsMissing = () => <InLink />
