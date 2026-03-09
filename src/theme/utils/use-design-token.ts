import { useEffect, useState } from "react";
import { useTheme } from "../theme-provider/hooks";
import { CSSVariableString } from "../types";
import { parseCSSVariableValue } from "./css-variable";

export const useDesignToken = (
    tokenName: CSSVariableString
): string | undefined => {
    const { theme, mode } = useTheme();
    const [value, setValue] = useState<string | undefined>(undefined);

    useEffect(() => {
        setValue(parseCSSVariableValue(tokenName));
    }, [theme, mode, tokenName]);

    return value;
};
