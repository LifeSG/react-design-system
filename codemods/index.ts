import type {
    API,
    FileInfo,
    JSCodeshift,
    JSXAttribute,
    JSXElement,
    Literal,
    Property,
} from "jscodeshift";

import { CodemodUtils } from "../codemod-utils";

// =============================================================================
// CONSTANTS
// =============================================================================

const OLD_IMPORT_PATHS = {
    V2_POPOVER: "@lifesg/react-design-system/popover-v2",
    V1_POPOVER: "@lifesg/react-design-system/popover",
    DESIGN_SYSTEM: "@lifesg/react-design-system",
};

const NEW_IMPORT_PATHS = {
    POPOVER: "@lifesg/react-design-system/popover",
};

const OLD_IDENTIFIERS = {
    V2_POPOVER: "PopoverV2",
    V2_POPOVER_TRIGGER: "PopoverTrigger",
    V1_POPOVER: "Popover",
    V1_POPOVER_TRIGGER: "withPopover",
};

const NEW_IDENTIFIERS = {
    POPOVER: "Popover",
    POPOVER_TRIGGER: "PopoverTrigger",
};

const TYPING_MAP = {
    PopoverV2Props: "PopoverProps",
    PopoverRenderProps: "PopoverRenderProps",
    PopoverV2TriggerType: "PopoverTriggerType",
    PopoverOverflowType: "PopoverOverflowType",
    PopoverV2Position: "PopoverPosition",
    PopoverV2TriggerProps: "PopoverTriggerProps",
    PopoverInlineStyle: "PopoverInlineStyle",
    PopoverInlineProps: "PopoverInlineProps",
    PopoverInline: "PopoverInline",
};

// =============================================================================
// TRANSFORMER
// =============================================================================

