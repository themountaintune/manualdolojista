/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.SITE_URL || 'https://manualdolojista.vercel.app',
	generateRobotsTxt: true,
	outDir: 'out',
};
