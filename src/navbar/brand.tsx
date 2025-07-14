import React from "react";
import { Clickable, NonClickable } from "./brand.styles";
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
            event.preventDefault();
            onClick(event, type);
        }
    };

    // Determine if this should be clickable - brands are clickable by default when onClick is provided
    const isClickable = !!onClick;

    const ariaLabel =
        type === "primary"
            ? `Go to ${resources.brandName} homepage`
            : `Go to ${resources.brandName}`;

    if (isClickable) {
        return (
            <Clickable
                data-id={dataId}
                data-testid={testId}
                $type={type}
                href="#"
                onClick={handleClick}
                aria-label={ariaLabel}
            >
                <ImageWithFallback src={resources.logoSrc} alt="" />
            </Clickable>
        );
    }

    return (
        <NonClickable data-id={dataId} data-testid={testId} $type={type}>
            <ImageWithFallback
                src={resources.logoSrc}
                alt={resources.brandName}
            />
        </NonClickable>
    );
};

// TODO: Fix img size in drawer