export default function transformer(file: FileInfo, api: API) {
    const j: JSCodeshift = api.jscodeshift;
    const source = j(file.source);

    // =========================================================================
    // Migrate Popover to PopoverV2 usage
    // =========================================================================

    const isV1PopoverImport = CodemodUtils.hasImport(
        source,
        api,
        [OLD_IMPORT_PATHS.DESIGN_SYSTEM, OLD_IMPORT_PATHS.V1_POPOVER],
        OLD_IDENTIFIERS.V1_POPOVER
    );

    if (isV1PopoverImport) {
        CodemodUtils.replaceImport(
            source,
            api,
            [OLD_IMPORT_PATHS.DESIGN_SYSTEM, OLD_IMPORT_PATHS.V1_POPOVER],
            OLD_IDENTIFIERS.V1_POPOVER,
            OLD_IMPORT_PATHS.V2_POPOVER,
            OLD_IDENTIFIERS.V2_POPOVER
        );

        // simple 1:1 rename as there are no breaking changes to the props
        source
            .find(j.JSXIdentifier, { name: OLD_IDENTIFIERS.V1_POPOVER })
            .forEach((path) => {
                path.node.name = OLD_IDENTIFIERS.V2_POPOVER;
            });
    }

    const isV1PopoverTriggerImport = CodemodUtils.hasImport(
        source,
        api,
        [OLD_IMPORT_PATHS.DESIGN_SYSTEM, OLD_IMPORT_PATHS.V1_POPOVER],
        OLD_IDENTIFIERS.V1_POPOVER_TRIGGER
    );

    if (isV1PopoverTriggerImport) {
        let successCount = 0;
        let failureCount = 0;

        source
            .find(j.CallExpression, {
                callee: { name: OLD_IDENTIFIERS.V1_POPOVER_TRIGGER },
            })
            .forEach((path) => {
                const [triggerComponent, options] = path.node.arguments;

                let triggerAsJSXElement: JSXElement;

                if (j.Identifier.check(triggerComponent)) {
                    triggerAsJSXElement = j.jsxElement(
                        j.jsxOpeningElement(
                            j.jsxIdentifier(triggerComponent.name),
                            [],
                            true
                        )
                    );
                    successCount++;
                } else if (j.JSXElement.check(triggerComponent)) {
                    triggerAsJSXElement = triggerComponent;
                    successCount++;
                } else {
                    failureCount++;
                    return;
                }

                const attributes: JSXAttribute[] = [];

                if (j.ObjectExpression.check(options)) {
                    const trigger = options.properties.find(
                        (prop) =>
                            j.ObjectProperty.check(prop) &&
                            j.Identifier.check(prop.key) &&
                            prop.key.name === "trigger"
                    ) as Property;

                    if (trigger && j.Literal.check(trigger.value)) {
                        attributes.push(
                            j.jsxAttribute(
                                j.jsxIdentifier("trigger"),
                                trigger.value
                            )
                        );
                    }

                    const content = options.properties.find(
                        (prop) =>
                            j.ObjectProperty.check(prop) &&
                            j.Identifier.check(prop.key) &&
                            prop.key.name === "content"
                    ) as Property;

                    if (content) {
                        attributes.push(
                            j.jsxAttribute(
                                j.jsxIdentifier("popoverContent"),
                                content.value as Literal | JSXElement
                            )
                        );
                    }
                }

                path.replace(
                    j.jsxElement(
                        j.jsxOpeningElement(
                            j.jsxIdentifier(NEW_IDENTIFIERS.POPOVER_TRIGGER),
                            attributes
                        ),
                        j.jsxClosingElement(
                            j.jsxIdentifier(NEW_IDENTIFIERS.POPOVER_TRIGGER)
                        ),
                        [triggerAsJSXElement]
                    )
                );
            });

        if (successCount) {
            CodemodUtils.addImport(
                source,
                api,
                NEW_IMPORT_PATHS.POPOVER,
                NEW_IDENTIFIERS.POPOVER_TRIGGER
            );
        }

        if (failureCount) {
            console.warn(
                `\x1b[31m[MIGRATION] Unable to migrate withPopover at file:\x1b[0m ${file.path}`
            );
        } else {
            CodemodUtils.removeImport(
                source,
                api,
                [OLD_IMPORT_PATHS.DESIGN_SYSTEM, OLD_IMPORT_PATHS.V1_POPOVER],
                OLD_IDENTIFIERS.V1_POPOVER_TRIGGER
            );
        }
    }

    // =========================================================================
    // Migrate PopoverV2 to new import path and specifiers
    // =========================================================================

    const isV2PopoverImport = CodemodUtils.hasImport(
        source,
        api,
        [OLD_IMPORT_PATHS.DESIGN_SYSTEM, OLD_IMPORT_PATHS.V2_POPOVER],
        OLD_IDENTIFIERS.V2_POPOVER
    );

    if (isV2PopoverImport) {
        CodemodUtils.replaceImport(
            source,
            api,
            [OLD_IMPORT_PATHS.DESIGN_SYSTEM, OLD_IMPORT_PATHS.V2_POPOVER],
            OLD_IDENTIFIERS.V2_POPOVER,
            NEW_IMPORT_PATHS.POPOVER,
            NEW_IDENTIFIERS.POPOVER
        );

        source
            .find(j.JSXIdentifier, {
                name: OLD_IDENTIFIERS.V2_POPOVER,
            })
            .forEach((path) => {
                path.node.name = NEW_IDENTIFIERS.POPOVER;
            });
    }

    const isV2PopoverTriggerImport = CodemodUtils.hasImport(
        source,
        api,
        [OLD_IMPORT_PATHS.DESIGN_SYSTEM, OLD_IMPORT_PATHS.V2_POPOVER],
        OLD_IDENTIFIERS.V2_POPOVER_TRIGGER
    );

    if (isV2PopoverTriggerImport) {
        CodemodUtils.replaceImport(
            source,
            api,
            [OLD_IMPORT_PATHS.DESIGN_SYSTEM, OLD_IMPORT_PATHS.V2_POPOVER],
            OLD_IDENTIFIERS.V2_POPOVER_TRIGGER,
            NEW_IMPORT_PATHS.POPOVER,
            NEW_IDENTIFIERS.POPOVER_TRIGGER
        );
    }

    Object.entries(TYPING_MAP).forEach(([oldType, newType]) => {
        if (
            CodemodUtils.hasImport(
                source,
                api,
                [OLD_IMPORT_PATHS.DESIGN_SYSTEM, OLD_IMPORT_PATHS.V2_POPOVER],
                oldType
            )
        ) {
            CodemodUtils.replaceImport(
                source,
                api,
                [OLD_IMPORT_PATHS.DESIGN_SYSTEM, OLD_IMPORT_PATHS.V2_POPOVER],
                oldType,
                NEW_IMPORT_PATHS.POPOVER,
                newType
            );
        }
    });

    return source.toSource();
}
