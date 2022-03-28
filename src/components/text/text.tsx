import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../icon";
import { Color } from "../styles/theme";
import { TextStyleHelper } from "./helper";
import { TextLinkProps, TextLinkStyleProps, TextProps } from "./types";

// =============================================================================
// BASE COMPONENTS
// =============================================================================
const D1 = styled.h1<TextProps>`
    ${(props) => {
		return css`
            ${TextStyleHelper.getTextStyle("D1", props.weight, props.paragraph)}
            color: ${Color.Neutral[1]};
			${TextStyleHelper.getDisplayStyle(props.inline, props.paragraph)}
		`;
	}}
`;

const D2 = styled.h1<TextProps>`
    ${(props) => {
		return css`
            ${TextStyleHelper.getTextStyle("D2", props.weight, props.paragraph)}
            color: ${Color.Neutral[1]};
            ${TextStyleHelper.getDisplayStyle(props.inline, props.paragraph)}
        `;
	}}
`;

const DBody = styled.h1<TextProps>`
    ${(props) => {
		return css`
            ${TextStyleHelper.getTextStyle(
			"DBody",
			props.weight,
			props.paragraph
		)}
            color: ${Color.Neutral[1]};
            ${TextStyleHelper.getDisplayStyle(props.inline, props.paragraph)}
        `;
	}}
`;

const H1 = styled.h1<TextProps>`
    ${(props) => {
		return css`
            ${TextStyleHelper.getTextStyle("H1", props.weight, props.paragraph)}
            color: ${Color.Neutral[1]};
            ${TextStyleHelper.getDisplayStyle(props.inline, props.paragraph)}
        `;
	}}
`;

const H2 = styled.h2<TextProps>`
    ${(props) => {
		return css`
            ${TextStyleHelper.getTextStyle("H2", props.weight, props.paragraph)}
            color: ${Color.Neutral[1]};
            ${TextStyleHelper.getDisplayStyle(props.inline, props.paragraph)}
        `;
	}}
`;

const H3 = styled.h3<TextProps>`
    ${(props) => {
		return css`
            ${TextStyleHelper.getTextStyle("H3", props.weight, props.paragraph)}
            color: ${Color.Neutral[1]};
            ${TextStyleHelper.getDisplayStyle(props.inline, props.paragraph)}
        `;
	}}
`;

const H4 = styled.h4<TextProps>`
    ${(props) => {
		return css`
            ${TextStyleHelper.getTextStyle("H4", props.weight, props.paragraph)}
            color: ${Color.Neutral[1]};
            ${TextStyleHelper.getDisplayStyle(props.inline, props.paragraph)}
        `;
	}}
`;

const H5 = styled.h5<TextProps>`
    ${(props) => {
		return css`
            ${TextStyleHelper.getTextStyle("H5", props.weight, props.paragraph)}
            color: ${Color.Neutral[1]};
            ${TextStyleHelper.getDisplayStyle(props.inline, props.paragraph)}
        `;
	}}
`;

const H6 = styled.h6<TextProps>`
    ${(props) => {
		return css`
            ${TextStyleHelper.getTextStyle("H6", props.weight, props.paragraph)}
            color: ${Color.Neutral[1]};
            ${TextStyleHelper.getDisplayStyle(props.inline, props.paragraph)}
        `;
	}}
`;

const Body = styled.p<TextProps>`
    ${(props) => {
		return css`
            ${TextStyleHelper.getTextStyle(
			"Body",
			props.weight,
			props.paragraph
		)}
            color: ${Color.Neutral[1]};
            ${TextStyleHelper.getDisplayStyle(props.inline, props.paragraph)}
        `;
	}}
`;

const BodySmall = styled.p<TextProps>`
    ${(props) => {
		return css`
            ${TextStyleHelper.getTextStyle(
			"BodySmall",
			props.weight,
			props.paragraph
		)}
            color: ${Color.Neutral[1]};
            ${TextStyleHelper.getDisplayStyle(props.inline, props.paragraph)}
        `;
	}}
`;

const XSmall = styled.span<TextProps>`
    ${(props) => {
		return css`
            ${TextStyleHelper.getTextStyle(
			"XSmall",
			props.weight,
			props.paragraph
		)}
            color: ${Color.Neutral[1]};
            ${TextStyleHelper.getDisplayStyle(props.inline, props.paragraph)}
        `;
	}}
`;

// =============================================================================
// LINKS
// =============================================================================
const Hyperlink = styled.a<TextLinkStyleProps>`
    ${(props) => {
		return css`
            ${TextStyleHelper.getTextStyle(props.textStyle, props.weight)}
            color: ${Color.Primary};

            :hover,
            :active,
            :focus {
                color: ${Color.Secondary};
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
		<Hyperlink {...rest}>
			{children}
			{external && <ExternalIcon type="external" />}
		</Hyperlink>
	);
};

// =============================================================================
// EXPORT
// =============================================================================
export const Text = {
	D1,
	D2,
	DBody,
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	Body,
	BodySmall,
	XSmall,
	Hyperlink: {
		Default: (props: TextLinkProps) =>
			HyperlinkComponent({ ...props, textStyle: "Body" }),
		Small: (props: TextLinkProps) =>
			HyperlinkComponent({ ...props, textStyle: "BodySmall" }),
	},
};
