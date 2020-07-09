import React from "react"
import Image from "../01_atoms/Image"

export default {
    title: "/01 Atoms/Image",
    component: Image,
}

export const FileFound = () => <Image alt="Gatsby Logo" filename="Gatsby.png" />

export const FileNotFound = () => (
    <Image alt="Gatsby Logo" filename="Gatsby2.png" />
)
