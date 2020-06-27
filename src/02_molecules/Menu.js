/*
 * Menu Component
 *
 * Reach Menu Button: https://reacttraining.com/reach-ui/menu-button
 */

import React from "react"
import { Menu, MenuList, MenuButton, MenuLink } from "@reach/menu-button"
import "@reach/menu-button/styles.css"

import { Link as GatsbyLink } from "gatsby"

// const isActive = ({ isCurrent }) => {
//     return { className: isCurrent ? "active" : "navlink" }
// }
// const NavLink = props => <Link getProps={isActive} {...props} />

const MenuTest = () => {
    return (
        <>
            <Menu>
                <MenuButton>Actions</MenuButton>
                <MenuList>
                    <MenuLink as={GatsbyLink} to="/gatsby">
                        Gatsby
                    </MenuLink>
                </MenuList>
            </Menu>
        </>
    )
}

export default MenuTest
