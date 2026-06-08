import { css } from "@linaria/core";
import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import { useState } from "react";
import { Button } from "src/button";
import { Card } from "src/card";
import { Colour } from "src/theme";

type DivProps = ComponentPropsWithoutRef<"div">;
type CardProps = ComponentPropsWithoutRef<typeof Card>;

interface Props {
    onShowOptions: () => void;
    onHideOptions: () => void;
}

export const ComponentWithFloatingElement = (props: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <Parent>
            <Button
                onClick={() => {
                    setOpen(!open);
                    if (open) {
                        props.onHideOptions?.();
                    } else {
                        props.onShowOptions?.();
                    }
                }}
            >
                Toggle
            </Button>
            {open && <Dropdown>Floating content</Dropdown>}
        </Parent>
    );
};

const parent = css`
    position: relative;
`;

const dropdown = css`
    position: absolute;
    top: calc(100% + 16px);
    height: 100px;
    background-color: ${Colour["bg"]};
`;

const Parent = ({ className, ...props }: DivProps) => (
    <div {...props} className={clsx(parent, className)} />
);

const Dropdown = ({ className, ...props }: CardProps) => (
    <Card {...props} className={clsx(dropdown, className)} />
);
