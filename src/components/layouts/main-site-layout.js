/*
 * Main Site Layout Component
 */

import React from "react"

import "../../styles/main.scss"

//  @Todo For Skip-Link
// import { SkipNavLink, SkipNavContent } from "@reach/skip-nav"
// import "@reach/skip-nav/styles.css" // This will auto show and hide the link on focus

import Header from "../header"
import Footer from "../footer"

const MainSiteLayout = ({ children }) => (
    <>
        {/* <SkipNavLink /> */}
        <Header />
        {/* <SkipNavContent /> */}
        <main className="main-site-layout">{children}</main>
        <Footer />
    </>
)

export default MainSiteLayout
