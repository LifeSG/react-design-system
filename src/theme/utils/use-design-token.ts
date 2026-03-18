import { useEffect, useState } from "react";

import { useTheme } from "../theme-provider/hooks";
import type { CSSVariableString } from "../types";
import { parseCSSVariableValue } from "./css-variable";
import { getResolvedValue } from "./token-resolver";

const isEmptyValue = (value: unknown) => {
    return value == null || value === "";
};

export const useDesignToken = (
    tokenName: CSSVariableString | undefined
): string | undefined => {
    const { theme, mode } = useTheme();
    const [value, setValue] = useState<string | undefined>(undefined);

    useEffect(() => {
        if (!tokenName) {
            setValue(undefined);
            return;
        }

        setValue(parseCSSVariableValue(tokenName));
    }, [theme, mode, tokenName]);

    return value;
};

export const useResolvedTokenValue = <
    TToken extends CSSVariableString,
    TCustom
>({
    value,
    fallback,
    isToken,
    normalizeCustom,
}: {
    value: TToken | TCustom | null | undefined;
    fallback: TToken | TCustom;
    isToken: (value: unknown) => value is TToken;
    normalizeCustom: (value: TCustom) => string;
}) => {
    const effectiveValue = isEmptyValue(value) ? fallback : value;
    const tokenValue = isToken(effectiveValue) ? effectiveValue : undefined;
    const resolvedTokenValue = useDesignToken(tokenValue);

    if (tokenValue) {
        return getResolvedValue(resolvedTokenValue, tokenValue);
    }

    return normalizeCustom(effectiveValue as TCustom);
};
