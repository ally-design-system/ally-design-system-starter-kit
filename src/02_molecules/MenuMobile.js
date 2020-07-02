/*
 * Mobile Menu Component
 *
 * Reach UI 'menu-button' component: https://reacttraining.com/reach-ui/menu-button
 */

import React from "react"
import { Menu, MenuList, MenuButton, MenuLink } from "@reach/menu-button"
import { Link } from "gatsby"

const MenuMobile = () => {
    return (
        <>
            <Menu>
                <MenuButton>Menu</MenuButton>
                <MenuList className="slide-down">
                    <MenuLink as={Link} to="/">
                        Home
                    </MenuLink>
                    <MenuLink as={Link} to="/gatsby/">
                        Gatsby
                    </MenuLink>
                    <MenuLink as={Link} to="/sass-bem/">
                        SASS + BEM
                    </MenuLink>
                    <MenuLink as={Link} to="/markdown/">
                        Markdown
                    </MenuLink>
                    <MenuLink as={Link} to="/style-guide/">
                        Style Guide
                    </MenuLink>
                </MenuList>
            </Menu>
        </>
    )
}

export default MenuMobile
