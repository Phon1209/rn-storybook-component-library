import { mergeConfig } from "vite";
import process from "node:process";
import { fileURLToPath } from "node:url";

const svgWebEntry = fileURLToPath(
  new URL("./react-native-svg.web.js", import.meta.url),
);

/** @type {import('@storybook/react-vite').StorybookConfig} */
const config = {
  // Find component stories colocated with their source files.
  stories: ["../src/**/*.stories.@(js|jsx)"],

  // Add documentation generation and accessibility testing.
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],

  // Build and render Storybook with React and Vite.
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  // Automatically generate documentation from component stories.
  docs: {
    autodocs: true,
  },

  // Extend Storybook's generated Vite configuration.
  async viteFinal(currentConfig) {
    return mergeConfig(currentConfig, {
      // Support hosting Storybook at a subpath; default to the site root.
      base: process.env.STORYBOOK_BASE_PATH || "/",

      // Provide the Node-style `global` name expected by some dependencies.
      define: {
        global: "globalThis",
      },

      optimizeDeps: {
        exclude: ["react-native-svg"],
      },

      // Keep components written for React Native while rendering them on the web.
      resolve: {
        alias: [
          { find: /^react-native$/, replacement: "react-native-web" },
          { find: /^react-native-svg$/, replacement: svgWebEntry },
        ],
      },
    });
  },
};

export default config;
