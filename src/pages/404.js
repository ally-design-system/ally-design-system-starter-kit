/*
 * 404 Error Page
 *
 * Gatsby 404 Page: https://www.gatsbyjs.org/docs/add-404-page/
 * Gatsby Link API: https://www.gatsbyjs.org/docs/gatsby-link/
 */

import React from "react"
import { Link } from "gatsby"
import MainLayout from "../04_templates/main-layout-template"

const NotFoundPage = () => (
    <MainLayout>
        <h1>Error 404 - Page Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <p>
            Head back to the <Link to="/">Home Page</Link>
        </p>
    </MainLayout>
)

export default NotFoundPage
