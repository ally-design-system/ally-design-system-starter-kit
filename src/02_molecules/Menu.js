/*
 * Menu Component
 *
 * Reach Menu Button: https://reacttraining.com/reach-ui/menu-button
 */

import React from "react"
import { Menu, MenuList, MenuButton, MenuLink } from "@reach/menu-button"
import { Link as GatsbyLink } from "gatsby"

const MenuTest = () => {
    return (
        <>
            <Menu>
                <MenuButton>Actions</MenuButton>
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
                </MenuList>
            </Menu>
        </>
    )
}

export default MenuTest
