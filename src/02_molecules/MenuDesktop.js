/*
 * Desktop Menu Component
 *
 * Gatsby Link API: https://www.gatsbyjs.org/docs/gatsby-link/
 */

import React from "react"
import NavLink from "../01_atoms/NavLink"

const MenuDesktop = () => {
    return (
        <>
            <ul className="m-menu-desktop">
                <li className="m-menu-desktop__item">
                    <NavLink to="/" text="Home" />
                </li>
                <li className="m-menu-desktop__item">
                    <NavLink to="/gatsby/" text="Gatsby" />
                </li>
                <li className="m-menu-desktop__item">
                    <NavLink to="/sass-bem/" text="SASS + BEM" />
                </li>
                <li className="m-menu-desktop__item">
                    <NavLink to="/markdown/" text="Markdown" />
                </li>
                <li className="m-menu-desktop__item">
                    <NavLink to="/style-guide/" text="Style Guide" />
                </li>
            </ul>
        </>
    )
}

export default MenuDesktop
