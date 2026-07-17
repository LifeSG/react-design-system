import type { ThemeType } from "../../src/theme";

export const THEME_TYPE_TO_KEY_MAPPING: Record<ThemeType, string> = {
    "a11y-playground": "A11y Playground",
    bookingsg: "BookingSG",
    careercompass: "CareerCompass",
    ccube: "CCube",
    imda: "IMDA",
    lifesg: "LifeSG",
    mylegacy: "MyLegacy",
    oneservice: "OneService",
    pa: "PA",
    rbs: "RBS",
    "sgw-digital-lobby": "SGW Digital Lobby",
    smgs: "SMGS",
    spf: "SPF",
    supportgowhere: "SupportGoWhere",
};

export type ThemeMapKey =
    (typeof THEME_TYPE_TO_KEY_MAPPING)[keyof typeof THEME_TYPE_TO_KEY_MAPPING];

export const THEME_KEY_TO_TYPE_MAPPING: Record<ThemeMapKey, ThemeType> =
    Object.fromEntries(
        Object.entries(THEME_TYPE_TO_KEY_MAPPING).map(([key, value]) => [
            value as ThemeMapKey,
            key as ThemeType,
        ])
    );
