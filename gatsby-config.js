module.exports = {
  siteMetadata: {
    title: `Liść`,
    description: `Serwer minecraft.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#e5ffe7`,
        theme_color: `#18601e`,
        display: `minimal-ui`,
        icon: `src/images/lisc.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-mdx`,
  ],
}
