/*
 * Main Site Layout Component
 */

import React from "react"

import "../../styles/main.scss"

import { SkipNavLink, SkipNavContent } from "@reach/skip-nav"
import Header from "../header"
import Footer from "../footer"

const MainSiteLayout = ({ children }) => (
    <>
        <SkipNavLink />
        <Header />
        <SkipNavContent />
        <main className="main-site-layout">{children}</main>
        <Footer />
    </>
)

export default MainSiteLayout
