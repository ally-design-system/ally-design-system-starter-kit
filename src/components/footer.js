/*
 * Gatsby useStaticQuery Hook: https://www.gatsbyjs.org/docs/use-static-query/
 * Current year using JavaScript / React: https://stackoverflow.com/questions/41293014/new-date-getfullyear-in-react
 * Use target="_blank" with rel="noopener noreferrer" for security: https://mathiasbynens.github.io/rel-noopener/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
        <footer className="footer">
            <div className="footer__inner">
                <p className="footer__text footer__text--copyright">
                    &copy; {new Date().getFullYear()}{" "}
                    {data.site.siteMetadata.title}
                </p>
                <p className="footer__text">
                    Fonts:{" "}
                    <a
                        href="https://fonts.google.com/specimen/Arimo"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Arimo
                    </a>{" "}
                    by{" "}
                    <a
                        href="https://twitter.com/SteveMatteson1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Steve Matteson
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://fonts.google.com/specimen/Roboto+Slab"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Roboto Slab
                    </a>{" "}
                    by{" "}
                    <a
                        href="https://twitter.com/cr64"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Christian Robertson
                    </a>{" "}
                    served by{" "}
                    <a
                        href="https://fonts.google.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Google Fonts
                    </a>
                    .
                </p>
                <p className="footer__text">
                    Gatsby starter built by{" "}
                    <a
                        href="https://nikkipantony.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Nikki Pantony
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer
