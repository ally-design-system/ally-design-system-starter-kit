/*
 * Skip Link Content Component
 *
 * Reach UI 'skip-nav' component: https://reacttraining.com/reach-ui/skip-nav
 */

import React from "react"
import { SkipNavContent } from "@reach/skip-nav"

const SkipLinkContent = () => {
    return (
        <>
            <SkipNavContent tabindex="-1" />
        </>
    )
}

export default SkipLinkContent
