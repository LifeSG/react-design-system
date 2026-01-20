const presets = [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
    "@babel/preset-typescript",
    "@wyw-in-js",
];
const plugins = [["babel-plugin-styled-components", { displayName: true }]];

module.exports = {
    evaluate: true,
    displayName: false,
    babelOptions: {
        presets,
        plugins,
    },
};
