import { MediaWidths } from "../spec/media-spec";
import { ResourceScheme } from "../theme/types";
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
    "insufficient-credits": {
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

const BsgImgPaths: Record<string, ImagePathAttributes> = {
    "400": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",
    },
    "403": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",
    },
    "404": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",
    },
    "408": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",
    },
    "500": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",
    },
    "502": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",
    },
    "503": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",
    },
    "504": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",
    },
    confirmation: {
        base: "https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",
    },
    "insufficient-credits": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",
    },
    inactivity: {
        base: "https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",
    },
    "link-error": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",
    },
    logout: {
        base: "https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",
    },
    "no-item-found": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",
    },
    "payment-unsuccessful": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",
    },
    "transfer-unsuccessful": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",
    },
    "unsupported-browser": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",
    },
    warning: {
        base: "https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",
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

const ERROR_DISPLAY_DATA = new Map<ErrorDisplayType, ErrorDisplayDataAttrs>([
    [
        "400",
        {
            img: imgAttributeHelper(ImgPaths["400"]),
            title: "Something went wrong",
            description:
                "This could be a temporary problem, so please refresh the page or\ntry again later.",
        },
    ],
    [
        "403",
        {
            img: imgAttributeHelper(ImgPaths["403"]),
            title: "Error loading page",
            description:
                "You may not have permission to view this page. If someone gave you this link, let them know about this error.",
        },
    ],
    [
        "404",
        {
            img: imgAttributeHelper(ImgPaths["404"]),
            title: "Page not found",
            description:
                "If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error.",
        },
    ],
    [
        "408",
        {
            img: imgAttributeHelper(ImgPaths["408"]),
            title: "Something went wrong",
            description:
                "This could be a temporary problem, so please refresh the page or try again later.",
        },
    ],
    [
        "500",
        {
            img: imgAttributeHelper(ImgPaths["500"]),
            title: "Something went wrong",
            description:
                "We're working on a fix for the problem. Please try again later.",
        },
    ],
    [
        "502",
        {
            img: imgAttributeHelper(ImgPaths["502"]),
            title: "Something went wrong",
            description:
                "This could be a temporary problem, so please refresh the page or try again later.",
        },
    ],
    [
        "503",
        {
            img: imgAttributeHelper(ImgPaths["503"]),
            title: "Service under maintenance",
            description:
                "This service is currently unavailable. Please try again later.",
        },
    ],
    [
        "504",
        {
            img: imgAttributeHelper(ImgPaths["504"]),
            title: "Something went wrong",
            description:
                "This could be a temporary problem, so please refresh the page or \ntry again later.",
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
        "insufficient-credits",
        {
            img: imgAttributeHelper(ImgPaths["insufficient-credits"]),
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
            title: "Payment unsuccessful",
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
            title: "Browser not supported",
            description:
                "Download the latest version of Chrome, Edge, Firefox or Safari.",
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

const ERROR_DISPLAY_DATA_BSG = new Map<ErrorDisplayType, ErrorDisplayDataAttrs>(
    [
        [
            "400",
            {
                img: imgAttributeHelper(BsgImgPaths["400"]),
                title: "400 Bad Request",
                description: "A generic error state illustration.",
            },
        ],
        [
            "403",
            {
                img: imgAttributeHelper(BsgImgPaths["403"]),
                title: "403 Forbidden",
                description: "A generic error state illustration.",
            },
        ],
        [
            "404",
            {
                img: imgAttributeHelper(BsgImgPaths["404"]),
                title: "404 No Page Found",
                description: "No page found.",
            },
        ],
        [
            "408",
            {
                img: imgAttributeHelper(BsgImgPaths["408"]),
                title: "408 Request Timeout",
                description: "A generic error state illustration.",
            },
        ],
        [
            "500",
            {
                img: imgAttributeHelper(BsgImgPaths["500"]),
                title: "Error state",
                description: "A generic error state illustration.",
            },
        ],
        [
            "502",
            {
                img: imgAttributeHelper(BsgImgPaths["502"]),
                title: "502 Bad Gateway",
                description: "An error state illustration.",
            },
        ],
        [
            "503",
            {
                img: imgAttributeHelper(BsgImgPaths["503"]),
                title: "503 Service Unavailable",
                description: "A generic error state illustration.",
            },
        ],
        [
            "504",
            {
                img: imgAttributeHelper(BsgImgPaths["504"]),
                title: "504 Gateway Timeout",
                description: "A generic error state illustration.",
            },
        ],
        [
            "confirmation",
            {
                img: imgAttributeHelper(BsgImgPaths["confirmation"]),
                title: "Confirmation modal",
                description:
                    "For form-filling instances, to confirm with the user that they want to exit the form and lose their edits.",
            },
        ],
        [
            "link-error",
            {
                img: imgAttributeHelper(BsgImgPaths["link-error"]),
                title: "Link Error",
                description: "When a link is expired.",
            },
        ],
        [
            "logout",
            {
                img: imgAttributeHelper(BsgImgPaths["logout"]),
                title: "Logged-out",
                description:
                    "When the user has been inactive for a certain period of time, and has been logged out after X minutes.",
            },
        ],
        [
            "insufficient-credits",
            {
                img: imgAttributeHelper(BsgImgPaths["insufficient-credits"]),
                title: "Insufficient credits",
                description:
                    "When the user has insufficient credits for a transaction.",
            },
        ],
        [
            "inactivity",
            {
                img: imgAttributeHelper(BsgImgPaths["inactivity"]),
                title: "Inactive state",
                description:
                    "When the user has been inactive for a certain period of time, and will be logged out after X minutes.",
            },
        ],
        [
            "maintenance",
            {
                img: imgAttributeHelper(BsgImgPaths["503"]),
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
                img: imgAttributeHelper(BsgImgPaths["no-item-found"]),
                title: "No items found",
                description:
                    "For instances where the no items can be found for a particular feature.",
            },
        ],
        [
            "payment-unsuccessful",
            {
                img: imgAttributeHelper(BsgImgPaths["payment-unsuccessful"]),
                title: "Payment unsuccessful",
                description:
                    "When the user’s payment transaction is unsuccessful.",
            },
        ],
        [
            "transfer-unsuccessful",
            {
                img: imgAttributeHelper(BsgImgPaths["transfer-unsuccessful"]),
                title: "Transfer unsuccessful",
                description:
                    "For instances where the user is unsuccessful in transferring credits.",
            },
        ],
        [
            "unsupported-browser",
            {
                img: imgAttributeHelper(BsgImgPaths["unsupported-browser"]),
                title: "Error state",
                description: "A generic error state illustration.",
            },
        ],
        [
            "partially-supported-browser",
            {
                img: imgAttributeHelper(BsgImgPaths["unsupported-browser"]),
                title: "Error state",
                description: "A generic error state illustration.",
            },
        ],
        [
            "warning",
            {
                img: imgAttributeHelper(BsgImgPaths["warning"]),
                title: "Warning states",
                description: "Generic warning and error state illustrations.",
            },
        ],
    ]
);

export const getErrorDisplayData = (
    type: ErrorDisplayType,
    resourceScheme: ResourceScheme
) => {
    if (resourceScheme === "bookingsg") {
        return ERROR_DISPLAY_DATA_BSG.get(type);
    }
    return ERROR_DISPLAY_DATA.get(type);
};
