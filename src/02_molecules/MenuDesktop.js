/*
 * Desktop Menu Component
 *
 * Gatsby Link API: https://www.gatsbyjs.org/docs/gatsby-link/
 */

import React from "react"
import NavLink from "../01_atoms/NavLink"
import MenuBurger from "../02_molecules/MenuMobile"

const MenuDesktop = () => {
    return (
        <>
            <nav className="m-menu-desktop">
                <ul className="m-menu-desktop__list">
                    <li className="m-menu-desktop__list-item">
                        <NavLink to="/" text="Home" />
                    </li>
                    <li className="m-menu-desktop__list-item">
                        <NavLink to="/gatsby/" text="Gatsby" />
                    </li>
                    <li className="m-menu-desktop__list-item">
                        <NavLink to="/sass-bem/" text="SASS + BEM" />
                    </li>
                    <li className="m-menu-desktop__list-item">
                        <NavLink to="/markdown/" text="Markdown" />
                    </li>
                    <li className="m-menu-desktop__list-item">
                        <NavLink to="/style-guide/" text="Style Guide" />
                    </li>
                </ul>
                <MenuBurger />
            </nav>
        </>
    )
}

export default MenuDesktop
