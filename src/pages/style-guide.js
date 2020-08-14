/*
 * Style Guide Page
 *
 */

import React from "react"
import Layout from "../04_templates/MainLayout/MainLayout"
import Image from "../01_atoms/Image/Image"
import Icon from "../00_design_tokens/005_iconography/Icon/Icon"
import InLink from "../01_atoms/InLink/InLink"
import ExLink from "../01_atoms/ExLink/ExLink"
import Button from "../01_atoms/Button/Button"

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
                    <Image
                        alt="Gatsby Logo"
                        filename="gatsby.png"
                        caption="The GatsbyJS logo."
                    />
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
                    <div className="component-test">
                        {/* https://brajeshwar.github.io/entities */}
                        <blockquote cite="https://www.huxley.net/bnw/four.html">
                            <p>
                                <span class="open-quotation">&#8220;</span>
                                Words can be like X-rays, if you use them
                                properly—they’ll go through anything. You read
                                and you’re pierced. Words can be like X-rays, if
                                you use them properly—they’ll go through
                                anything. You read and you’re pierced.
                                <span class="close-quotation">&#8221;</span>
                            </p>
                            <footer>
                                <span class="em-dash">&#8212;</span> Aldous
                                Huxley, <cite>Brave New World</cite>
                            </footer>
                        </blockquote>
                    </div>

                    <ol>
                        <li>Home</li>
                        <li>Something</li>
                        <li>yeah</li>
                    </ol>
                    <p>
                        Words can be like <em>X-rays</em>, if you use them
                        properly—they’ll go through <i>anything</i>. You read
                        and you’re pierced.
                    </p>
                </div>
            </section>
        </Layout>
    </>
)

export default ComponentsPage
