/*
 * Storybook Main Configuration
 *
 * Declare general storybook configuration in this file.
 *
 * Storybook Main Configuration: https://storybook.js.org/docs/configurations/overview/#main-configuration
 */

module.exports = {
    // Declare where storybook stories are located plus file types
    stories: ["../src/**/*.stories.@(js|mdx)"],

    // Register installed storybook addons
    addons: [
        "@storybook/addon-a11y",
        "@storybook/addon-actions",
        "@storybook/addon-controls",
        "@storybook/addon-docs",
        "@storybook/addon-links",
        "@storybook/addon-viewport",
        "storybook-addon-designs",
    ],

    webpackFinal: async config => {
        // Set the NODE_ENV to 'production' by default, to allow babel-plugin-remove-graphql-queries to remove static queries
        process.env.NODE_ENV = "production"

        // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
        config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]

        // Use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
        config.module.rules[0].use[0].loader = require.resolve("babel-loader")

        // Use @babel/preset-react for JSX and env (instead of staged presets)
        config.module.rules[0].use[0].options.presets = [
            require.resolve("@babel/preset-react"),
            require.resolve("@babel/preset-env"),
        ]

        config.module.rules[0].use[0].options.plugins = [
            // Use @babel/plugin-proposal-class-properties for class arrow functions
            require.resolve("@babel/plugin-proposal-class-properties"),

            // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
            require.resolve("babel-plugin-remove-graphql-queries"),
        ]

        // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
        config.resolve.mainFields = ["browser", "module", "main"]

        // Add TypeScript Support
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            loader: require.resolve("babel-loader"),
            options: {
                presets: [
                    [
                        "react-app",
                        {
                            flow: false,
                            typescript: true,
                        },
                    ],
                ],
                plugins: [
                    require.resolve("@babel/plugin-proposal-class-properties"),

                    // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
                    require.resolve("babel-plugin-remove-graphql-queries"),
                ],
            },
        })
        config.resolve.extensions.push(".ts", ".tsx")

        return config
    },
}
