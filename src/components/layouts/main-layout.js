/*
 * Main Layout Component
 */

import React from "react"

import "../../styles/main.scss"

import Header from "../header"
import Footer from "../footer"

const MainLayout = ({ children }) => (
    <>
        <Header />
        <main class="main-layout">{children}</main>
        <Footer />
    </>
)

export default MainLayout
