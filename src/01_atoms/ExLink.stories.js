import React from "react"
import ExLink from "../01_atoms/ExLink"

export default {
    title: "/01 Atoms/External Link",
    component: ExLink,
}

export const Working = () => (
    <ExLink href="https://ally-starter-kit.github.io" text="Ally Starter Kit" />
)

export const WorkingSmaller = () => (
    <ExLink
        class="--smaller"
        href="https://ally-starter-kit.github.io"
        text="Ally Starter Kit"
    />
)

export const TextMissing = () => (
    <ExLink href="https://ally-starter-kit.github.io" text="" />
)

export const URLMissing = () => <ExLink href="" text="Ally Starter Kit" />
