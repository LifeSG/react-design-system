import { ExternalIcon } from "@lifesg/react-icons/external";
import styled, { css } from "styled-components";
import { v2_Color } from "../v2_color/color";
import { v2_TextStyleHelper } from "./helper";
import { v2_TextLinkProps, v2_TextLinkStyleProps, v2_TextProps } from "./types";

/** @deprecated */
export namespace v2_Text {
    export const D1 = styled.h1<v2_TextProps>`
        ${(props) => {
            return css`
                ${v2_TextStyleHelper.getTextStyle(
                    "D1",
                    props.weight,
                    props.paragraph
                )}
                color: ${v2_Color.Neutral[1]};
                ${v2_TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph,
                    props.maxLines
                )}
            `;
        }}
    `;

    export const D2 = styled.h1<v2_TextProps>`
        ${(props) => {
            return css`
                ${v2_TextStyleHelper.getTextStyle(
                    "D2",
                    props.weight,
                    props.paragraph
                )}
                color: ${v2_Color.Neutral[1]};
                ${v2_TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph,
                    props.maxLines
                )}
            `;
        }}
    `;

    export const D3 = styled.h1<v2_TextProps>`
        ${(props) => {
            return css`
                ${v2_TextStyleHelper.getTextStyle(
                    "D3",
                    props.weight,
                    props.paragraph
                )}
                color: ${v2_Color.Neutral[1]};
                ${v2_TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph,
                    props.maxLines
                )}
            `;
        }}
    `;

    export const D4 = styled.h1<v2_TextProps>`
        ${(props) => {
            return css`
                ${v2_TextStyleHelper.getTextStyle(
                    "D4",
                    props.weight,
                    props.paragraph
                )}
                color: ${v2_Color.Neutral[1]};
                ${v2_TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph,
                    props.maxLines
                )}
            `;
        }}
    `;

    export const DBody = styled.h1<v2_TextProps>`
        ${(props) => {
            return css`
                ${v2_TextStyleHelper.getTextStyle(
                    "DBody",
                    props.weight,
                    props.paragraph
                )}
                color: ${v2_Color.Neutral[1]};
                ${v2_TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph,
                    props.maxLines
                )}
            `;
        }}
    `;

    export const H1 = styled.h1<v2_TextProps>`
        ${(props) => {
            return css`
                ${v2_TextStyleHelper.getTextStyle(
                    "H1",
                    props.weight,
                    props.paragraph
                )}
                color: ${v2_Color.Neutral[1]};
                ${v2_TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph,
                    props.maxLines
                )}
            `;
        }}
    `;

    export const H2 = styled.h2<v2_TextProps>`
        ${(props) => {
            return css`
                ${v2_TextStyleHelper.getTextStyle(
                    "H2",
                    props.weight,
                    props.paragraph
                )}
                color: ${v2_Color.Neutral[1]};
                ${v2_TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph,
                    props.maxLines
                )}
            `;
        }}
    `;

    export const H3 = styled.h3<v2_TextProps>`
        ${(props) => {
            return css`
                ${v2_TextStyleHelper.getTextStyle(
                    "H3",
                    props.weight,
                    props.paragraph
                )}
                color: ${v2_Color.Neutral[1]};
                ${v2_TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph,
                    props.maxLines
                )}
            `;
        }}
    `;

    export const H4 = styled.h4<v2_TextProps>`
        ${(props) => {
            return css`
                ${v2_TextStyleHelper.getTextStyle(
                    "H4",
                    props.weight,
                    props.paragraph
                )}
                color: ${v2_Color.Neutral[1]};
                ${v2_TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph,
                    props.maxLines
                )}
            `;
        }}
    `;

    export const H5 = styled.h5<v2_TextProps>`
        ${(props) => {
            return css`
                ${v2_TextStyleHelper.getTextStyle(
                    "H5",
                    props.weight,
                    props.paragraph
                )}
                color: ${v2_Color.Neutral[1]};
                ${v2_TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph,
                    props.maxLines
                )}
            `;
        }}
    `;

    export const H6 = styled.h6<v2_TextProps>`
        ${(props) => {
            return css`
                ${v2_TextStyleHelper.getTextStyle(
                    "H6",
                    props.weight,
                    props.paragraph
                )}
                color: ${v2_Color.Neutral[1]};
                ${v2_TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph,
                    props.maxLines
                )}
            `;
        }}
    `;

    export const Body = styled.p<v2_TextProps>`
        ${(props) => {
            return css`
                ${v2_TextStyleHelper.getTextStyle(
                    "Body",
                    props.weight,
                    props.paragraph
                )}
                color: ${v2_Color.Neutral[1]};
                ${v2_TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph,
                    props.maxLines
                )}
            `;
        }}
    `;

    export const BodySmall = styled.p<v2_TextProps>`
        ${(props) => {
            return css`
                ${v2_TextStyleHelper.getTextStyle(
                    "BodySmall",
                    props.weight,
                    props.paragraph
                )}
                color: ${v2_Color.Neutral[1]};
                ${v2_TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph,
                    props.maxLines
                )}
            `;
        }}
    `;

    export const XSmall = styled.span<v2_TextProps>`
        ${(props) => {
            return css`
                ${v2_TextStyleHelper.getTextStyle(
                    "XSmall",
                    props.weight,
                    props.paragraph
                )}
                color: ${v2_Color.Neutral[1]};
                ${v2_TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph,
                    props.maxLines
                )}
            `;
        }}
    `;

    export const Hyperlink = {
        Default: (props: v2_TextLinkProps) =>
            HyperlinkComponent({ ...props, textStyle: "Body" }),
        Small: (props: v2_TextLinkProps) =>
            HyperlinkComponent({ ...props, textStyle: "BodySmall" }),
    };
}

// =============================================================================
// NON-EXPORTABLES
// =============================================================================

const HyperlinkBase = styled.a<v2_TextLinkStyleProps>`
    ${(props) => {
        return css`
            ${v2_TextStyleHelper.getTextStyle(props.textStyle, props.weight)}
            color: ${v2_Color.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${v2_Color.Secondary};

                svg {
                    color: ${v2_Color.Secondary};
                }
            }
        `;
    }}
`;

const StyledExternalIcon = styled(ExternalIcon)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`;

const HyperlinkComponent = ({
    external = false,
    children,
    ...rest
}: v2_TextLinkStyleProps) => {
    return (
        <HyperlinkBase {...rest}>
            {children}
            {external && <StyledExternalIcon />}
        </HyperlinkBase>
    );
};
