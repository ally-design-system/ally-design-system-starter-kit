/*
 * Current year using JavaScript / React: https://stackoverflow.com/questions/41293014/new-date-getfullyear-in-react
 * Use target="_blank" with rel="noopener noreferrer" for security: https://mathiasbynens.github.io/rel-noopener/
 */

import React from "react"

const Footer = () => (
    <footer className="footer">
        <div className="footer__inner">
            <p className="footer__text">
                &copy; {new Date().getFullYear()} Built by&nbsp;
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

export default Footer
