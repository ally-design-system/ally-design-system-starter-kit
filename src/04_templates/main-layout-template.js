/*
 * Main Site Layout Component
 */

import React from "react"
import "../styles/main.scss"
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav"
import Header from "../03_organisms/header"
import Footer from "../03_organisms/footer"

const MainLayout = ({ children }) => (
    <>
        <SkipNavLink />
        <Header />
        <SkipNavContent />
        <main className="main-site-layout">{children}</main>
        <Footer />
    </>
)

export default MainLayout
