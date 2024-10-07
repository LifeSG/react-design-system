import { ExternalIcon } from "@lifesg/react-icons/external";
import styled, { css } from "styled-components";
import { Colour } from "../theme";
import { TypographySizeType } from "../theme/font/types";
import { createTypographyStyles, getTextStyle } from "./helper";
import { TypographyLinkProps, TypographyProps } from "./types";

export namespace Typography {
    const createHeader = (
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

    export const HeaderXXL = createHeader("h1", "header-xxl", "HeaderXXL");
    export const HeaderXL = createHeader("h2", "header-xl", "HeaderXL");
    export const HeaderLG = createHeader("h3", "header-lg", "HeaderLG");
    export const HeaderMD = createHeader("h4", "header-md", "HeaderMD");
    export const HeaderSM = createHeader("h5", "header-sm", "HeaderSM");
    export const HeaderXS = createHeader("h6", "header-xs", "HeaderXS");

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
