/*
 * Storybook Manager Configuration
 *
 * Manage Storybook UI options in this file.
 *
 * Storybook Manager & Preview Configuration: https://storybook.js.org/docs/configurations/overview/#manager--preview
 */

// Import Storybook addons package
import { addons } from "@storybook/addons"

// Import local custom storybook theme from `.storybook/theme.js`
import theme from "./theme"

// Storybook addon configurations
addons.setConfig({
    // Use local custom storybook theme
    theme: theme,
})
