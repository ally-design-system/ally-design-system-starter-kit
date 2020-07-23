/*
 * External Link Component Stories
 *
 */

import React from "react"
import ExLink from "./ExLink"

export default {
    title: "/Atoms/External Link",
    component: ExLink,
}

export const Default = () => (
    <ExLink to="https://ally-starter-kit.github.io" text="Ally Starter Kit" />
)

export const smaller = () => (
    <ExLink
        to="https://ally-starter-kit.github.io"
        text="Ally Starter Kit"
        modifier="--smaller"
    />
)

export const LongText = () => (
    <ExLink
        to="https://ally-starter-kit.github.io"
        text="Ally Starter Kit Ally Starter Kit Ally Starter Kit"
    />
)

export const MissingText = () => (
    <ExLink to="https://ally-starter-kit.github.io" text="" />
)

export const MissingURL = () => <ExLink to="" text="Ally Starter Kit" />
