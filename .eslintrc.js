// http://eslint.org/docs/user-guide/configuring

module.exports = {
	env: {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"node": true
	},
	// https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
	// required to lint *.vue files
	// add your custom rules here
	'rules': {
		'indent': ['error', 4],
		'no-mixed-spaces-and-tabs': 2,
		"brace-style": [2, "1tbs", { "allowSingleLine": true }],
		// allow paren-less arrow functions
		'arrow-parens': 0,
		// allow async-await
		'generator-star-spacing': 0,
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
	}
}
