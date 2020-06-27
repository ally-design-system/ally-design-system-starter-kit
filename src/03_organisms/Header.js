/*
 * Header Component
 *
 * Gatsby useStaticQuery Hook: https://www.gatsbyjs.org/docs/use-static-query/
 * Gatsby Link API: https://www.gatsbyjs.org/docs/gatsby-link/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import InLink from "../01_atoms/InLink"
import NavLinks from "../02_molecules/NavLinks"
import MenuTest from "../02_molecules/Menu"

const Header = () => {
    const data = useStaticQuery(graphql`
        query HeaderSiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <header className="o-header">
                <div className="o-header__inner">
                    <div className="o-header__site-title">
                        <InLink to="/" text={data.site.siteMetadata.title} />
                    </div>
                    <div className="o-header__navigation">
                        <NavLinks />
                        <MenuTest />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
