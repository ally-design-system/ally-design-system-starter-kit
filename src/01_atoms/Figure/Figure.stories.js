/*
 * Image Component Stories
 *
 * Serving static files via a directory: https://storybook.js.org/docs/configurations/serving-static-files/#2-via-a-directory
 * Help solving Gatsby/Storybook StaticQuery Issue: https://github.com/gatsbyjs/gatsby/issues/12007#issuecomment-467730610
 */

import React from "react"
import Figure from "./Figure"

export default {
    title: "/Atoms/Figure",
    component: Figure,
}

export const maxWidth500 = () => (
    <Figure
        alt="Gatsby Logo"
        filename="gatsby.png"
        figcaption="The GatsbyJS logo."
        modifier="--maxWidth500"
    />
)
