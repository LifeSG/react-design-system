import React from "react";
import { Container } from "./brand.styles";
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

    // Determine if this should be clickable - brands are clickable by default
    const isClickable = !!onClick;

    const logoLabel = isClickable
        ? type === "primary"
            ? `Go to ${resources.brandName} homepage`
            : `Go to ${resources.brandName}`
        : resources.brandName;

    const props = isClickable
        ? {
              role: "link",
              tabIndex: 0,
              onClick: handleClick,
          }
        : {};

    return (
        <Container
            data-id={dataId}
            data-testid={testId}
            $type={type}
            as={isClickable ? "a" : "div"}
            {...props}
        >
            <ImageWithFallback src={resources.logoSrc} alt={logoLabel} />
        </Container>
    );
};

// TODO: Fix img size in drawer
