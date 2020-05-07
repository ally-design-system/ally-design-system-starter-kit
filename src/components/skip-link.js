/*
 * Skip Link Component
 *
 */

import React from "react"
import { Link } from "gatsby"

const SkipLink = () => (
    <>
        <div className="skip-link">
            <Link className="skip-link__link" to="#main-content">
                Skip to Main Content
            </Link>
        </div>
    </>
)

export default SkipLink
