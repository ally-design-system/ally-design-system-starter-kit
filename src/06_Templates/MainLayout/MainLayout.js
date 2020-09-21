/*
 * Main Layout Template Component
 *
 */

import React from "react"
import SkipLink from "../../03_Atoms/SkipLink/SkipLink"
import { SkipNavContent } from "@reach/skip-nav"
import Header from "../../05_Organisms/Header/Header"
import Footer from "../../05_Organisms/Footer/Footer"

const MainLayout = ({ children }) => (
    <>
        <SkipLink />
        <Header />
        <main className="main-layout">
            <SkipNavContent tabIndex="-1">{children}</SkipNavContent>
        </main>
        <Footer />
    </>
)

export default MainLayout
