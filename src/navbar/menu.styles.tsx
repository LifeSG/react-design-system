import styled from "styled-components";
import { lineClampCss } from "../shared/styles";
import { V3_Border, V3_Colour, V3_Radius, V3_Spacing } from "../v3_theme";
import { Typography } from "../typography";

export const MobileWrapper = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;

    margin: 0;
    padding: 0;

    border-left: ${V3_Border["width-040"]} solid ${V3_Colour["border-selected"]};
`;

export const MenuItem = styled.li`
    width: 100%;
    display: flex;
`;

export const Link = styled(Typography.LinkBL)`
    width: 100%;
    text-align: left;
    color: ${V3_Colour["text"]};

    margin: 0 ${V3_Spacing["spacing-8"]};

    // use border, as padding still shows an extra line after the ellipsis
    border: ${V3_Border["solid"]} transparent;
    border-width: ${V3_Spacing["spacing-12"]} ${V3_Spacing["spacing-8"]};
    border-radius: ${V3_Radius["md"]};

    ${lineClampCss(2)}
    white-space: pre-wrap;

    &:hover,
    &:active,
    &:focus {
        background-color: ${V3_Colour["bg-hover"]};
        color: ${V3_Colour["text"]};
    }
`;
