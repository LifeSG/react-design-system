import React from "react";
import styled, { css } from "styled-components";
import { Color } from "../color/color";
import { Icon } from "../icon/icon";
import { TextStyleHelper } from "./helper";
import { TextLinkProps, TextLinkStyleProps, TextProps } from "./types";

export namespace Text {
    export const D1 = styled.h1<TextProps>`
        ${(props) => {
            return css`
                ${TextStyleHelper.getTextStyle(
                    "D1",
                    props.weight,
                    props.paragraph
                )}
                color: ${Color.Neutral[1]};
                ${TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph
                )}
            `;
        }}
    `;

    export const D2 = styled.h1<TextProps>`
        ${(props) => {
            return css`
                ${TextStyleHelper.getTextStyle(
                    "D2",
                    props.weight,
                    props.paragraph
                )}
                color: ${Color.Neutral[1]};
                ${TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph
                )}
            `;
        }}
    `;

    export const D3 = styled.h1<TextProps>`
        ${(props) => {
            return css`
                ${TextStyleHelper.getTextStyle(
                    "D3",
                    props.weight,
                    props.paragraph
                )}
                color: ${Color.Neutral[1]};
                ${TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph
                )}
            `;
        }}
    `;

    export const D4 = styled.h1<TextProps>`
        ${(props) => {
            return css`
                ${TextStyleHelper.getTextStyle(
                    "D4",
                    props.weight,
                    props.paragraph
                )}
                color: ${Color.Neutral[1]};
                ${TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph
                )}
            `;
        }}
    `;

    export const DBody = styled.h1<TextProps>`
        ${(props) => {
            return css`
                ${TextStyleHelper.getTextStyle(
                    "DBody",
                    props.weight,
                    props.paragraph
                )}
                color: ${Color.Neutral[1]};
                ${TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph
                )}
            `;
        }}
    `;

    export const H1 = styled.h1<TextProps>`
        ${(props) => {
            return css`
                ${TextStyleHelper.getTextStyle(
                    "H1",
                    props.weight,
                    props.paragraph
                )}
                color: ${Color.Neutral[1]};
                ${TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph
                )}
            `;
        }}
    `;

    export const H2 = styled.h2<TextProps>`
        ${(props) => {
            return css`
                ${TextStyleHelper.getTextStyle(
                    "H2",
                    props.weight,
                    props.paragraph
                )}
                color: ${Color.Neutral[1]};
                ${TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph
                )}
            `;
        }}
    `;

    export const H3 = styled.h3<TextProps>`
        ${(props) => {
            return css`
                ${TextStyleHelper.getTextStyle(
                    "H3",
                    props.weight,
                    props.paragraph
                )}
                color: ${Color.Neutral[1]};
                ${TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph
                )}
            `;
        }}
    `;

    export const H4 = styled.h4<TextProps>`
        ${(props) => {
            return css`
                ${TextStyleHelper.getTextStyle(
                    "H4",
                    props.weight,
                    props.paragraph
                )}
                color: ${Color.Neutral[1]};
                ${TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph
                )}
            `;
        }}
    `;

    export const H5 = styled.h5<TextProps>`
        ${(props) => {
            return css`
                ${TextStyleHelper.getTextStyle(
                    "H5",
                    props.weight,
                    props.paragraph
                )}
                color: ${Color.Neutral[1]};
                ${TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph
                )}
            `;
        }}
    `;

    export const H6 = styled.h6<TextProps>`
        ${(props) => {
            return css`
                ${TextStyleHelper.getTextStyle(
                    "H6",
                    props.weight,
                    props.paragraph
                )}
                color: ${Color.Neutral[1]};
                ${TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph
                )}
            `;
        }}
    `;

    export const Body = styled.p<TextProps>`
        ${(props) => {
            return css`
                ${TextStyleHelper.getTextStyle(
                    "Body",
                    props.weight,
                    props.paragraph
                )}
                color: ${Color.Neutral[1]};
                ${TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph
                )}
            `;
        }}
    `;

    export const BodySmall = styled.p<TextProps>`
        ${(props) => {
            return css`
                ${TextStyleHelper.getTextStyle(
                    "BodySmall",
                    props.weight,
                    props.paragraph
                )}
                color: ${Color.Neutral[1]};
                ${TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph
                )}
            `;
        }}
    `;

    export const XSmall = styled.span<TextProps>`
        ${(props) => {
            return css`
                ${TextStyleHelper.getTextStyle(
                    "XSmall",
                    props.weight,
                    props.paragraph
                )}
                color: ${Color.Neutral[1]};
                ${TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph
                )}
            `;
        }}
    `;

    export const Hyperlink = {
        Default: (props: TextLinkProps) =>
            HyperlinkComponent({ ...props, textStyle: "Body" }),
        Small: (props: TextLinkProps) =>
            HyperlinkComponent({ ...props, textStyle: "BodySmall" }),
    };
}

// =============================================================================
// NON-EXPORTABLES
// =============================================================================

const HyperlinkBase = styled.a<TextLinkStyleProps>`
    ${(props) => {
        return css`
            ${TextStyleHelper.getTextStyle(props.textStyle, props.weight)}
            color: ${Color.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Color.Secondary};

                svg {
                    color: ${Color.Secondary};
                }
            }
        `;
    }}
`;

const ExternalIcon = styled(Icon)`
    margin-left: 0.4rem;
`;

const HyperlinkComponent = ({
    external = false,
    children,
    ...rest
}: TextLinkStyleProps) => {
    return (
        <HyperlinkBase {...rest}>
            {children}
            {external && <ExternalIcon type="external" />}
        </HyperlinkBase>
    );
};
