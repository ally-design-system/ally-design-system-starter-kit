/*
 * 404 Error Page
 *
 * Gatsby 404 Page: https://www.gatsbyjs.org/docs/add-404-page/
 * Gatsby Link API: https://www.gatsbyjs.org/docs/gatsby-link/
 *
 */

import React from "react"
import { Link } from "gatsby"
import Layout from "../04_templates/LayoutTemplate"

const NotFoundPage = () => (
    <Layout>
        <h1>Error 404 - Page Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <p>
            Head back to the <Link to="/">Home Page</Link>
        </p>
    </Layout>
)

export default NotFoundPage
