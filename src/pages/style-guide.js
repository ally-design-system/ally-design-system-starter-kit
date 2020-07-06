/*
 * Style Guide Page
 *
 */

import React from "react"
import Layout from "../04_templates/LayoutTemplate"
import Image from "../01_atoms/Image"
import Icon from "../01_atoms/Icon"
import InLink from "../01_atoms/InLink"
import ExLink from "../01_atoms/ExLink"
import Button from "../01_atoms/Button"

// @todo: Move to style guide styling unless adding Storybook!?
const Container = {
    display: "flex",
    flexWrap: "wrap",
}

const ComponentsPage = () => (
    <>
        <Layout>
            <section className="default-page-layout__grid">
                <div className="default-page-layout__column">
                    <h1>Ally Style Guide</h1>
                    <h2>Atom Components</h2>
                    <h3>Image</h3>
                    <Image alt="Gatsby in Space" filename="BEM.png" />
                    <h3>Icon</h3>
                    <div style={Container}>
                        <Icon id="mail" title="Email address" />
                        <p> &nbsp; &nbsp; </p>
                        <Icon
                            id="open-in-new"
                            title="Link will open in new
                    tab"
                        />
                        <p> &nbsp; &nbsp; </p>
                        <Icon
                            id="map-marker"
                            title="View location on Google maps"
                        />
                        <p> &nbsp; &nbsp; </p>
                        <Icon id="home" title="Go to home page" />
                        <p> &nbsp; &nbsp; </p>
                        <Icon id="close" title="Close" />
                        <p> &nbsp; &nbsp; </p>
                        <Icon id="a11y-human" title="Web accessibility" />
                        <p> &nbsp; &nbsp; </p>
                        <Icon id="cookie" title="Cookies policy" />
                        <p> &nbsp; &nbsp; </p>
                        <Icon id="privacy-lock" title="Priavy policy" />
                        <p> &nbsp; &nbsp; </p>
                        <Icon id="burger-menu" title="Open menu" />
                        <p> &nbsp; &nbsp; </p>
                        <Icon id="message" title="Send me a message" />
                    </div>
                    <h4>Internal Link</h4>
                    <div style={Container}>
                        <p>
                            <InLink to="/" text="Home" />
                        </p>
                        <p> &nbsp; &nbsp; </p>
                        <p>
                            <InLink />
                        </p>
                    </div>
                    <h4>Button</h4>
                    <div style={Container}>
                        <p>
                            <Button text="Download" />
                        </p>
                        <p> &nbsp; &nbsp; </p>
                        <p>
                            <Button />
                        </p>
                    </div>
                    <h2>Molecule Components</h2>
                    <h3>External Link</h3>
                    <div style={Container}>
                        <p>
                            <ExLink
                                href="https://github.com/nikkipantony/gatsby-starter-sass-bem-md"
                                text="Ally Starter Kit on GitHub"
                            />
                        </p>
                        <p> &nbsp; &nbsp; </p>
                        <p>
                            <ExLink />
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    </>
)

export default ComponentsPage
