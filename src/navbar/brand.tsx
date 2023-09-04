import React from "react";
import { Clickable } from "./brand.styles";
import { BrandType, NavbarBrandingProps } from "./types";
import { ImageWithFallback } from "../shared/image-with-fallback/image-with-fallback";

interface Props {
    resources: NavbarBrandingProps;
    compress?: boolean | undefined;
    "data-id"?: string | undefined;
    "data-testid"?: string | undefined;
    type: BrandType;
    onClick?:
        | ((
              event: React.MouseEvent<HTMLAnchorElement>,
              type: BrandType
          ) => void)
        | undefined;
}

export const Brand = ({
    resources,
    onClick,
    "data-id": dataId,
    "data-testid": testId = "navbar-brand",
    type,
}: Props) => {
    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (onClick) {
            onClick(event, type);
        }
    };

    return (
        <Clickable
            role="link"
            aria-label={resources.brandName + "-app-home-page"}
            onClick={handleClick}
            tabIndex={0}
            data-id={dataId}
            data-testid={testId}
            $type={type}
        >
            <ImageWithFallback
                src={resources.logoSrc}
                alt={resources.brandName + "-app-logo"}
            />
        </Clickable>
    );
};

// TODO: Fix img size in drawer
