/*
 * Gatsby's Browser API
 *
 * Implement Gatsby's Browser APIs in this file.
 *
 * Gatsby's Browser API: https://www.gatsbyjs.org/docs/browser-apis
 * Introduction to Styling in Gatsby: https://www.gatsbyjs.org/tutorial/part-two
 */

// These imports would usually be placed in the `MainLayout` file
// However, if imported this way they cause an error when being loaded as storybook stories
// They are instead included here for Gatsby and in `.storybook/preview.js` for Storybook

// Import `focus-visible` package
import "focus-visible"

// Import global Sass/Scss styling
import "./src/10_styles/main.scss"
