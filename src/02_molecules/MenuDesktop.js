/*
 * Desktop Menu Component
 *
 * Gatsby Link API: https://www.gatsbyjs.org/docs/gatsby-link/
 */

import React from "react"
import { Link } from "gatsby"

const isActive = ({ isCurrent }) => {
    return { className: isCurrent ? "active" : "navlink" }
}
const NavLink = props => <Link getProps={isActive} {...props} />

const MenuDesktop = () => {
    return (
        <>
            <nav className="m-menu-desktop">
                <ul className="m-menu-desktop__list">
                    <li className="m-menu-desktop__list-item">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="m-menu-desktop__list-item">
                        <NavLink to="/gatsby/">Gatsby</NavLink>
                    </li>
                    <li className="m-menu-desktop__list-item">
                        <NavLink to="/sass-bem/">SASS + BEM</NavLink>
                    </li>
                    <li className="m-menu-desktop__list-item">
                        <NavLink to="/markdown/">Markdown</NavLink>
                    </li>
                    <li className="m-menu-desktop__list-item">
                        <NavLink to="/style-guide/">Style Guide</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default MenuDesktop
