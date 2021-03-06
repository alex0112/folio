module.exports = {
    siteMetadata: {
	title: `Alex Larsen`,
	description: `A small portfolio site.`,
	author: `Alex Larsen`,
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
	`gatsby-plugin-fontawesome-css`,
	`gatsby-plugin-sharp`,
	{
	    resolve: `gatsby-plugin-manifest`,
	    options: {
		name: `gatsby-starter-default`,
		short_name: `starter`,
		start_url: `/`,
		background_color: `#663399`,
		theme_color: `#663399`,
		display: `minimal-ui`,
		icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
	    },
	},

	{
	    resolve: 'gatsby-plugin-web-font-loader',
	    options: {
		google: {
		    families: [`EB Garamond`, `Libre Baskerville`, `Noto Serif`, `Piazzolla`, `Press Start 2P`, `PT Mono`, `Anonymous Pro`, `Fredericka the Great`, `Rye`]
		}
	    }
	},
    ],
}
