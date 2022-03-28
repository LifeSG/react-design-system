module.exports = (api) => {
	const isTest = api.env("test");

	const presets = ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'];
	const plugins = isTest ? [] : [
		['babel-plugin-styled-components', { displayName: true }]
	];

	return {
		presets, plugins
	}
};
