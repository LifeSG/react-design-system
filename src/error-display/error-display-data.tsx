import { ColorScheme } from "src/theme/types";
import { MediaWidths } from "../spec/media-spec";
import {
    Error500AdditionalAttributes,
    ErrorDisplayType,
    MaintenanceAdditionalAttributes,
} from "./types";

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
    "500": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",
    },
    "503": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/503.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",
    },
    "unsupported-browser": {
        base: "https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",
        md: "https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",
        lg: "https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",
    },
};

const oldImgAttributeHelper = (
    pathAttributes: ImagePathAttributes
): React.ImgHTMLAttributes<HTMLImageElement> => {
    const { base, md, lg } = pathAttributes;
    return {
        srcSet: `${base} 416w, ${md} 832w, ${lg} 1248w`,
        src: lg,
        sizes: `(max-width: ${MediaWidths.mobileL}px) 416px, (max-width: ${MediaWidths.tablet}px) 832px, 1248px`,
    };
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
        attrs?: MaintenanceAdditionalAttributes | Error500AdditionalAttributes
    ) => JSX.Element | string | undefined;
}

export const ERROR_DISPLAY_DATA = new Map<
    ErrorDisplayType,
    ErrorDisplayDataAttrs
>([
    [
        "400",
        {
            img: oldImgAttributeHelper(ImgPaths["400"]),
            title: "Something went wrong",
            description: (
                <>
                    Please refresh the page or try again later. If it&rsquo;s
                    still not working, email{" "}
                    <a href="mailto:helpdesk@life.gov.sg">
                        helpdesk@life.gov.sg
                    </a>{" "}
                    and let us know you received a HTTP 400 error.
                </>
            ),
        },
    ],
    [
        "403",
        {
            img: oldImgAttributeHelper(ImgPaths["403"]),
            title: "Error loading page",
            description: (
                <>
                    You may not have permission to view this page. If you
                    believe this is a mistake, email{" "}
                    <a href="mailto:helpdesk@life.gov.sg">
                        helpdesk@life.gov.sg
                    </a>
                    .
                </>
            ),
        },
    ],
    [
        "404",
        {
            img: oldImgAttributeHelper(ImgPaths["404"]),
            title: "Page not found",
            description: (
                <>
                    If you entered or pasted the URL, check that it&rsquo;s
                    correct. If you followed a link on LifeSG, email{" "}
                    <a href="mailto:helpdesk@life.gov.sg">
                        helpdesk@life.gov.sg
                    </a>{" "}
                    to let us know.
                </>
            ),
        },
    ],
    [
        "408",
        {
            img: oldImgAttributeHelper(ImgPaths["400"]),
            title: "Something went wrong",
            description: (
                <>
                    Please refresh the page or try again later. If it&rsquo;s
                    still not working, email{" "}
                    <a href="mailto:helpdesk@life.gov.sg">
                        helpdesk@life.gov.sg
                    </a>{" "}
                    and let us know you received a HTTP 408 error.
                </>
            ),
        },
    ],
    [
        "500",
        {
            img: imgAttributeHelper(ImgPaths["500"]),
            title: "Something went wrong",
            description: (
                <>
                    Please try again later. If it&rsquo;s still not working,
                    email{" "}
                    <a
                        href="mailto:helpdesk@life.gov.sg"
                        data-testid="link--helpdesk"
                    >
                        helpdesk@life.gov.sg
                    </a>
                    &nbsp;and let us know you received a HTTP 500 error. Do
                    include a screenshot of this page in your email.
                </>
            ),
            renderDescription: (attrs: Error500AdditionalAttributes) => (
                <>
                    Please try again later. If it&rsquo;s still not working,
                    email{" "}
                    <a
                        href="mailto:helpdesk@life.gov.sg"
                        data-testid="link--helpdesk"
                    >
                        helpdesk@life.gov.sg
                    </a>
                    &nbsp;and let us know you received a HTTP 500 error. Do
                    include a screenshot of this page or this reference ID in
                    your email: <strong>{attrs.referenceId}</strong>.
                </>
            ),
        },
    ],
    [
        "503",
        {
            img: oldImgAttributeHelper(ImgPaths["503"]),
            title: "Service under maintenance",
            description:
                "This service is currently unavailable. Please try again later.",
        },
    ],
    [
        "maintenance",
        {
            img: oldImgAttributeHelper(ImgPaths["503"]),
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
        "unsupported-browser",
        {
            img: imgAttributeHelper(ImgPaths["unsupported-browser"]),
            title: "Browser not supported",
            description:
                "To use LifeSG, download the latest version of Chrome, Edge, Firefox or Safari.",
        },
    ],
    [
        "partially-supported-browser",
        {
            img: imgAttributeHelper(ImgPaths["unsupported-browser"]),
            title: "Browser not supported",
            description:
                "LifeSG works best with the latest version of Chrome, Edge, Firefox or Safari. If you continue with your browser, you may run into problems.",
        },
    ],
]);

export const ERROR_DISPLAY_DATA_BSG = new Map<
    ErrorDisplayType,
    ErrorDisplayDataAttrs
>([
    [
        "400",
        {
            img: oldImgAttributeHelper(ImgPaths["400"]),
            title: "Something went wrong",
            description: (
                <>
                    This could be a temporary problem, so please refresh the
                    page or try again later.
                </>
            ),
        },
    ],
    [
        "403",
        {
            img: oldImgAttributeHelper(ImgPaths["403"]),
            title: "Error loading page",
            description: <>You may not have permission to view this page.</>,
        },
    ],
    [
        "404",
        {
            img: oldImgAttributeHelper(ImgPaths["404"]),
            title: "Page not found",
            description: (
                <>
                    If you entered or pasted the URL, check that it&rsquo;s
                    correct.
                </>
            ),
        },
    ],
    [
        "408",
        {
            img: oldImgAttributeHelper(ImgPaths["400"]),
            title: "Something went wrong",
            description: (
                <>
                    Please refresh the page or try again later. If it&rsquo;s
                    still not working, email{" "}
                    <a href="mailto:helpdesk@life.gov.sg">
                        helpdesk@life.gov.sg
                    </a>{" "}
                    and let us know you received a HTTP 408 error.
                </>
            ),
        },
    ],
    [
        "500",
        {
            img: imgAttributeHelper(ImgPaths["500"]),
            title: "Something went wrong",
            description: (
                <>
                    This could be a temporary problem, so please refresh the
                    page or try again later.
                </>
            ),
            renderDescription: (attrs: Error500AdditionalAttributes) => (
                <>
                    This could be a temporary problem, so please refresh the
                    page or try again later.
                </>
            ),
        },
    ],
    [
        "503",
        {
            img: oldImgAttributeHelper(ImgPaths["503"]),
            title: "Service under maintenance",
            description:
                "This service is currently unavailable. Please try again later.",
        },
    ],
    [
        "maintenance",
        {
            img: oldImgAttributeHelper(ImgPaths["503"]),
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
        "unsupported-browser",
        {
            img: imgAttributeHelper(ImgPaths["unsupported-browser"]),
            title: "Browser not supported",
            description:
                "To use BookingSG, download the latest version of Chrome, Edge, Firefox or Safari.",
        },
    ],
    [
        "partially-supported-browser",
        {
            img: imgAttributeHelper(ImgPaths["unsupported-browser"]),
            title: "Browser not supported",
            description:
                "BookingSG works best with the latest version of Chrome, Edge, Firefox or Safari. If you continue with your browser, you may run into problems.",
        },
    ],
]);

export const errorDisplayData = (
    type: ErrorDisplayType,
    resourceScheme: ColorScheme = "base"
) => {
    if (resourceScheme === "base") {
        return ERROR_DISPLAY_DATA.get(type);
    } else if (resourceScheme === "bookingsg") {
        return ERROR_DISPLAY_DATA_BSG.get(type);
    }
};
