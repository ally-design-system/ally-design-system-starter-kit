/*
 * NavLinks Component
 *
 */

import React from "react"
import { Link } from "gatsby"

const isActive = ({ isCurrent }) => {
    return { className: isCurrent ? "active" : "navlink" }
}
const NavLink = props => <Link getProps={isActive} {...props} />

const Nav = () => {
    return (
        <>
            <nav className="m-nav-links">
                <ul className="m-nav-links__list">
                    <li className="m-nav-links__list-item">
                        <NavLink className="m-nav-links__link" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="m-nav-links__list-item">
                        <NavLink className="m-nav-links__link" to="/gatsby/">
                            Gatsby
                        </NavLink>
                    </li>
                    <li className="m-nav-links__list-item">
                        <NavLink className="m-nav-links__link" to="/sass-bem/">
                            SASS + BEM
                        </NavLink>
                    </li>
                    <li className="m-nav-links__list-item">
                        <NavLink className="m-nav-links__link" to="/markdown/">
                            Markdown
                        </NavLink>
                    </li>
                    <li className="m-nav-links__list-item">
                        <NavLink
                            className="m-nav-links__link"
                            to="/style-guide/"
                        >
                            Style Guide
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav
