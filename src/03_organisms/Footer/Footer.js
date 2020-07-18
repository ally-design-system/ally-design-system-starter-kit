/*
 * Footer Component
 *
 * Gatsby useStaticQuery Hook: https://www.gatsbyjs.org/docs/use-static-query
 * Current year using JavaScript / React: https://stackoverflow.com/questions/41293014/new-date-getfullyear-in-react
 * Use target="_blank" with rel="noopener noreferrer" for security: https://mathiasbynens.github.io/rel-noopener
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import InLink from "../../01_atoms/InLink/InLink"
import ExLink from "../../01_atoms/ExLink/ExLink"

const Footer = () => {
    const data = useStaticQuery(graphql`
        query FooterSiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <footer className="o-footer">
            <div className="o-footer__inner">
                <p className="o-footer__text --links">
                    <InLink class="o-footer__text --link" to="/" text="Home" />
                    <InLink class="o-footer__text --link" to="/" text="Home" />
                    <InLink class="o-footer__text --link" to="/" text="Home" />
                    <InLink class="o-footer__text --link" to="/" text="Home" />
                    <InLink class="o-footer__text --link" to="/" text="Home" />
                </p>
                <p className="o-footer__text">
                    &copy; {new Date().getFullYear()}{" "}
                    {data.site.siteMetadata.title}. Built by{" "}
                    <ExLink
                        class="--smaller"
                        href="https://nikkipantony.com"
                        text="Nikki Pantony"
                    />
                </p>
            </div>
        </footer>
    )
}

export default Footer
