/*
 * Ally Custom Storybook Theme
 *
 * Edit the custom Storybook theme from this file.
 *
 * Storybook Theme Configuration: https://storybook.js.org/docs/configurations/theming
 */

// Import the `create()` function to generate a new theme
import { create } from "@storybook/theming/create"

// Set custom storybook theme variables
export default create({
    // Base theme - Either "light" or "dark"
    base: "light", // Required for theme to work

    // Theme base colours
    colorPrimary: "#000013",
    colorSecondary: "#4b0082",

    // UI colours
    appBg: "#fefefe",
    appContentBg: "#fefefe",
    appBorderColor: "#4b0082",
    appBorderRadius: 0,

    // Typography
    fontBase: '"Arimo", sans-serif',
    fontCode: "monospace",

    // Text colours
    textColor: "#000013",
    textInverseColor: "#fefefe",

    // Toolbar and active colours
    barTextColor: "#000013",
    barSelectedColor: "#4b0082",
    barBg: "#fefefe",

    // Form colours
    inputBg: "#fefefe",
    inputBorder: "#4b0082",
    inputTextColor: "#000013",
    inputBorderRadius: 0,

    // Branding
    brandTitle: "Ally Design System Starter Kit",
    brandUrl: "https://ally-starter-kit.github.io",

    // Replace brand title with image
    // brandImage: "https://placehold.it/350x150",
})
