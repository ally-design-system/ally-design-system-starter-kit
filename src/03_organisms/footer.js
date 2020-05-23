/*
 * Footer Component
 *
 * Gatsby useStaticQuery Hook: https://www.gatsbyjs.org/docs/use-static-query/
 * Current year using JavaScript / React: https://stackoverflow.com/questions/41293014/new-date-getfullyear-in-react
 * Use target="_blank" with rel="noopener noreferrer" for security: https://mathiasbynens.github.io/rel-noopener/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ExLink from "../02_molecules/ExLink"

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
                <p className="o-footer__text">
                    &copy; {new Date().getFullYear()}{" "}
                    {data.site.siteMetadata.title}
                </p>
                <p className="o-footer__text">
                    Built by{" "}
                    <ExLink
                        class="o-footer__text --ex-link"
                        href="https://nikkipantony.com"
                        text="Nikki Pantony"
                    />
                </p>
            </div>
        </footer>
    )
}

export default Footer
