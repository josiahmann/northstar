/** @type {import('next').NextConfig} */
module.exports = {
    // basePath: '/admin',
	reactStrictMode: true,
	env: {
		MONGODB_URI: process.env.MONGODB_URI,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
	},
};
