"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true,
});
exports.default = wywInJS;
var _transform = require("./babel-plugin-inject-linaria-css");

function isEnabled(caller) {
    return (
        (caller === null || caller === void 0 ? void 0 : caller.name) !==
            "wyw-in-js" || caller.evaluate === true
    );
}
function wywInJS(babel, options) {
    if (!babel.caller(isEnabled)) {
        return {};
    }
    return {
        plugins: [[_transform, options]],
    };
}
//# sourceMappingURL=index.js.map
