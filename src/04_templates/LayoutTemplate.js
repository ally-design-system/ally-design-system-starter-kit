/*
 * Main Layout Template
 */

import React from "react"
import "../10_styles/styles.scss"
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav"
import Header from "../03_organisms/Header"
import Footer from "../03_organisms/Footer"

const MainLayout = ({ children }) => (
    <>
        <SkipNavLink />
        <Header />
        <SkipNavContent tabindex="-1" />
        <main className="t-layout-template">{children}</main>
        <Footer />
    </>
)

export default MainLayout
