import clsx from "clsx";
import type { RefObject } from "react";
import React from "react";
import type { IStyledComponent } from "styled-components";

import { useApplyStyle } from "../theme";
import { mergeRefs } from "../util";
import {
    getTypographyTextClassName,
    getTypographyUnderlineClassName,
    tokens,
    typographyClassNames,
} from "./helper";
import type {
    TypographyLinkProps,
    TypographyProps,
    TypographySize,
    TypographyWeight,
} from "./types";
import * as styles from "./typography.styles";

const getTextWeight = (
    weight: TypographyWeight | undefined
): TypographyWeight => weight || "regular";

const getTypographyDisplayClassName = (
    inline: boolean | undefined,
    paragraph: boolean | undefined
) => {
    if (paragraph) {
        return typographyClassNames.paragraph;
    }

    if (inline) {
        return typographyClassNames.displayInline;
    }

    return typographyClassNames.displayBlock;
};

const createHeading = (
    tag: keyof JSX.IntrinsicElements,
    textStyle: TypographySize,
    displayName: string
) => {
    const Header = (
        {
            weight,
            inline,
            paragraph,
            maxLines,
            className,
            ...props
        }: TypographyProps,
        ref: React.Ref<HTMLHeadingElement>
    ) => {
        const typographyRef = React.useRef<HTMLHeadingElement>(null);
        const textWeight = getTextWeight(weight);
        const mergedRef = mergeRefs(typographyRef, ref);

        useApplyStyle(typographyRef, {
            [tokens.typographyBase.maxLines]:
                maxLines && (paragraph || !inline) ? maxLines : null,
        });

        return (
            <styles.TypographyBase
                ref={mergedRef}
                as={inline ? "span" : tag}
                className={clsx(
                    getTypographyTextClassName(textStyle, textWeight),
                    getTypographyDisplayClassName(inline, paragraph),
                    maxLines && (paragraph || !inline)
                        ? typographyClassNames.lineClamp
                        : undefined,
                    className
                )}
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

const createBody = (textStyle: TypographySize, displayName: string) => {
    const Body = (
        {
            weight,
            inline,
            paragraph,
            maxLines,
            className,
            ...props
        }: TypographyProps,
        ref: React.Ref<HTMLParagraphElement>
    ) => {
        const typographyRef = React.useRef<HTMLParagraphElement>(null);
        const textWeight = getTextWeight(weight);
        const mergedRef = mergeRefs(typographyRef, ref);

        useApplyStyle(typographyRef, {
            [tokens.typographyBase.maxLines]:
                maxLines && (paragraph || !inline) ? maxLines : null,
        });

        return (
            <styles.TypographyBase
                ref={mergedRef}
                as={inline ? "span" : "p"}
                className={clsx(
                    getTypographyTextClassName(textStyle, textWeight),
                    getTypographyDisplayClassName(inline, paragraph),
                    maxLines && (paragraph || !inline)
                        ? typographyClassNames.lineClamp
                        : undefined,
                    className
                )}
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
    textStyle: TypographySize,
    displayName: string
) => {
    const Hyperlink = (
        {
            weight,
            children,
            external,
            underlineStyle = "underline",
            className,
            ...props
        }: TypographyLinkProps,
        ref: React.Ref<HTMLAnchorElement>
    ) => {
        const textWeight = getTextWeight(weight);

        return (
            <styles.HyperlinkBase
                ref={ref}
                className={clsx(
                    getTypographyTextClassName(textStyle, textWeight),
                    getTypographyUnderlineClassName(underlineStyle),
                    className
                )}
                {...props}
            >
                {children}
                {external && <styles.StyledExternalIcon />}
            </styles.HyperlinkBase>
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
