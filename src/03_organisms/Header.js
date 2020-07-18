/*
 * Header Component
 *
 * Gatsby useStaticQuery Hook: https://www.gatsbyjs.org/docs/use-static-query
 * Gatsby Link API: https://www.gatsbyjs.org/docs/gatsby-link
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import InLink from "../01_atoms/InLink/InLink"
import MenuMobile from "../02_molecules/MenuMobile"
import MenuDesktop from "../02_molecules/MenuDesktop"

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
                    <nav className="o-header__navigation">
                        <MenuDesktop />
                        <MenuMobile />
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
