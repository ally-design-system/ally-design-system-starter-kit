/*
 * Mobile Menu Component
 *
 * Reach UI 'menu-button' component: https://reacttraining.com/reach-ui/menu-button
 */

import React from "react"
import { Menu, MenuList, MenuButton, MenuLink } from "@reach/menu-button"
import { Link } from "gatsby"

/* Customized `MenuLink` to work as `NavLink` component used in Desktop Menu with styled active page link in navigation */
const isActive = ({ isCurrent }) => {
    return { className: isCurrent ? "active" : "navlink" }
}

const NavLink = props => <MenuLink getProps={isActive} {...props} />

const MenuMobile = () => {
    return (
        <>
            <Menu>
                <MenuButton>Menu</MenuButton>
                <MenuList className="slide-down">
                    <NavLink as={Link} to="/">
                        Home
                    </NavLink>
                    <NavLink as={Link} to="/gatsby/">
                        Gatsby
                    </NavLink>
                    <NavLink as={Link} to="/sass-bem/">
                        SASS + BEM
                    </NavLink>
                    <NavLink as={Link} to="/markdown/">
                        Markdown
                    </NavLink>
                    <NavLink as={Link} to="/style-guide/">
                        Style Guide
                    </NavLink>
                </MenuList>
            </Menu>
        </>
    )
}

export default MenuMobile
