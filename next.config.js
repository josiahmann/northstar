/** @type {import('next').NextConfig} */

module.exports = {
    // basePath: '/admin',
	reactStrictMode: true,
	env: {
		MONGODB_URI:
			this.env.MONGODB_URI,
	},
};
