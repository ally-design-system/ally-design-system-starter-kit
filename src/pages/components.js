/*
 * Component Demo Page
 *
 */

import React from "react"
import MainLayout from "../04_templates/main-layout-template"
import ExLink from "../01_atoms/ExLink"

const ComponentsPage = () => (
    <>
        <MainLayout>
            <section className="default-page-layout__grid">
                <div className="default-page-layout__column">
                    <h1>Components Demo Page</h1>
                    <h2>Atom Components</h2>
                    <h3>Links</h3>
                    <h4>External Link Working</h4>
                    <ExLink
                        href="https://github.com/nikkipantony/gatsby-starter-sass-bem-md"
                        text="External Link"
                    />
                    <h4>External Link Broken</h4>
                    <ExLink />
                </div>
            </section>
        </MainLayout>
    </>
)

export default ComponentsPage
