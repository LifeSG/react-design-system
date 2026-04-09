import { LanguageCode } from "./types";

export const LANGUAGE_DISPLAY_MAP: Record<LanguageCode, string> = {
    en: "English",
    zh: "中文",
    ms: "Melayu",
    ta: "தமிழ்",
};

export const LANGUAGE_CODES: LanguageCode[] = ["en", "zh", "ms", "ta"];

export const ARIA_LABEL =
    "Choose language / 选择语言 / Pilih bahasa / மொழியை தேர்ந்தெடுக்கவும்";
