export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "portfolio",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/vue-mask.js", "~/plugins/vue-observe-visibility.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      "~/components",
      "~/components/layout",
      "~/components/cards",
      "~/components/forms",
      "~components/tabs",
      "~components/sections",
      "~components/sections/home",
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/google-fonts",
    "@braid/vue-formulate/nuxt",
    [
      "@nuxt/image",
      {
        provider: "static",
      },
    ],
  ],

  // Google Fonts
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700, 900],
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    ["nuxt-buefy", { css: false }],
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxt/image",
  ],

  image: {
    domains: ["imgur.com", "i.imgur.com", "https://nuxtjs.org"],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  // content prism theme
  content: {
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-lucario.css",
      },
    },
    liveEdit: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [["@babel/plugin-proposal-private-methods", { loose: true }]],
    },
    // analyze: true,
  },
}
