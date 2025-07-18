const fs = require("fs");
const path = require("path");

export const getFolders = (entry) => {
    const dirs = fs.readdirSync(entry);

    // folders without an index.ts
    const dirsToIgnore = [
        "custom-types",
        "shared",
        "util",
        "v2_spec",
        "__mocks__",
        "spec", 
    ];

    const dirsToUse = dirs
        .filter((dirName) => path.extname(dirName) === "") // exclude non-folders
        .filter((dirName) => dirsToIgnore.indexOf(dirName) === -1)
        .filter((dirName) => !dirName.startsWith(".")); // Exclude hidden files/folders like .DS_Store

    return dirsToUse;
};
