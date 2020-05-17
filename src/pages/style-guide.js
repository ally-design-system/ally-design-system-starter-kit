/*
 * Style Guide Page
 *
 */

import React from "react"
import MainLayout from "../04_templates/main-layout-template"
import ExLink from "../01_atoms/ExLink"
import InLink from "../01_atoms/InLink"
import Icon from "../01_atoms/Icon"

const IconContainer = {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "400px",
}

const ComponentsPage = () => (
    <>
        <MainLayout>
            <section className="default-page-layout__grid">
                <div className="default-page-layout__column">
                    <h1>Ally Style Guide</h1>
                    <h2>Atom Components</h2>
                    <h3>Icons</h3>
                    <h4>open-in-new</h4>
                    <div style={IconContainer}>
                        <Icon
                            id="mail"
                            size="60"
                            title="Email address"
                            fill="rebeccapurple"
                        />

                        <Icon
                            id="open-in-new"
                            size="60"
                            title="Link will open in new
                    tab"
                            fill="rebeccapurple"
                        />

                        <Icon
                            id="map-marker"
                            size="60"
                            title="View location on Google maps"
                            fill="rebeccapurple"
                        />

                        <Icon
                            id="home"
                            size="60"
                            title="Go to home page"
                            fill="rebeccapurple"
                        />

                        <Icon
                            id="close"
                            size="60"
                            title="Close"
                            fill="rebeccapurple"
                        />

                        <Icon
                            id="a11y-human"
                            size="60"
                            title="Web accessibility"
                            fill="rebeccapurple"
                        />

                        <Icon
                            id="cookie"
                            size="60"
                            title="Cookies policy"
                            fill="rebeccapurple"
                        />

                        <Icon
                            id="privacy-lock"
                            size="60"
                            title="Priavy policy"
                            fill="rebeccapurple"
                        />

                        <Icon
                            id="burger-menu"
                            size="60"
                            title="Open menu"
                            fill="rebeccapurple"
                        />

                        <Icon
                            id="message"
                            size="60"
                            title="Send me a message"
                            fill="rebeccapurple"
                        />
                    </div>
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
