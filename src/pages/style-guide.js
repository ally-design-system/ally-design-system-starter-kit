/*
 * Style Guide Page
 *
 */

import React from "react"
import MainLayout from "../04_templates/main-layout-template"
import ExLink from "../01_atoms/ExLink"
import InLink from "../01_atoms/InLink"

const ComponentsPage = () => (
    <>
        <MainLayout>
            <section className="default-page-layout__grid">
                <div className="default-page-layout__column">
                    <h1>Ally Style Guide</h1>

                    <h2>Atom Components</h2>

                    <h3>Links</h3>

                    <h4>External Link Working</h4>
                    <ExLink
                        href="https://github.com/nikkipantony/gatsby-starter-sass-bem-md"
                        text="Ally Starter Kit on GitHub"
                    />

                    <h4>External Link Broken</h4>
                    <ExLink />

                    <h4>Internal Link Working</h4>
                    <InLink to="/" text="Home" />

                    <h4>Internal Link Broken</h4>
                    <InLink />
                </div>
            </section>
        </MainLayout>
    </>
)

export default ComponentsPage
