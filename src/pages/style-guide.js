/*
 * Style Guide Page
 *
 */

import React from "react"
import MainLayout from "../04_templates/main-layout-template"
import Icon from "../01_atoms/Icon"
import ExLink from "../01_atoms/ExLink"
import InLink from "../01_atoms/InLink"
import Button from "../01_atoms/Button"

const Container = {
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
                    <div style={Container}>
                        <Icon
                            id="mail"
                            size="60"
                            title="Email address"
                            fill="rebeccapurple"
                        />
                        <p> &nbsp; &nbsp; </p>
                        <Icon
                            id="open-in-new"
                            size="60"
                            title="Link will open in new
                    tab"
                            fill="rebeccapurple"
                        />
                        <p> &nbsp; &nbsp; </p>
                        <Icon
                            id="map-marker"
                            size="60"
                            title="View location on Google maps"
                            fill="rebeccapurple"
                        />
                        <p> &nbsp; &nbsp; </p>
                        <Icon
                            id="home"
                            size="60"
                            title="Go to home page"
                            fill="rebeccapurple"
                        />
                        <p> &nbsp; &nbsp; </p>
                        <Icon
                            id="close"
                            size="60"
                            title="Close"
                            fill="rebeccapurple"
                        />
                        <p> &nbsp; &nbsp; </p>
                        <Icon
                            id="a11y-human"
                            size="60"
                            title="Web accessibility"
                            fill="rebeccapurple"
                        />
                        <p> &nbsp; &nbsp; </p>
                        <Icon
                            id="cookie"
                            size="60"
                            title="Cookies policy"
                            fill="rebeccapurple"
                        />
                        <p> &nbsp; &nbsp; </p>
                        <Icon
                            id="privacy-lock"
                            size="60"
                            title="Priavy policy"
                            fill="rebeccapurple"
                        />
                        <p> &nbsp; &nbsp; </p>
                        <Icon
                            id="burger-menu"
                            size="60"
                            title="Open menu"
                            fill="rebeccapurple"
                        />
                        <p> &nbsp; &nbsp; </p>
                        <Icon
                            id="message"
                            size="60"
                            title="Send me a message"
                            fill="rebeccapurple"
                        />
                    </div>
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
                    <h4>Menu Navigation Link</h4>
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
                    <h4>Back Button</h4>
                    <div style={Container}>
                        <p>
                            <Button text="Go Back" />
                        </p>
                        <p> &nbsp; &nbsp; </p>
                        <p>
                            <Button />
                        </p>
                    </div>
                </div>
            </section>
        </MainLayout>
    </>
)

export default ComponentsPage
