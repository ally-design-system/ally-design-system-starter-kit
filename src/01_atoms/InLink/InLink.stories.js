/*
 * Internal Link Component Stories
 *
 */

import React from "react"
import InLink from "./InLink"

export default {
    title: "Atoms/Internal Link",
    component: InLink,
    parameters: {
        docs: {
            description: {
                component: "Component description written in _markdown_.",
            },
        },
        design: {
            type: "figma",
            url:
                "https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample",
        },
    },
    argTypes: {
        to: {
            description: "Props description",
            // defaultValue: ["/home"],
        },
        text: {
            description: "Props description",
            // defaultValue: ["Example"],
        },
        className: {
            description: "Props description",
            // defaultValue: [""],
        },
        modifier: {
            description: "Props description",
            // control: {
            //     type: "select",
            //     options: ["null", "--microcopy"], // Does not work
            // },
            // defaultValue: ["null"],
        },
    },
}

export const InternalLink = args => <InLink {...args} />
InternalLink.args = {
    to: "/home",
    text: "Internal Link Example",
    className: "",
    modifier: "null",
}
