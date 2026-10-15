import madge from "madge";

const EXCLUDE = new Set(["custom-types", "util", "__mocks__"]);

const getCssLayerOrder = () =>
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

export const getCssLayer = async () => {
    const order = await getCssLayerOrder();
    return `@layer ${order.map((folder) => `fds.${folder}`).join(",")};`;
};
