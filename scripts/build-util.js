const path = require("path");

export const injectCss = (cssVariableName, fileId) => {
    const module = path.relative(".", fileId);

    // known .css imports will be mapped to a unique id to prevent duplicate
    // injection as much as possible
    const moduleIdMap = {
        "node_modules/@govtechsg/sgds-web-component/themes/night.css":
            "lifesg-ds-masthead-stylesheet-night",
        "node_modules/@govtechsg/sgds-web-component/themes/day.css":
            "lifesg-ds-masthead-stylesheet-day",
    };
    const id = moduleIdMap[module] ? `"${moduleIdMap[module]}"` : undefined;

    return `
        function injectStyle(css, id) {
            if (typeof document === "undefined" || !css) return;

            var head = document.head || document.getElementsByTagName('head')[0];
            var style = document.createElement('style');
            style.type = 'text/css';
            if (id) {
                var existingStyle = document.getElementById(id);
                if (existingStyle) return;

                style.id = id;
            }
            head.appendChild(style);
            style.appendChild(document.createTextNode(css));
        }
        injectStyle(${cssVariableName},${id})
    `;
};
