/*
 * Main Site Layout Component
 */

import React from "react"

import "../../styles/main.scss"

import Header from "../header"
import Footer from "../footer"

const MainSiteLayout = ({ children }) => (
    <>
        <Header />
        <main class="main-site-layout">{children}</main>
        <Footer />
    </>
)

export default MainSiteLayout
