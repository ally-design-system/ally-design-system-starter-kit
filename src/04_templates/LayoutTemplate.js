/*
 * Main Layout Template
 *
 */

import "focus-visible"
import React from "react"
import "../10_styles/styles.scss"
import SkipLink from "../01_atoms/SkipLink"
import { SkipNavContent } from "@reach/skip-nav"
import Header from "../03_organisms/Header"
import Footer from "../03_organisms/Footer"

const MainLayout = ({ children }) => (
    <>
        <SkipLink />
        <Header />
        <main className="t-layout-template">
            <SkipNavContent tabindex="-1">{children}</SkipNavContent>
        </main>
        <Footer />
    </>
)

export default MainLayout
