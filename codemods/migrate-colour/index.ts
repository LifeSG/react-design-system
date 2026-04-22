import { API, FileInfo, JSCodeshift } from "jscodeshift";
import { CodemodUtils } from "../codemod-utils";
import { Theme } from "../common";
import {
    bookingSgMapping,
    ccubeMapping,
    lifesgMapping,
    mylegacyMapping,
    oneServiceMapping,
    rbsMapping,
} from "./data";

const IMPORT_PATHS = {
    V2_COLOR: "@lifesg/react-design-system/v2_color",
    DESIGN_SYSTEM: "@lifesg/react-design-system",
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
    oneservice: oneServiceMapping,
};

interface Options {
    mapping: Theme;
}

export default function transformer(
    file: FileInfo,
    api: API,
    options: Options
) {
    const j: JSCodeshift = api.jscodeshift;
    const source = j(file.source);

    const isV2ColorImport = CodemodUtils.hasImport(
        source,
        api,
        [IMPORT_PATHS.DESIGN_SYSTEM, IMPORT_PATHS.V2_COLOR],
        IMPORT_SPECIFIERS.V2_COLOR
    );

    // Determine which Colour mapping to use
    const colorMapping =
        COLOR_MAPPINGS[options.mapping] || COLOR_MAPPINGS[Theme.LifeSG];

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

    if (isV2ColorImport) {
        CodemodUtils.addImport(
            source,
            api,
            IMPORT_PATHS.THEME,
            IMPORT_SPECIFIERS.COLOUR
        );

        CodemodUtils.removeImport(
            source,
            api,
            [IMPORT_PATHS.DESIGN_SYSTEM, IMPORT_PATHS.V2_COLOR],
            IMPORT_SPECIFIERS.V2_COLOR
        );

        // Map V2 Color usage to V3 Colour
        source.find(j.MemberExpression).forEach((path) => {
            const objectPath = CodemodUtils.getObjectPath(source, api, path);
            const prefix = IMPORT_SPECIFIERS.V2_COLOR + ".";
            if (objectPath && objectPath.startsWith(prefix)) {
                const colour = objectPath.slice(prefix.length);
                const newColorValue =
                    colorMapping[colour as keyof typeof colorMapping];
                if (newColorValue) {
                    replaceWithColorPrimitive(path, newColorValue);
                }
            }
        });
    }

    return source.toSource();
}
