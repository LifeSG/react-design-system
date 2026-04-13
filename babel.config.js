module.exports = (api) => {
    const isTest = api.env("test");

    const presets = [
        "@babel/preset-env",
        ["@babel/preset-react", { runtime: "automatic" }],
        "@babel/preset-typescript",
    ];
    const plugins = isTest
        ? ["./babel-plugins/babel-plugin-inject-linaria-css.js"]
        : [["babel-plugin-styled-components", { displayName: true }]];

    return {
        presets,
        plugins,
    };
};
