import React from "react";
import { Clickable } from "./brand.styles";
import { INavResources } from "./types";

interface IProps {
    resources: INavResources;
    compress?: boolean;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    "data-testid"?: string;
}

export const Brand = ({
    resources,
    compress,
    onClick,
    ...otherProps
}: IProps) => {
    return (
        <Clickable
            role="link"
            aria-label={resources.brandName + "-app-home-page"}
            onClick={onClick}
            compress={compress}
            tabIndex={0}
            data-testid={otherProps["data-testid"]}
        >
            <img
                src={resources.logoSrc}
                alt={resources.brandName + "-app-logo"}
            />
        </Clickable>
    );
};

// TODO: Fix img size in drawer
