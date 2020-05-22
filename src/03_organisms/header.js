/*
 * Header Component
 *
 * Gatsby useStaticQuery Hook: https://www.gatsbyjs.org/docs/use-static-query/
 * Gatsby Link API: https://www.gatsbyjs.org/docs/gatsby-link/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import NavLinks from "../02_molecules/NavLinks"

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
                        <Link to="/">{data.site.siteMetadata.title}</Link>
                    </div>
                    <NavLinks />
                </div>
            </header>
        </>
    )
}

export default Header
