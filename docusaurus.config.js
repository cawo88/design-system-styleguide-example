// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Styleguide",
  tagline: "An example of a design system styleguide powered by Docusaurus.",
  url: "https://design-system-styleguide-example.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "cawo88",
  projectName: "design system styleguide example",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/cawo88/design-system-styleguide-example",
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/tailwind.css"),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Demo",
        logo: {
          alt: "Demo Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "docs/components/button",
            label: "Components",
            position: "right",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
          },
          {
            href: "https://github.com/cawo88/design-system-styleguide-example",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Demo, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
