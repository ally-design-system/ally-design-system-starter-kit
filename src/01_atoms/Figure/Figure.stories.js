/*
 * Image Component Stories
 *
 * Serving static files via a directory: https://storybook.js.org/docs/configurations/serving-static-files/#2-via-a-directory
 * Help solving Gatsby/Storybook StaticQuery Issue: https://github.com/gatsbyjs/gatsby/issues/12007#issuecomment-467730610
 */

import React from "react"
import Figure from "./FigureStatic"
import imageFile from "../../07_images/gatsby.png"

export default {
    title: "/Atoms/Figure",
    component: Figure,
}

const image = {
    imageFile: imageFile,
}

export const maxWidth500 = () => (
    <Figure
        imageFile={image.imageFile}
        figcaption="The GatsbyJS logo."
        alt="GatsbyJS Logo"
        className=""
        modifier="--maxWidth500"
    />
)
