import { ExternalIcon } from "@lifesg/react-icons/external";
import clsx from "clsx";
import type { NamedExoticComponent } from "react";
import React from "react";

import { useApplyStyle } from "../theme";
import { mergeRefs } from "../util";
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

const getTypographyTextClassName = (textStyle: TypographySize) =>
    styles.typographySize[textStyle];

const getTypographyWeightClassName = (weight: TypographyWeight) =>
    styles.typographyWeight[weight];

const getTypographyDisplayClassName = (
    inline: boolean | undefined,
    paragraph: boolean | undefined
) => {
    if (paragraph) {
        return styles.paragraph;
    }

    if (inline) {
        return styles.displayInline;
    }

    return styles.displayBlock;
};

const shouldLineClamp = (
    maxLines: number | undefined,
    inline: boolean | undefined,
    paragraph: boolean | undefined
) => !!maxLines && (paragraph || !inline);

const createTypographyText = <TElement extends HTMLElement>(
    tag: React.ElementType,
    textStyle: TypographySize,
    displayName: string
) => {
    const TypographyText = React.forwardRef<TElement, TypographyProps>(
        function TypographyTextComponent(
            { weight, inline, paragraph, maxLines, className, ...props },
            ref
        ) {
            const textWeight = getTextWeight(weight);
            const textRef = React.useRef<TElement>(null);
            const mergedRef = mergeRefs(textRef, ref);
            const shouldClamp = shouldLineClamp(maxLines, inline, paragraph);

            useApplyStyle(textRef, {
                [styles.tokens.typographyBase.maxLines]: shouldClamp
                    ? maxLines
                    : null,
            });

            const Element = inline ? "span" : tag;

            return (
                <Element
                    ref={mergedRef}
                    className={clsx(
                        styles.typographyBase,
                        getTypographyTextClassName(textStyle),
                        getTypographyWeightClassName(textWeight),
                        getTypographyDisplayClassName(inline, paragraph),
                        shouldClamp && styles.lineClamp,
                        className
                    )}
                    {...props}
                />
            );
        }
    );

    (
        TypographyText as NamedExoticComponent
    ).displayName = `Typography.${displayName}`;
    return TypographyText;
};

const createHeading = (
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
    textStyle: TypographySize,
    displayName: string
) => {
    return createTypographyText<HTMLHeadingElement>(
        tag,
        textStyle,
        displayName
    );
};

export const HeadingXXL = createHeading("h1", "heading-xxl", "HeadingXXL");
export const HeadingXL = createHeading("h2", "heading-xl", "HeadingXL");
export const HeadingLG = createHeading("h3", "heading-lg", "HeadingLG");
export const HeadingMD = createHeading("h4", "heading-md", "HeadingMD");
export const HeadingSM = createHeading("h5", "heading-sm", "HeadingSM");
export const HeadingXS = createHeading("h6", "heading-xs", "HeadingXS");

const createBody = (textStyle: TypographySize, displayName: string) => {
    return createTypographyText<HTMLParagraphElement>(
        "p",
        textStyle,
        displayName
    );
};

export const BodyBL = createBody("body-baseline", "BodyBL");
export const BodyMD = createBody("body-md", "BodyMD");
export const BodySM = createBody("body-sm", "BodySM");
export const BodyXS = createBody("body-xs", "BodyXS");

const createLinkComponent = (
    textStyle: TypographySize,
    displayName: string
) => {
    const Hyperlink = React.forwardRef<HTMLAnchorElement, TypographyLinkProps>(
        function TypographyLink(
            {
                weight,
                children,
                external,
                underlineStyle = "underline",
                className,
                ...props
            },
            ref
        ) {
            const textWeight = getTextWeight(weight);

            return (
                <a
                    ref={ref}
                    className={clsx(
                        styles.typographyBase,
                        styles.hyperlinkBase,
                        getTypographyTextClassName(textStyle),
                        getTypographyWeightClassName(textWeight),
                        underlineStyle === "none"
                            ? styles.noUnderline
                            : styles.underline,
                        className
                    )}
                    {...props}
                >
                    {children}
                    {external && (
                        <ExternalIcon className={styles.externalIcon} />
                    )}
                </a>
            );
        }
    );

    (
        Hyperlink as NamedExoticComponent
    ).displayName = `Typography.${displayName}`;
    return Hyperlink;
};

export const LinkBL = createLinkComponent("body-baseline", "LinkBL");
export const LinkMD = createLinkComponent("body-md", "LinkMD");
export const LinkSM = createLinkComponent("body-sm", "LinkSM");
export const LinkXS = createLinkComponent("body-xs", "LinkXS");
