import { ThemeSpec } from "../../src/theme/types";

export const mockTheme: ThemeSpec = {
    colourScheme: "lifesg",
    fontScheme: "lifesg",
    animationScheme: "lifesg",
    borderScheme: "lifesg",
    spacingScheme: "lifesg",
    radiusScheme: "lifesg",
    breakpointScheme: "lifesg",
};

export const mockOverrideTheme: ThemeSpec = {
    colourScheme: "lifesg",
    fontScheme: "lifesg",
    animationScheme: "lifesg",
    borderScheme: "lifesg",
    spacingScheme: "lifesg",
    radiusScheme: "lifesg",
    breakpointScheme: "lifesg",
    overrides: {
        primitiveColour: {
            "neutral-20": "#9D00FF",
        },
    },
};
