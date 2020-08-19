/*
 * Style Guide Page
 *
 */

import React from "react"
import Layout from "../04_templates/MainLayout/MainLayout"
import Figure from "../01_atoms/Figure/Figure"
import Icon from "../00_iconography/Icon"
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
                    <Figure
                        alt="Gatsby Logo"
                        filename="gatsby.png"
                        figcaption="The GatsbyJS logo."
                        modifier="--maxWidth500"
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
                    <div>
                        <p>
                            <InLink to="/" text="Home" />
                        </p>
                        <p>
                            <InLink />
                        </p>
                    </div>
                    <h4>Button</h4>
                    <div>
                        <p>
                            <Button text="Download" />
                        </p>
                        <p>
                            <Button />
                        </p>
                    </div>
                    <h2>Molecule Components</h2>
                    <h3>External Link</h3>
                    <div>
                        <p>
                            <ExLink
                                href="https://github.com/nikkipantony/gatsby-starter-sass-bem-md"
                                text="Ally Starter Kit on GitHub"
                            />
                        </p>
                        <p>
                            <ExLink />
                        </p>
                    </div>
                    <div className="component-test">
                        {/* https://brajeshwar.github.io/entities */}
                        <blockquote cite="https://www.huxley.net/bnw/four.html">
                            <p>
                                "Words can be like X-rays, if you use them
                                properly—they’ll go through anything. You read
                                and you’re pierced. Words can be like X-rays, if
                                you use them properly—they’ll go through
                                anything. You read and you’re pierced. Words can
                                be like X-rays, if you use them properly—they’ll
                                go through anything. You read and you’re
                                pierced."
                            </p>
                            <footer>
                                &#8212; &nbsp; Aldous Huxley,{" "}
                                <cite>Brave New World</cite>
                            </footer>
                        </blockquote>
                    </div>

                    <ol>
                        <li>Home</li>
                        <li>Something</li>
                        <li>yeah</li>
                    </ol>
                    <p>
                        <strong>Words</strong> can be like <em>X-rays</em>, if
                        you use them{" "}
                        <mark>
                            <span className="sr-only">
                                {" "}
                                [highlight starts]{" "}
                            </span>
                            properly—they’ll
                            <span className="sr-only"> [highlight ends] </span>
                        </mark>{" "}
                        go through <i>anything</i>. You read and you’re pierced.
                    </p>
                    <p>
                        When Dave asks HAL to open the pod bay door, HAL
                        answers:{" "}
                        <q cite="https://www.imdb.com/title/tt0062622/quotes/qt0396921">
                            I'm sorry, Dave. I'm afraid I can't do that.
                        </q>
                    </p>
                    <p>
                        You can use{" "}
                        <abbr title="Cascading Style Sheets">CSS</abbr> to style
                        your <abbr title="HyperText Markup Language">HTML</abbr>
                        .
                    </p>
                    <p>
                        A <dfn id="def-validator">validator</dfn> is a program
                        that checks for syntax errors in code or documents.
                    </p>

                    <p>
                        You can use{" "}
                        <abbr title="Cascading Style Sheets">CSS</abbr> to style
                        your <abbr title="HyperText Markup Language">HTML</abbr>
                        .
                    </p>
                    <p>
                        Words can be like X-rays, if you use them
                        properly—they’ll <code>go through anything</code>. You
                        read <s>and you’re pierced</s>.
                    </p>
                    <p>
                        Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> +{" "}
                        <kbd>R</kbd> to re-render an MDN page.
                    </p>
                    <pre>
                        <code>Works when written in Markdown.</code>
                    </pre>
                </div>
                <p>
                    The Cure will be celebrating{" "}
                    <ExLink
                        href="https://github.com/nikkipantony/gatsby-starter-sass-bem-md"
                        text="Ally Starter Kit on GitHub"
                    />{" "}
                    their 40th <InLink to="/" text="Home" /> anniversary on{" "}
                    <time datetime="2018-07-07">July 7</time> in London's Hyde
                    Park.
                </p>

                <p>
                    The concert starts at <time datetime="20:00">20:00</time>{" "}
                    and you'll be able to enjoy the band for at least{" "}
                    <time datetime="PT2H30M">2h 30m</time>.
                </p>

                <p>
                    I was trying to boot my computer, but I got this hilarious
                    message:
                </p>

                <p>
                    <samp>Keyboard not found Press F1 to continue</samp>
                </p>

                <p>
                    You could use this element to highlight <u>speling</u>{" "}
                    mistakes, so the writer can <u>corect</u> them.
                </p>

                <hr />

                <p>
                    The volume of a box is <var>l</var> × <var>w</var> ×{" "}
                    <var>h</var>, where <var>l</var> represents the length,{" "}
                    <var>w</var> the width and <var>h</var> the height of the
                    box.
                </p>

                <p>Contact the author of this page:</p>

                <address>
                    <p>
                        <a href="https://nikkipantony.com">nikkipantony.com</a>
                    </p>
                    <p>
                        <a href="mailto:hello@nikkipantony.com">
                            hello@nikkipantony.com
                        </a>
                    </p>
                    <p>
                        <a href="tel:+447123456789">(+44) 7123 456789</a>
                    </p>
                    <p>
                        <a href="https://goo.gl/maps/LT1tuiDWaj1ScbYu5">
                            3rd Floor, 15 Colston St, Bristol BS1 5AP
                        </a>
                    </p>
                </address>

                <p>
                    There is <del>nothing</del> <ins>no code</ins> either good
                    or bad, but <del>thinking</del> <ins>running it</ins> makes
                    it so.
                </p>
            </section>
        </Layout>
    </>
)

export default ComponentsPage
