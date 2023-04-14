import { MediaWidths } from "../spec/media-spec";
import { ErrorDisplayType, MaintenanceAdditionalAttributes } from "./types";

// =============================================================================
// IMAGE PATHS
// =============================================================================
interface ImagePathAttributes {
    base: string;
    md: string;
    lg: string;
}

const ImgPaths: Record<string, ImagePathAttributes> = {
    "400": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/400.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",
    },
    "403": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/403.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",
    },
    "404": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/404.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",
    },
    "408": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/408.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",
    },
    "500": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",
    },
    "502": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/502.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",
    },
    "503": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/503.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",
    },
    "504": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/504.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",
    },
    confirmation: {
        base: "https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",
    },
    "insufficient-credit": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",
    },
    inactivity: {
        base: "https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",
    },
    "link-error": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/link-error.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",
    },
    logout: {
        base: "https://assets.life.gov.sg/react-design-system/img/error/logout.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",
    },
    "no-item-found": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",
    },
    "payment-unsuccessful": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",
    },
    "transfer-unsuccessful": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",
    },
    "unsupported-browser": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",
    },
    warning: {
        base: "https://assets.life.gov.sg/react-design-system/img/error/warning.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",
    },
};

const imgAttributeHelper = (
    pathAttributes: ImagePathAttributes
): React.ImgHTMLAttributes<HTMLImageElement> => {
    const { base, md, lg } = pathAttributes;
    return {
        srcSet: `${base} 400w, ${md} 800w, ${lg} 1200w`,
        src: lg,
        sizes: `(max-width: ${MediaWidths.mobileL}px) 400px, (max-width: ${MediaWidths.tablet}px) 800px, 1200px`,
    };
};

// =============================================================================
// ERROR DISPLAY ATTRIBUTES
// =============================================================================

interface ErrorDisplayDataAttrs {
    img?: React.ImgHTMLAttributes<HTMLImageElement> | undefined;
    imgSrc?: string | undefined;
    title?: string | undefined;
    description?: string | JSX.Element | undefined;
    renderDescription?: (
        attrs?: MaintenanceAdditionalAttributes
    ) => JSX.Element | string | undefined;
}

export const ERROR_DISPLAY_DATA = new Map<
    ErrorDisplayType,
    ErrorDisplayDataAttrs
>([
    [
        "400",
        {
            img: imgAttributeHelper(ImgPaths["400"]),
            title: "400 Bad Request",
            description: <>A generic error state illustration.</>,
        },
    ],
    [
        "403",
        {
            img: imgAttributeHelper(ImgPaths["403"]),
            title: "403 Forbidden",
            description: <>A generic error state illustration.</>,
        },
    ],
    [
        "404",
        {
            img: imgAttributeHelper(ImgPaths["404"]),
            title: "404 No page found",
            description: <>No page found</>,
        },
    ],
    [
        "408",
        {
            img: imgAttributeHelper(ImgPaths["408"]),
            title: "408 Request Timeout",
            description: <>A generic error state illustration.</>,
        },
    ],
    [
        "500",
        {
            img: imgAttributeHelper(ImgPaths["500"]),
            title: "Error state",
            description: <>A generic error state illustration.</>,
        },
    ],
    [
        "502",
        {
            img: imgAttributeHelper(ImgPaths["502"]),
            title: "502 Bad Gateway",
            description: "An error state illustration.",
        },
    ],
    [
        "503",
        {
            img: imgAttributeHelper(ImgPaths["503"]),
            title: "503 Service Unavailable",
            description: "A generic error state illustration.",
        },
    ],
    [
        "504",
        {
            img: imgAttributeHelper(ImgPaths["504"]),
            title: "504 Gateway Timeout",
            description: "A generic error state illustration.",
        },
    ],
    [
        "confirmation",
        {
            img: imgAttributeHelper(ImgPaths["confirmation"]),
            title: "Confirmation modal",
            description:
                "For form-filling instances, to confirm with the user that they want to exit the form and lose their edits.",
        },
    ],
    [
        "link-error",
        {
            img: imgAttributeHelper(ImgPaths["link-error"]),
            title: "Link Error",
            description: "When a link is expired.",
        },
    ],
    [
        "logout",
        {
            img: imgAttributeHelper(ImgPaths["logout"]),
            title: "Logged-out",
            description:
                "When the user has been inactive for a certain period of time, and has been logged out after X minutes.",
        },
    ],
    [
        "insufficient-credit",
        {
            img: imgAttributeHelper(ImgPaths["insufficient-credit"]),
            title: "Insufficient credits",
            description:
                "When the user has insufficient credits for a transaction.",
        },
    ],
    [
        "inactivity",
        {
            img: imgAttributeHelper(ImgPaths["inactivity"]),
            title: "Inactive state",
            description:
                "When the user has been inactive for a certain period of time, and will be logged out after X minutes.",
        },
    ],
    [
        "maintenance",
        {
            img: imgAttributeHelper(ImgPaths["503"]),
            title: "Service under maintenance",
            description:
                "This service is currently unavailable. Please try again later.",
            renderDescription: (attrs: MaintenanceAdditionalAttributes) => (
                <>
                    This service is currently unavailable. Please try again
                    after&nbsp;
                    <strong>{attrs.dateString}</strong>.
                </>
            ),
        },
    ],
    [
        "no-item-found",
        {
            img: imgAttributeHelper(ImgPaths["no-item-found"]),
            title: "No items found",
            description:
                "For instances where the no items can be found for a particular feature.",
        },
    ],
    [
        "payment-unsuccessful",
        {
            img: imgAttributeHelper(ImgPaths["payment-unsuccessful"]),
            title: "Payment unseccessful",
            description: "When the user’s payment transaction is unsuccessful.",
        },
    ],
    [
        "transfer-unsuccessful",
        {
            img: imgAttributeHelper(ImgPaths["transfer-unsuccessful"]),
            title: "Transfer unsuccessful",
            description:
                "For instances where the user is unsuccessful in transferring credits.",
        },
    ],
    [
        "unsupported-browser",
        {
            img: imgAttributeHelper(ImgPaths["unsupported-browser"]),
            title: "Error state",
            description: "A generic error state illustration.",
        },
    ],
    [
        "partially-supported-browser",
        {
            img: imgAttributeHelper(ImgPaths["unsupported-browser"]),
            title: "Error state",
            description: "A generic error state illustration.",
        },
    ],
    [
        "warning",
        {
            img: imgAttributeHelper(ImgPaths["warning"]),
            title: "Warning states",
            description: "Generic warning and error state illustrations.",
        },
    ],
]);
