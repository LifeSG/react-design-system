import { addons } from "@storybook/manager-api";

addons.setConfig({
    sidebar: {
        filters: {
            patterns: (item) => {
                return (
                    !item.tags.includes("pattern") && !item.tags.includes("e2e")
                );
            },
        },
    },
});
