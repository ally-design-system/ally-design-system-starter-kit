/*
 * Header Component
 *
 * Gatsby useStaticQuery Hook: https://www.gatsbyjs.org/docs/use-static-query
 * Gatsby Link API: https://www.gatsbyjs.org/docs/gatsby-link
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import InLink from "../../01_atoms/InLink/InLink"
import MenuMobile from "../../02_molecules/MenuMobile/MenuMobile"
import MenuDesktop from "../../02_molecules/MenuDesktop/MenuDesktop"

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
            <header className="header">
                <div className="header__inner">
                    <div className="header__site-title">
                        <InLink
                            className="header__in-link"
                            to="/"
                            text={data.site.siteMetadata.title}
                        />
                    </div>
                    <nav className="header__navigation">
                        <MenuDesktop />
                        <MenuMobile />
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
