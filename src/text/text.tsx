import { ExternalIcon } from "@lifesg/react-icons/external";
import styled, { css } from "styled-components";
import { Color } from "../color/color";
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
                    props.paragraph,
                    props.maxLines
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
                    props.paragraph,
                    props.maxLines
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
                    props.paragraph,
                    props.maxLines
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
                    props.paragraph,
                    props.maxLines
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
                    props.paragraph,
                    props.maxLines
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
                    props.paragraph,
                    props.maxLines
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
                    props.paragraph,
                    props.maxLines
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
                    props.paragraph,
                    props.maxLines
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
                    props.paragraph,
                    props.maxLines
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
                    props.paragraph,
                    props.maxLines
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
                    props.paragraph,
                    props.maxLines
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
                    props.paragraph,
                    props.maxLines
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
                    props.paragraph,
                    props.maxLines
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
                    props.paragraph,
                    props.maxLines
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
}: TextLinkStyleProps) => {
    return (
        <HyperlinkBase {...rest}>
            {children}
            {external && <StyledExternalIcon />}
        </HyperlinkBase>
    );
};
