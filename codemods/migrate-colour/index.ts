import { API, FileInfo, JSCodeshift } from "jscodeshift";
import {
    bookingSgMapping,
    ccubeMapping,
    lifesgMapping,
    mylegacyMapping,
    rbsMapping,
} from "./data";

const IMPORT_PATHS = {
    V2_COLOR: "@lifesg/react-design-system/v2_color",
    THEME: "@lifesg/react-design-system/theme",
};

const IMPORT_SPECIFIERS = {
    V2_COLOR: "V2_Color",
    COLOUR: "Colour",
};

const MEMBER_EXPRESSION_PROPERTIES = {
    PRIMITIVE: "Primitive",
};

const COLOR_MAPPINGS = {
    lifesg: lifesgMapping,
    bookingsg: bookingSgMapping,
    mylegacy: mylegacyMapping,
    ccube: ccubeMapping,
    rbs: rbsMapping,
};

export default function transformer(file: FileInfo, api: API, options: any) {
    const j: JSCodeshift = api.jscodeshift;
    const source = j(file.source);

    let isv2ColorImport = false;

    // Determine which Colour mapping to use
    const colorMapping =
        COLOR_MAPPINGS[options.mapping] || COLOR_MAPPINGS.lifesg;

    //Update Colour usage post mapping
    const replaceWithColorPrimitive = (path: any, new_color_value: string) => {
        path.replace(
            j.memberExpression(
                j.memberExpression(
                    j.identifier(IMPORT_SPECIFIERS.COLOUR),
                    j.identifier(MEMBER_EXPRESSION_PROPERTIES.PRIMITIVE)
                ),
                j.literal(new_color_value)
            )
        );
    };

    source.find(j.ImportDeclaration).forEach((path) => {
        const importPath = path.node.source.value;

        if (importPath === IMPORT_PATHS.V2_COLOR) {
            isv2ColorImport = true;

            // Update imports
            if (path.node.specifiers && path.node.specifiers.length > 0) {
                path.node.specifiers.forEach((specifier) => {
                    if (j.ImportSpecifier.check(specifier)) {
                        if (
                            specifier.imported.name ===
                            IMPORT_SPECIFIERS.V2_COLOR
                        ) {
                            specifier.imported.name = IMPORT_SPECIFIERS.COLOUR;
                            if (
                                specifier.local &&
                                specifier.local.name ===
                                    IMPORT_SPECIFIERS.V2_COLOR
                            ) {
                                specifier.local.name = IMPORT_SPECIFIERS.COLOUR;
                            }
                        }
                    }
                });

                path.node.source.value = IMPORT_PATHS.THEME;
            }
        }
    });

    if (isv2ColorImport) {
        // Update all instances of 'V2_Color' to 'Colour'
        source
            .find(j.Identifier, { name: IMPORT_SPECIFIERS.V2_COLOR })
            .forEach((path) => {
                path.node.name = IMPORT_SPECIFIERS.COLOUR;
            });

        // Map V2 Color usage to V3 Colour
        source.find(j.MemberExpression).forEach((path) => {
            let currentPath = path.node;
            const propertyNameParts: string[] = [];
            let index: number | null = null;
            let startsWithColour = false;

            while (j.MemberExpression.check(currentPath)) {
                const property = currentPath.property;
                const object = currentPath.object;

                if (j.Literal.check(property)) {
                    const value = property.value;
                    if (typeof value === "number") {
                        index = value;
                    } else {
                        index = null;
                    }
                } else if (j.Identifier.check(property)) {
                    propertyNameParts.unshift(property.name);
                }

                if (j.MemberExpression.check(object)) {
                    currentPath = object;
                } else if (j.Identifier.check(object)) {
                    if (object.name === IMPORT_SPECIFIERS.COLOUR) {
                        startsWithColour = true;
                    }
                    break;
                } else {
                    break;
                }
            }

            if (startsWithColour) {
                let property_name = propertyNameParts.join(".");
                if (index !== null) {
                    property_name += `[${index}]`;
                }

                const newColorValue = colorMapping[property_name];
                if (newColorValue) {
                    replaceWithColorPrimitive(path, newColorValue);
                }
            }
        });
    }

    return source.toSource();
}
