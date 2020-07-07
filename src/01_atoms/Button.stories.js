import React from "react"
import Button from "../01_atoms/Button"

export default {
    title: "01 Atoms/Button",
    component: Button,
}

export const DownloadText = () => <Button text="Download" />

export const EmojisText = () => <Button text="😀 😎 👍 💯" />

export const TextMissing = () => <Button />

export const TextEmpty = () => <Button text="" />
