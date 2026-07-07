import { addons } from "storybook/manager-api";

addons.setConfig({
    sidebar: {
        // exclude stories with the specified tag from the sidebar
        filters: {
            patterns: (item) =>
                ["pattern"].every((tag) => !item.tags.includes(tag)),
        },
    },
});
