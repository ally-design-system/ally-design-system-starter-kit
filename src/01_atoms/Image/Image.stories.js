/*
 * Image Component Stories
 *
 * Serving static files via a directory: https://storybook.js.org/docs/configurations/serving-static-files/#2-via-a-directory
 * Help solving Gatsby/Storybook StaticQuery Issue: https://github.com/gatsbyjs/gatsby/issues/12007#issuecomment-467730610
 */

import React from "react"
import Image from "./Image"

export default {
    title: "/01 Atoms/Image",
    component: Image,
}

export const ImageFound = () => (
    <Image alt="Gatsby Logo" filename="gatsby.png" />
)

export const ImageNotFound = () => (
    <Image alt="Gatsby Logo" filename="Gatsby.png" />
)
