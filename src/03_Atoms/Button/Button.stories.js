/*
 * Button Component Stories
 *
 */

import React from "react"
import Button from "./Button"

export default {
    title: "Atoms/Button",
    component: Button,
    argTypes: {
        text: {
            description: "Props description",
        },
        className: {
            description: "Props description",
        },
        modifier: {
            description: "Props description",
        },
    },
}

// export const Working = () => <Button text="Ally Starter Kit" />

export const DefaultButton = args => <Button {...args} />
DefaultButton.args = {
    text: "Button Text",
    className: "",
    modifier: "null",
}
