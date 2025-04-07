import { ExternalIcon } from "@lifesg/react-icons/external";
import styled, { css } from "styled-components";
import { Colour } from "../theme";
import { TypographySizeType } from "../theme/font/types";
import { createTypographyStyles, getTextStyle } from "./helper";
import { TypographyLinkProps, TypographyProps } from "./types";

export namespace Typography {
    const createHeading = (
        tag: keyof JSX.IntrinsicElements,
        textStyle: TypographySizeType,
        displayName: string
    ) => {
        const Header = styled(tag).attrs<TypographyProps>(({ inline }) => ({
            as: inline ? "span" : undefined,
        }))<TypographyProps>`
            ${(props) => createTypographyStyles(textStyle, props)}
        `;
        Header.displayName = `Typography.${displayName}`;
        return Header;
    };

    export const HeadingXXL = createHeading("h1", "heading-xxl", "HeadingXXL");
    export const HeadingXL = createHeading("h2", "heading-xl", "HeadingXL");
    export const HeadingLG = createHeading("h3", "heading-lg", "HeadingLG");
    export const HeadingMD = createHeading("h4", "heading-md", "HeadingMD");
    export const HeadingSM = createHeading("h5", "heading-sm", "HeadingSM");
    export const HeadingXS = createHeading("h6", "heading-xs", "HeadingXS");

    const createBody = (textStyle: TypographySizeType, displayName: string) => {
        const Body = styled.p.attrs<TypographyProps>(({ inline }) => ({
            as: inline ? "span" : undefined,
        }))<TypographyProps>`
            ${(props) => createTypographyStyles(textStyle, props)}
        `;
        Body.displayName = `Typography.${displayName}`;
        return Body;
    };

    export const BodyBL = createBody("body-baseline", "BodyBL");
    export const BodyMD = createBody("body-md", "BodyMD");
    export const BodySM = createBody("body-sm", "BodySM");
    export const BodyXS = createBody("body-xs", "BodyXS");

    const createLinkComponent = (
        textStyle: TypographySizeType,
        displayName: string
    ) => {
        const HyperlinkBase = styled.a<TypographyLinkProps>`
            ${(props) => css`
                ${getTextStyle(textStyle, props.weight || "regular")}
                color: ${Colour.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Colour["text-hover"]};
                }
            `}
        `;

        const Component = ({
            external = false,
            children,
            ...rest
        }: TypographyLinkProps) => (
            <HyperlinkBase {...rest}>
                {children}
                {external && <StyledExternalIcon />}
            </HyperlinkBase>
        );
        Component.displayName = `Typography.${displayName}`;
        return Component;
    };

    export const LinkBL = createLinkComponent("body-baseline", "LinkBL");
    export const LinkMD = createLinkComponent("body-md", "LinkMD");
    export const LinkSM = createLinkComponent("body-sm", "LinkSM");
    export const LinkXS = createLinkComponent("body-xs", "LinkXS");
}

const StyledExternalIcon = styled(ExternalIcon)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;
