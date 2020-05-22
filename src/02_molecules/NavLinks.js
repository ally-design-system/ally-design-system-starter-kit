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
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/style-guide">Style guide</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav
