import { TickIcon } from "@lifesg/react-icons/tick";
import { css } from "@linaria/core";
import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import { Colour } from "src/theme";

type DivProps = ComponentPropsWithoutRef<"div">;
type ImgProps = ComponentPropsWithoutRef<"img">;
type TickProps = ComponentPropsWithoutRef<typeof TickIcon>;

const imageWrapper = css`
    display: flex;
    border-radius: 4px;
    border: 1px solid black;
    overflow: hidden;
    align-items: center;
`;

export const ImageWrapper = ({ className, ...props }: DivProps) => (
    <div {...props} className={clsx(imageWrapper, className)} />
);

const image = css`
    height: 40px;
    width: 184px;
`;

export const Image = ({ className, alt, ...props }: ImgProps) => (
    <img {...props} alt={alt ?? ""} className={clsx(image, className)} />
);

const imageWrapperSelected = css`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`;

export const ImageWrapperSelected = ({ className, ...props }: DivProps) => (
    <div {...props} className={clsx(imageWrapperSelected, className)} />
);

const checkmark = css`
    height: 32px;
    width: 32px;
    color: ${Colour["icon-primary"]};
`;

export const Checkmark = ({ className, ...props }: TickProps) => (
    <TickIcon {...props} className={clsx(checkmark, className)} />
);

const customCTAContainer = css`
    margin: 0 0.5rem;
    border-top: 1px solid ${Colour["border"]};
    padding: 1rem 0.5rem;
`;

export const CustomCTAContainer = ({ className, ...props }: DivProps) => (
    <div {...props} className={clsx(customCTAContainer, className)} />
);
