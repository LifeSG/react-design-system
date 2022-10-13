import React from "react";
import { Clickable } from "./brand.styles";
import { NavbarResourcesProps } from "./types";

interface Props {
    resources: NavbarResourcesProps;
    compress?: boolean | undefined;
    "data-testid"?: string | undefined;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void | undefined;
}

export const Brand = ({
    resources,
    compress,
    onClick,
    "data-testid": testId = "navbar-brand",
}: Props) => {
    return (
        <Clickable
            role="link"
            aria-label={resources.brandName + "-app-home-page"}
            onClick={onClick}
            $compress={compress}
            tabIndex={0}
            data-testid={testId}
        >
            <img
                src={resources.logoSrc}
                alt={resources.brandName + "-app-logo"}
            />
        </Clickable>
    );
};

// TODO: Fix img size in drawer
