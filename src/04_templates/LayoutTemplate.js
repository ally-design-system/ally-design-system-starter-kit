/*
 * Main Layout Template
 */

import "focus-visible"
import React from "react"
import "../10_styles/styles.scss"
import SkipLinkHeader from "../01_atoms/SkipLinkHeader"
import SkipLinkFooter from "../01_atoms/SkipLinkFooter"
import SkipLinkContent from "../01_atoms/SkipLinkContent"
import Header from "../03_organisms/Header"
import Footer from "../03_organisms/Footer"

const MainLayout = ({ children }) => (
    <>
        <SkipLinkHeader />
        <Header />
        <SkipLinkContent />
        <main className="t-layout-template">{children}</main>
        <SkipLinkFooter />
        <Footer />
    </>
)

export default MainLayout
