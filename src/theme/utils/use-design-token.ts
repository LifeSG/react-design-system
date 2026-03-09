import { useEffect, useState } from "react";
import { useTheme } from "../theme-provider/hooks";
import { CSSVariableString } from "../types";

const extractFDSVariableName = (cssVarString: CSSVariableString): string => {
    const match = new RegExp(/--fds-[\w-]+/).exec(cssVarString as string);
    if (!match) {
        console.warn(
            `Invalid CSS variable string: ${cssVarString}. Expected format: var(--fds-token-name)`
        );
        return "";
    }

    return match[0];
};

export const useDesignToken = (
    tokenName: CSSVariableString
): string | undefined => {
    const { theme, mode } = useTheme();
    const [value, setValue] = useState<string | undefined>(undefined);

    useEffect(() => {
        const variableName = extractFDSVariableName(tokenName);

        const computedValue = getComputedStyle(
            document.documentElement
        ).getPropertyValue(variableName);
        setValue(computedValue);
    }, [theme, mode, tokenName]);

    return value;
};
