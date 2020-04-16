import { Link } from "gatsby"
import React from "react"

const isActive = ({ isCurrent }) => {
    return { className: isCurrent ? "active" : "navlink" }
}

const NavLink = props => <Link getProps={isActive} {...props} />

const Header = () => (
    <header className="header">
        <div className="header__inner">
            <p className="header__initial">
                <Link to="/">Gatsby + BEM + SASS</Link>
            </p>
            <nav className="header__navigation">
                <ul>
                    <li>
                        <NavLink to="/">Home Page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/page-second/">Second Page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/page-third/">Third Page</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
)

export default Header
