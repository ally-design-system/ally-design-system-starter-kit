import React from "react"

import "../../styles/main.scss"

import Header from "../header"
import Footer from "../footer"

const LayoutMain = ({ children }) => (
    <>
        <Header />
        <main class="layout-main">{children}</main>
        <Footer />
    </>
)

export default LayoutMain
