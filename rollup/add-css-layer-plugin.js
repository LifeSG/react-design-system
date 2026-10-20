import madge from "madge";
import {
    getStyledFolders,
    getStyleEdges,
    orderByStyleEdges,
} from "./style-edges.js";

const EXCLUDE = new Set(["custom-types", "util", "__mocks__"]);

// Style edges the scan reports that do not collide on the rendered element. Each
// entry needs a reason; an unlisted edge that closes a cycle fails the build.
const NOT_COLLIDING = [
    {
        parent: "shared",
        child: "button",
        via: "<Button .controlButton>",
        reason: "Button sets `width` only for icon-only buttons; the timepicker's control buttons have text",
    },
];

const getImportOrder = () =>
    madge("src/index.ts").then((res) => {
        const graph = res.obj();
        const folderDeps = {};

        for (const [file, deps] of Object.entries(graph)) {
            const folder = file.split("/")[0];
            if (EXCLUDE.has(folder)) continue;

            if (!folderDeps[folder]) folderDeps[folder] = new Set();
            for (const dep of deps) {
                const depFolder = dep.split("/")[0];
                if (depFolder !== folder && !EXCLUDE.has(depFolder)) {
                    folderDeps[folder].add(depFolder);
                }
            }
        }

        const allFolders = new Set(Object.keys(folderDeps));
        for (const deps of Object.values(folderDeps)) {
            for (const dep of deps) allFolders.add(dep);
        }

        // DFS reverse-postorder topological sort
        const visited = new Set();
        const onStack = new Set();
        const order = [];

        function dfs(folder) {
            if (visited.has(folder)) return;
            visited.add(folder);
            onStack.add(folder);
            for (const dep of [...(folderDeps[folder] || [])].sort()) {
                if (!onStack.has(dep)) dfs(dep);
            }
            onStack.delete(folder);
            order.push(folder);
        }

        for (const folder of [...allFolders].sort()) {
            dfs(folder);
        }

        const output = order.filter((f) => f !== "index.ts");
        return output;
    });

const isExempt = (edge) =>
    NOT_COLLIDING.some(
        (x) =>
            x.parent === edge.parent &&
            x.child === edge.child &&
            x.via === edge.via
    );

// Style edges decide the order; the import order only breaks ties between folders
// that have no style edge between them. madge walks from src/index.ts, so folders
// exported only as subpaths (schedule, local-nav) are missing from it; they are
// appended so they get a declared layer instead of ranking by load order.
export const getCssLayerOrder = async () => {
    const importOrder = await getImportOrder();
    const folders = [
        ...importOrder,
        ...getStyledFolders("src").filter((f) => !importOrder.includes(f)),
    ];
    const edges = getStyleEdges("src").filter((e) => !isExempt(e));
    return { importOrder, edges, order: orderByStyleEdges(folders, edges) };
};

export const getCssLayer = async () => {
    const { order } = await getCssLayerOrder();
    return `@layer ${order.map((folder) => `fds.${folder}`).join(",")};`;
};
