module.exports = {
  siteMetadata: {
    title: "Sergei Chestakov - Portfolio",
    author: "Sergei Chestakov",
    description: "Personal Portfolio for Sergei Chestakov",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Sergei Chestakov - Portfolio",
        short_name: "Sergei",
        start_url: "/",
        background_color: "#212121",
        theme_color: "#212121",
        display: "minimal-ui",
        icon: "src/assets/images/favicon.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
  ],
};
