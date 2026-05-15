import type React from "react";

import { ImageWithFallback } from "../shared/image-with-fallback/image-with-fallback";
import * as styles from "./brand.styles";
import type { BrandType, NavbarBrandingProps } from "./types";

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

    if (isClickable) {
        return (
            <a
                data-id={dataId}
                data-testid={testId}
                className={styles.container}
                role="link"
                tabIndex={0}
                onClick={handleClick}
            >
                <ImageWithFallback src={resources.logoSrc} alt={logoLabel} />
            </a>
        );
    }

    return (
        <div data-id={dataId} data-testid={testId} className={styles.container}>
            <ImageWithFallback src={resources.logoSrc} alt={logoLabel} />
        </div>
    );
};

// TODO: Fix img size in drawer
