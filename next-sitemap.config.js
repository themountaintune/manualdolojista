/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.SITE_URL || 'https://manualdolojista.vercel.app',
	generateRobotsTxt: true,
	outDir: 'out',
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: 'https://manualdolojista.vercel.app',
	generateRobotsTxt: true,
	changefreq: 'weekly',
	priority: 0.7,
	outDir: 'out',
};


