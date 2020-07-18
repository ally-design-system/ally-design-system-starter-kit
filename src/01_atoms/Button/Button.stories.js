/*
 * Button Component Stories
 *
 */

import React from "react"
import Button from "./Button"

export default {
    title: "/01 Atoms/Button",
    component: Button,
}

export const Working = () => <Button text="Ally Starter Kit" />

export const TextMissing = () => <Button />

export const TextEmpty = () => <Button text="" />
