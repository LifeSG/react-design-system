import { ExternalIcon } from "@lifesg/react-icons/external";
import styled, { css } from "styled-components";
import { V2_Color } from "../v2_color/color";
import { V2_TextStyleHelper } from "./helper";
import { V2_TextLinkProps, V2_TextLinkStyleProps, V2_TextProps } from "./types";

/** @deprecated */
export namespace V2_Text {
    export const D1 = styled.h1<V2_TextProps>`
        ${(props) => {
            return css`
                ${V2_TextStyleHelper.getTextStyle(
                    "D1",
                    props.weight,
                    props.paragraph
                )}
                color: ${V2_Color.Neutral[1]};
                ${V2_TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph,
                    props.maxLines
                )}
            `;
        }}
    `;

    export const D2 = styled.h1<V2_TextProps>`
        ${(props) => {
            return css`
                ${V2_TextStyleHelper.getTextStyle(
                    "D2",
                    props.weight,
                    props.paragraph
                )}
                color: ${V2_Color.Neutral[1]};
                ${V2_TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph,
                    props.maxLines
                )}
            `;
        }}
    `;

    export const D3 = styled.h1<V2_TextProps>`
        ${(props) => {
            return css`
                ${V2_TextStyleHelper.getTextStyle(
                    "D3",
                    props.weight,
                    props.paragraph
                )}
                color: ${V2_Color.Neutral[1]};
                ${V2_TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph,
                    props.maxLines
                )}
            `;
        }}
    `;

    export const D4 = styled.h1<V2_TextProps>`
        ${(props) => {
            return css`
                ${V2_TextStyleHelper.getTextStyle(
                    "D4",
                    props.weight,
                    props.paragraph
                )}
                color: ${V2_Color.Neutral[1]};
                ${V2_TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph,
                    props.maxLines
                )}
            `;
        }}
    `;

    export const DBody = styled.h1<V2_TextProps>`
        ${(props) => {
            return css`
                ${V2_TextStyleHelper.getTextStyle(
                    "DBody",
                    props.weight,
                    props.paragraph
                )}
                color: ${V2_Color.Neutral[1]};
                ${V2_TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph,
                    props.maxLines
                )}
            `;
        }}
    `;

    export const H1 = styled.h1<V2_TextProps>`
        ${(props) => {
            return css`
                ${V2_TextStyleHelper.getTextStyle(
                    "H1",
                    props.weight,
                    props.paragraph
                )}
                color: ${V2_Color.Neutral[1]};
                ${V2_TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph,
                    props.maxLines
                )}
            `;
        }}
    `;

    export const H2 = styled.h2<V2_TextProps>`
        ${(props) => {
            return css`
                ${V2_TextStyleHelper.getTextStyle(
                    "H2",
                    props.weight,
                    props.paragraph
                )}
                color: ${V2_Color.Neutral[1]};
                ${V2_TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph,
                    props.maxLines
                )}
            `;
        }}
    `;

    export const H3 = styled.h3<V2_TextProps>`
        ${(props) => {
            return css`
                ${V2_TextStyleHelper.getTextStyle(
                    "H3",
                    props.weight,
                    props.paragraph
                )}
                color: ${V2_Color.Neutral[1]};
                ${V2_TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph,
                    props.maxLines
                )}
            `;
        }}
    `;

    export const H4 = styled.h4<V2_TextProps>`
        ${(props) => {
            return css`
                ${V2_TextStyleHelper.getTextStyle(
                    "H4",
                    props.weight,
                    props.paragraph
                )}
                color: ${V2_Color.Neutral[1]};
                ${V2_TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph,
                    props.maxLines
                )}
            `;
        }}
    `;

    export const H5 = styled.h5<V2_TextProps>`
        ${(props) => {
            return css`
                ${V2_TextStyleHelper.getTextStyle(
                    "H5",
                    props.weight,
                    props.paragraph
                )}
                color: ${V2_Color.Neutral[1]};
                ${V2_TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph,
                    props.maxLines
                )}
            `;
        }}
    `;

    export const H6 = styled.h6<V2_TextProps>`
        ${(props) => {
            return css`
                ${V2_TextStyleHelper.getTextStyle(
                    "H6",
                    props.weight,
                    props.paragraph
                )}
                color: ${V2_Color.Neutral[1]};
                ${V2_TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph,
                    props.maxLines
                )}
            `;
        }}
    `;

    export const Body = styled.p<V2_TextProps>`
        ${(props) => {
            return css`
                ${V2_TextStyleHelper.getTextStyle(
                    "Body",
                    props.weight,
                    props.paragraph
                )}
                color: ${V2_Color.Neutral[1]};
                ${V2_TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph,
                    props.maxLines
                )}
            `;
        }}
    `;

    export const BodySmall = styled.p<V2_TextProps>`
        ${(props) => {
            return css`
                ${V2_TextStyleHelper.getTextStyle(
                    "BodySmall",
                    props.weight,
                    props.paragraph
                )}
                color: ${V2_Color.Neutral[1]};
                ${V2_TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph,
                    props.maxLines
                )}
            `;
        }}
    `;

    export const XSmall = styled.span<V2_TextProps>`
        ${(props) => {
            return css`
                ${V2_TextStyleHelper.getTextStyle(
                    "XSmall",
                    props.weight,
                    props.paragraph
                )}
                color: ${V2_Color.Neutral[1]};
                ${V2_TextStyleHelper.getDisplayStyle(
                    props.inline,
                    props.paragraph,
                    props.maxLines
                )}
            `;
        }}
    `;

    export const Hyperlink = {
        Default: (props: V2_TextLinkProps) =>
            HyperlinkComponent({ ...props, textStyle: "Body" }),
        Small: (props: V2_TextLinkProps) =>
            HyperlinkComponent({ ...props, textStyle: "BodySmall" }),
    };
}

// =============================================================================
// NON-EXPORTABLES
// =============================================================================

const HyperlinkBase = styled.a<V2_TextLinkStyleProps>`
    ${(props) => {
        return css`
            ${V2_TextStyleHelper.getTextStyle(props.textStyle, props.weight)}
            color: ${V2_Color.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${V2_Color.Secondary};

                svg {
                    color: ${V2_Color.Secondary};
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
}: V2_TextLinkStyleProps) => {
    return (
        <HyperlinkBase {...rest}>
            {children}
            {external && <StyledExternalIcon />}
        </HyperlinkBase>
    );
};
