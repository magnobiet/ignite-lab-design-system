module.exports = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "storybook-addon-designs",
    "@storybook/addon-jest"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite",
    "disableTelemetry": true
  },
  "features": {
    "storyStoreV7": true,
    "interactionsDebugger": true
  },
  "staticDirs": [
    "../public"
  ],
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/ignite-lab-design-system/';
    }

    return config;
  }
}
