import React, { RefObject } from "react";
import { IStyledComponent } from "styled-components";
import { TypographySizeType } from "../theme/font/types";
import { TypographyLinkProps, TypographyProps } from "./types";
import {
    HyperlinkBase,
    StyledExternalIcon,
    TypographyBase,
} from "./typography.styles";

export namespace Typography {
    const createHeading = (
        tag: keyof JSX.IntrinsicElements,
        textStyle: TypographySizeType,
        displayName: string
    ) => {
        const Header = (
            { weight, inline, paragraph, maxLines, ...props }: TypographyProps,
            ref: React.Ref<HTMLHeadingElement>
        ) => {
            return (
                <TypographyBase
                    ref={ref}
                    as={inline ? "span" : tag}
                    $textStyle={textStyle}
                    $weight={weight}
                    $inline={inline}
                    $paragraph={paragraph}
                    $maxLines={maxLines}
                    {...props}
                />
            );
        };
        Header.displayName = `Typography.${displayName}`;
        return React.forwardRef(Header) as IStyledComponent<
            "web",
            TypographyProps & {
                ref?: RefObject<HTMLHeadingElement> | undefined;
            }
        >;
    };

    export const HeadingXXL = createHeading("h1", "heading-xxl", "HeadingXXL");
    export const HeadingXL = createHeading("h2", "heading-xl", "HeadingXL");
    export const HeadingLG = createHeading("h3", "heading-lg", "HeadingLG");
    export const HeadingMD = createHeading("h4", "heading-md", "HeadingMD");
    export const HeadingSM = createHeading("h5", "heading-sm", "HeadingSM");
    export const HeadingXS = createHeading("h6", "heading-xs", "HeadingXS");

    const createBody = (textStyle: TypographySizeType, displayName: string) => {
        const Body = (
            { weight, inline, paragraph, maxLines, ...props }: TypographyProps,
            ref: React.Ref<HTMLParagraphElement>
        ) => {
            return (
                <TypographyBase
                    ref={ref}
                    as={inline ? "span" : "p"}
                    $textStyle={textStyle}
                    $weight={weight}
                    $inline={inline}
                    $paragraph={paragraph}
                    $maxLines={maxLines}
                    {...props}
                />
            );
        };
        Body.displayName = `Typography.${displayName}`;
        return React.forwardRef(Body) as IStyledComponent<
            "web",
            TypographyProps & {
                ref?: RefObject<HTMLParagraphElement> | undefined;
            }
        >;
    };

    export const BodyBL = createBody("body-baseline", "BodyBL");
    export const BodyMD = createBody("body-md", "BodyMD");
    export const BodySM = createBody("body-sm", "BodySM");
    export const BodyXS = createBody("body-xs", "BodyXS");

    const createLinkComponent = (
        textStyle: TypographySizeType,
        displayName: string
    ) => {
        const Hyperlink = (
            {
                weight,
                children,
                external,
                underlineStyle = "underline",
                ...props
            }: TypographyLinkProps,
            ref: React.Ref<HTMLAnchorElement>
        ) => {
            return (
                <HyperlinkBase
                    ref={ref}
                    $textStyle={textStyle}
                    $weight={weight}
                    $underlineStyle={underlineStyle}
                    {...props}
                >
                    {children}
                    {external && <StyledExternalIcon />}
                </HyperlinkBase>
            );
        };
        Hyperlink.displayName = `Typography.${displayName}`;
        return React.forwardRef(Hyperlink) as IStyledComponent<
            "web",
            TypographyLinkProps & {
                ref?: RefObject<HTMLAnchorElement> | undefined;
            }
        >;
    };

    export const LinkBL = createLinkComponent("body-baseline", "LinkBL");
    export const LinkMD = createLinkComponent("body-md", "LinkMD");
    export const LinkSM = createLinkComponent("body-sm", "LinkSM");
    export const LinkXS = createLinkComponent("body-xs", "LinkXS");
}
