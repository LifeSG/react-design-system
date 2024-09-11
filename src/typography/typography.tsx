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

    export const HeaderXXL = createHeader("h1", "HeaderXXL");
    export const HeaderXL = createHeader("h2", "HeaderXL");
    export const HeaderLG = createHeader("h3", "HeaderLG");
    export const HeaderMD = createHeader("h4", "HeaderMD");
    export const HeaderSM = createHeader("h5", "HeaderSM");
    export const HeaderXS = createHeader("h6", "HeaderXS");

    const createBody = (textStyle: TypographySizeType) => {
        const Body = styled.p`
            ${(props: TypographyProps) =>
                createTypographyStyles(textStyle, props)}
        `;
        Body.displayName = `Body-${textStyle}`;
        return Body;
    };

    export const BodyBL = createBody("BodyBL");
    export const BodyLG = createBody("BodyLG");
    export const BodyMD = createBody("BodyMD");
    export const BodySM = createBody("BodySM");

    const createLinkComponent = (textStyle: TypographySizeType) => {
        const Component = (props: LinkProps) => (
            <HyperlinkComponent {...props} textStyle={textStyle} />
        );
        Component.displayName = `Link-${textStyle}`;
        return Component;
    };

    export const LinkBL = createLinkComponent("LinkBL");
    export const LinkMD = createLinkComponent("LinkMD");
    export const LinkLG = createLinkComponent("LinkLG");
    export const LinkSM = createLinkComponent("LinkSM");
}

console.log("Hello");

// FOR LINK :
export const StyledExternalIcon = styled(ExternalIcon)`
    height: 1em;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;

const HyperlinkBase = styled.a<LinkProps>`
    ${(props) => {
        return css`
            ${getTypographyStyle(
                props.textStyle,
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
        `;
    }}
`;

const HyperlinkComponent = ({
    external = false,
    children,
    ...rest
}: LinkProps) => {
    return (
        <HyperlinkBase external={external} {...rest}>
            {children}
            {external && <StyledExternalIcon />}
        </HyperlinkBase>
    );
};
HyperlinkComponent.displayName = "HyperlinkComponent";
