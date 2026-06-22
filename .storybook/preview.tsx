import type { Preview } from "@storybook/react-webpack5";
import { INITIAL_VIEWPORTS } from "storybook/viewport";
import { withThemeFromJSXProvider } from "./decorators/theme-decorator";
import {
    ArgTypes,
    Title,
    Subtitle,
    Description,
    Primary,
    Stories,
    Controls,
} from "@storybook/addon-docs/blocks";
import { storybookArgTypesByTitle } from "./generated/storybook-argtypes.generated";

import "./preview.css";
import {
    ArgTypesEnhancer,
    StrictArgTypes,
    StrictInputType,
} from "storybook/internal/csf";

// Generated argTypes come from our custom script, not directly from Storybook.
// The generator may emit `control: false` to mark props as docs-only rows.
type GeneratedArgType = Omit<StrictInputType, "control"> & {
    control?: StrictInputType["control"] | boolean;
};

const toStrictArgTypes = (
    argTypes?: Record<string, GeneratedArgType>
): StrictArgTypes => {
    if (!argTypes) {
        return {};
    }

    return Object.fromEntries(
        Object.entries(argTypes).map(([name, argType]) => {
            const { control, ...restArgType } = argType;

            return [
                name,
                // Storybook's strict argTypes shape does not expect `control: false`
                // in the final object. When the generator disables a control, we drop
                // the field entirely so the row still appears in docs as static metadata.
                control === false ? restArgType : { ...restArgType, control },
            ];
        })
    ) as StrictArgTypes;
};

// Merge Storybook's inferred argTypes with generated argTypes for the current story.
// The generated values are keyed by story title, which lets us enrich docs output without
// repeating argTypes definitions inside each story file.
const argTypesEnhancers: ArgTypesEnhancer = ({ argTypes, title }) => {
    const extraArgTypes = title
        ? storybookArgTypesByTitle[
              title as keyof typeof storybookArgTypesByTitle
          ]
        : undefined;

    return {
        // Keep Storybook's inferred metadata first.
        ...(argTypes ?? {}),
        // Overlay generated metadata so JSDoc/type-derived descriptions win when present.
        ...toStrictArgTypes(extraArgTypes),
    };
};

const preview: Preview = {
    decorators: [withThemeFromJSXProvider()],
    argTypesEnhancers: [argTypesEnhancers],
    parameters: {
        options: {
            storySort: {
                order: [
                    "Getting started",
                    "Installation",
                    "Foundations",
                    [
                        "Introduction",
                        "Basics",
                        "Advanced",
                        "Colours",
                        "Font",
                        "Breakpoint",
                        "Spacing",
                        "Motion",
                        "Radius",
                        "Border",
                        "Shadow",
                    ],
                    "Core",
                    ["Typography", "Layout", "Icon", "DashedBorder"],
                    "Content",
                    "Navigation",
                    "Selection and input",
                    ["Button", ["Base", "With Icon"]],
                    "Feedback indicators",
                    "Overlays",
                    "General",
                    ["Animations", "*"],
                    "Form",
                    "Data Input",
                    "Modules",
                ],
            },
        },
        actions: { disable: true },
        controls: { disable: true },
        layout: "centered",
        viewport: {
            options: INITIAL_VIEWPORTS,
        },
        darkMode: {
            stylePreview: true,
            darkClass: "storybook-dark-mode",
            lightClass: "storybook-light-mode",
        },
        docs: {
            codePanel: true,
            page: () => (
                <>
                    <Title />
                    <Subtitle />
                    <Description />
                    <Primary />

                    {/* Static props table: no Control column */}
                    <ArgTypes />
                    {/* Dynamic props table with Control */}
                    <Controls />

                    <Stories />
                </>
            ),
        },
    },
};

export default preview;
