import { Link } from "gatsby"
import React from "react"

const Footer = () => (
    <footer className="footer">
        <div className="footer__inner">
            <p className="footer__text">
                &copy; {new Date().getFullYear()} Built by&nbsp;
                <Link to="/">Nikki Pantony</Link>
            </p>
        </div>
    </footer>
)

export default Footer
