import { ExternalIcon } from "@lifesg/react-icons/external";
import styled, { css } from "styled-components";
import { Colour } from "../theme";
import { TypographySizeType } from "../theme/typography/types";
import { createTypographyStyles, getTextStyle } from "./helper";
import { TypographyLinkProps, TypographyProps } from "./types";

export namespace Typography {
    const createHeader = (
        tag: keyof JSX.IntrinsicElements,
        textStyle: TypographySizeType
    ) => {
        const Header = styled(tag)<TypographyProps>`
            ${(props) => createTypographyStyles(textStyle, props)}
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
        const Body = styled.p<TypographyProps>`
            ${(props) => createTypographyStyles(textStyle, props)}
        `;
        Body.displayName = `Body-${textStyle}`;
        return Body;
    };

    export const BodyBL = createBody("body-baseline");
    export const BodyLG = createBody("body-lg");
    export const BodyMD = createBody("body-md");
    export const BodySM = createBody("body-sm");

    const createLinkComponent = (textStyle: TypographySizeType) => {
        const HyperlinkBase = styled.a<TypographyLinkProps>`
            ${(props) => css`
                ${getTextStyle(textStyle, props.weight || "regular")}
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

        Component.displayName = `Link-${textStyle}`;
        return Component;
    };

    export const LinkBL = createLinkComponent("body-baseline");
    export const LinkMD = createLinkComponent("body-md");
    export const LinkLG = createLinkComponent("body-lg");
    export const LinkSM = createLinkComponent("body-sm");
}

const StyledExternalIcon = styled(ExternalIcon)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;
