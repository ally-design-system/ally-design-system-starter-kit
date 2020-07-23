/*
 * Storybook Preview Configuration
 *
 * Configure Storybook global decorators and parameters in this file.
 *
 * Storybook Manager & Preview Configuration: https://storybook.js.org/docs/configurations/overview/#manager--preview
 */

// Import `focus-visible` globally within storybook so it is applied in component stories
import "focus-visible"

// Import global styling with loaders to compile component Sass/Scss styling
import "!style-loader!css-loader!sass-loader!../src/10_styles/main.scss"

// Import Storybook Actions addon
import { action } from "@storybook/addon-actions"

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
    enqueue: () => {},
    hovering: () => {},
}
// __PATH_PREFIX__ is used inside gatsby-link an other various places. For storybook not to crash, you need to set it as well.
global.__PATH_PREFIX__ = ""
// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.
window.___navigate = pathname => {
    action("NavigateTo:")(pathname)
}
