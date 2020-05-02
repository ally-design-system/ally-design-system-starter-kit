/*
 * 404 Error Page
 *
 * Gatsby 404 Page: https://www.gatsbyjs.org/docs/add-404-page/
 * Gatsby Link API: https://www.gatsbyjs.org/docs/gatsby-link/
 */

import React from "react"
import { Link } from "gatsby"

import MainSiteLayout from "../components/layouts/main-site-layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
    <MainSiteLayout>
        <SEO title="Error 404: Page Not found" />
        <h1>Error 404 - Page Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <p>
            Head back to the <Link to="/">Home Page</Link>
        </p>
    </MainSiteLayout>
)

export default NotFoundPage
