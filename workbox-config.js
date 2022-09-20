module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{js,png,html,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};