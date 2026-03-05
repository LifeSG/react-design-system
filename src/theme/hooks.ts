import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider/hooks";
import { CSSVariableString, FDSVariableName } from "./types";

const extractVariableName = (
    cssVarString: CSSVariableString
): FDSVariableName => {
    const match = cssVarString.match(/--fds-[\w-]+/)!;
    return match[0] as FDSVariableName;
};

export const useDesignToken = (
    tokenName: CSSVariableString
): string | undefined => {
    const { theme, mode } = useTheme();
    const [value, setValue] = useState<string | undefined>(undefined);

    useEffect(() => {
        const variableName = extractVariableName(tokenName);

        const computedValue = getComputedStyle(
            document.documentElement
        ).getPropertyValue(variableName);
        setValue(computedValue);
    }, [theme, mode, tokenName]);

    return value;
};
