/*
 * Burger Menu Component
 *
 * Reach UI 'menu-button' component: https://reacttraining.com/reach-ui/menu-button
 */

import React from "react"
import { Menu, MenuList, MenuButton, MenuLink } from "@reach/menu-button"
import { Link as GatsbyLink } from "gatsby"

const MenuBurger = () => {
    return (
        <>
            <Menu>
                <MenuButton>Menu</MenuButton>
                <MenuList>
                    <MenuLink as={GatsbyLink} to="/">
                        Home
                    </MenuLink>
                    <MenuLink as={GatsbyLink} to="/gatsby/">
                        Gatsby
                    </MenuLink>
                    <MenuLink as={GatsbyLink} to="/sass-bem/">
                        SASS + BEM
                    </MenuLink>
                    <MenuLink as={GatsbyLink} to="/markdown/">
                        Markdown
                    </MenuLink>
                    <MenuLink as={GatsbyLink} to="/style-guide/">
                        Style Guide
                    </MenuLink>
                </MenuList>
            </Menu>
        </>
    )
}

export default MenuBurger
