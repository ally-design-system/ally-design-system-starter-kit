import React from "react"
import Image from "../01_atoms/Image"

export default {
    title: "/01 Atoms/Image",
    component: Image,
}

// Shows SVG but does not load image - @todo Need to add static file / mock data
export const FileFound = () => <Image alt="Gatsby Logo" filename="Gatsby.png" />

export const FileNotFound = () => (
    <Image alt="Gatsby Logo" filename="Gatsby2.png" />
)
