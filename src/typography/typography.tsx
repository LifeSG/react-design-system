import styled, { css } from "styled-components";
import {
    createTypographyStyles,
    getDisplayStyle,
    getTypographyStyle,
} from "./helper";
import { Colour } from "../theme";
import { LinkProps, TypographyProps, TypographySizeType } from "./types";
import { ExternalIcon } from "@lifesg/react-icons/external";

export namespace Typography {
    const createHeader = (
        tag: keyof JSX.IntrinsicElements,
        textStyle: TypographySizeType
    ) => {
        const Header = styled(tag)`
            ${(props: TypographyProps) =>
                createTypographyStyles(textStyle, props)}
        `;
        Header.displayName = `Header-${textStyle}`;
        return Header;
    };

    export const HeaderXXL = createHeader("h1", "header-xxl");
    export const HeaderXL = createHeader("h2", "header-xl");
    export const HeaderLG = createHeader("h3", "header-lg");
    export const HeaderMD = createHeader("h4", "header-md");
    export const HeaderSM = createHeader("h5", "header-sm");
    export const HeaderXS = createHeader("h6", "header-xs");

    const createBody = (textStyle: TypographySizeType) => {
        const Body = styled.p`
            ${(props: TypographyProps) =>
                createTypographyStyles(textStyle, props)}
        `;
        Body.displayName = `Body-${textStyle}`;
        return Body;
    };

    export const BodyBL = createBody("body-baseline");
    export const BodyLG = createBody("body-lg");
    export const BodyMD = createBody("body-md");
    export const BodySM = createBody("body-sm");

    const createLinkComponent = (textStyle: TypographySizeType) => {
        const HyperlinkBase = styled.a<LinkProps>`
            ${(props) => css`
                ${getTypographyStyle(
                    textStyle,
                    props.weight || "regular"
                )(props)}
                color: ${Colour.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Colour["text-hover"]};

                    svg {
                        color: ${Colour["text-hover"]};
                    }
                }

                ${getDisplayStyle(props.inline, props.paragraph)}
            `}
        `;

        // Define the component that uses HyperlinkBase
        const Component = ({
            external = false,
            children,
            ...rest
        }: LinkProps) => (
            <HyperlinkBase {...rest}>
                {children}
                {external && <StyledExternalIcon />}
            </HyperlinkBase>
        );

        Component.displayName = `Link-${textStyle}`;
        return Component;
    };

    export const LinkBL = createLinkComponent("body-baseline");
    export const LinkMD = createLinkComponent("body-md");
    export const LinkLG = createLinkComponent("body-lg");
    export const LinkSM = createLinkComponent("body-sm");
}

console.log("Hello");

// FOR LINK :
export const StyledExternalIcon = styled(ExternalIcon)`
    height: 1em;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;
