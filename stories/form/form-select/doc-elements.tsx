import { TickIcon } from "@lifesg/react-icons/tick";
import { css } from "@linaria/core";
import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import { Colour } from "src/theme";

type DivProps = ComponentPropsWithoutRef<"div">;
type TickProps = ComponentPropsWithoutRef<typeof TickIcon>;
type CustomImageProps = DivProps & {
    imageSrc: string;
    imageAlt: string;
};

const imageWrapper = css`
    display: flex;
    border-radius: 4px;
    border: 1px solid black;
    overflow: hidden;
    align-items: center;
`;

const image = css`
    height: 40px;
    width: 184px;
`;

export const CustomImage = ({
    className,
    imageSrc,
    imageAlt,
    ...props
}: CustomImageProps) => (
    <div {...props} className={clsx(imageWrapper, className)}>
        <img
            src={imageSrc}
            alt={imageAlt ?? ""}
            className={clsx(image, className)}
        />
    </div>
);

const imageOption = css`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`;

export const CustomOption = ({ className, ...props }: DivProps) => (
    <div {...props} className={clsx(imageOption, className)} />
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
