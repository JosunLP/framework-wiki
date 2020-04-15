/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'JosunLP',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/Logo-Jonas-min.png',
    infoLink: 'https://gitlab.com/JosunLP',
    pinned: true,
  },
];

const siteConfig = {
  title: 'WAPS Framework', // Title for your website.
  tagline: 'A PHP web app framework. It\'s designed to make small future projects faster and easier.' +
      ' The focus is on PHP backend systems and thanks to its modularity it supports a wide range of projects.' +
      ' This entire framework has emerged as a learning project and is being developed continuously.\n' +
      '\n',
  url: 'https://waps-framework.info/', // Your website URL
  baseUrl: '/', // Base URL for your project */

  // Used for publishing and more
  projectName: 'WAPS Framework',
  organizationName: 'WAPS Framework Team',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'doc1', label: 'Docs'},
    {doc: 'apiRef', label: 'API'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/waps-white.png',
  footerIcon: 'img/fav.png',
  favicon: 'img/fav.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#F56262',
    secondaryColor: 'lightgrey',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} WAPS Framework Team`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'dark',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  twitterUsername: 'JolunJonas',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://gitlab.com/webapp-php-sample/framework',
};

module.exports = siteConfig;
