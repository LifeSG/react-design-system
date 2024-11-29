import { API, FileInfo, JSCodeshift } from "jscodeshift";

// ======= Constants ======= //

const IMPORT_PATHS = {
    TEXT_LIST: "@lifesg/react-design-system/text-list",
    V2_TEXT_LIST: "@lifesg/react-design-system/v2_text-list",
    DESIGN_SYSTEM: "@lifesg/react-design-system",
};

const IMPORT_SPECIFIERS = {
    TEXT_LIST: "TextList",
    V2_TEXT_LIST: "V2_TextList",
};

const JSX_IDENTIFIERS = {
    TEXT_LIST: "TextList",
    V2_TEXT_LIST: "V2_TextList",
};

// ======= Transformer Function ======= //

export default function transformer(file: FileInfo, api: API) {
    const j: JSCodeshift = api.jscodeshift;
    const source = j(file.source);

    let isV2TextListImport = false;

    source.find(j.ImportDeclaration).forEach((path) => {
        const importPath = path.node.source.value;

        if (
            importPath === IMPORT_PATHS.V2_TEXT_LIST ||
            importPath === IMPORT_PATHS.DESIGN_SYSTEM
        ) {
            path.node.specifiers?.forEach((specifier) => {
                if (
                    j.ImportSpecifier.check(specifier) &&
                    specifier.imported.name === IMPORT_SPECIFIERS.V2_TEXT_LIST
                ) {
                    specifier.imported.name = IMPORT_SPECIFIERS.TEXT_LIST;

                    if (
                        specifier.local &&
                        specifier.local.name === IMPORT_SPECIFIERS.V2_TEXT_LIST
                    ) {
                        specifier.local.name = IMPORT_SPECIFIERS.TEXT_LIST;
                    }

                    if (importPath === IMPORT_PATHS.V2_TEXT_LIST) {
                        path.node.source.value = IMPORT_PATHS.TEXT_LIST;
                    }

                    isV2TextListImport = true;
                }
            });
        }
    });

    if (isV2TextListImport) {
        source
            .find(j.Identifier, { name: JSX_IDENTIFIERS.V2_TEXT_LIST })
            .forEach((path) => {
                path.node.name = JSX_IDENTIFIERS.TEXT_LIST;
            });

        source.find(j.MemberExpression).forEach((path) => {
            if (
                j.Identifier.check(path.node.object) &&
                path.node.object.name === JSX_IDENTIFIERS.V2_TEXT_LIST
            ) {
                path.node.object.name = JSX_IDENTIFIERS.TEXT_LIST;
            }
        });
    }

    return source.toSource();
}
