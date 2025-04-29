import { css } from "styled-components";
import { ThemeStyleProps } from "../../theme";
import { StyledComponentProps } from "../../theme/helpers";

export const lineClampCss = (lines: number) => css`
    display: -webkit-box;
    -webkit-line-clamp: ${lines};
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export const getTokenValue = (
    token: string | number | ((props: StyledComponentProps) => string),
    props: ThemeStyleProps
) => {
    switch (typeof token) {
        case "function":
            return token(props);
        case "number":
            return token + "px";
        case "string":
            return token;
    }
};
