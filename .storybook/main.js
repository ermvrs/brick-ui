module.exports = {
    stories: ["../dist/**/*.stories.mdx", "../dist/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
      {
        name: "@storybook/addon-essentials",
        options: {
          backgrounds: false,
        },
      },
      "@storybook/addon-links",
      "@storybook/addon-a11y",
      "themeprovider-storybook/register",
      '@storybook/addon-docs'
    ],
    framework: "@storybook/react"
  };