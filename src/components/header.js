/*
 * Header Component
 *
 * Gatsby useStaticQuery Hook: https://www.gatsbyjs.org/docs/use-static-query/
 * Gatsby Link API: https://www.gatsbyjs.org/docs/gatsby-link/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const isActive = ({ isCurrent }) => {
    return { className: isCurrent ? "active" : "navlink" }
}

const NavLink = props => <Link getProps={isActive} {...props} />

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
                    <nav className="header__navigation">
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/gatsby/">Gatsby</NavLink>
                            </li>
                            <li>
                                <NavLink to="/sass-bem/">SASS + BEM</NavLink>
                            </li>
                            <li>
                                <NavLink to="/markdown/">Markdown</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
