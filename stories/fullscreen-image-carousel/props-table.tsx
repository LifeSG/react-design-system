import {
    ApiTable,
    ApiTableAttributeRowProps,
    ApiTableSectionProps,
} from "stories/storybook-common";

const MODAL_PROPS: ApiTableAttributeRowProps[] = [
    {
        name: "show",
        description: (
            <>
                Toggles the visibility of the <code>Modal</code>
            </>
        ),
        mandatory: true,
        propTypes: ["boolean"],
        defaultValue: "false",
    },
    {
        name: "zIndex",
        description: (
            <>
                Allows a custom <code>z-index</code> to be specified (useful for
                modal stacking)
            </>
        ),
        propTypes: ["number"],
    },
    {
        name: "animationFrom",
        description: (
            <>
                The animation direction of which the <code>Modal</code> will
                appear
            </>
        ),
        propTypes: [`"top"`, `"bottom"`, `"left"`, `"right"`],
        defaultValue: `"bottom"`,
    },
];

const DATA: ApiTableSectionProps[] = [
    {
        attributes: [
            ...MODAL_PROPS,
            {
                name: "items",
                description: "List of carousel items",
                propTypes: ["FullscreenImageCarouselItemProps[]"],
                mandatory: true,
            },
            {
                name: "initialActiveItemIndex",
                description: "The initial image that will be displayed",
                propTypes: ["number"],
                defaultValue: "0",
            },
            {
                name: "hideThumbnail",
                description: "Specifies if the bottom thumbnail row is visible",
                propTypes: ["boolean"],
            },
            {
                name: "hideNavigation",
                description:
                    "Specifies if the left and right navigation buttons are visible",
                propTypes: ["boolean"],
            },
            {
                name: "hideCounter",
                description:
                    "Specifies if the pagination counter pill is visible",
                propTypes: ["boolean"],
            },
            {
                name: "hideMagnifier",
                description:
                    "Specifies if the magnifier button controlling zoom behaviour is visible",
                propTypes: ["boolean"],
            },
            {
                name: "onDelete",
                description:
                    "Called when the current image delete button is clicked. When provided, the delete button will be shown. If called, do not reorder the items array while a delete is in flight.",
                propTypes: [
                    "(item: FullscreenImageCarouselItemProps, index: number) => void",
                ],
            },
            {
                name: "onClose",
                description:
                    "The callback when the carousel overlay is dimissed via the close button or Esc key",
                propTypes: ["() => void"],
            },
            {
                name: "insets",
                description: (
                    <>
                        The distance from the edge of the viewport, defining the
                        safe area not covered by status bars, notches, or other
                        navigation elements. The close, magnifier, and arrow
                        buttons will be offset accordingly.
                    </>
                ),
                propTypes: [
                    "{ top?: number, bottom?: number, right?: number, right?: number }",
                ],
            },
        ],
    },
    {
        name: "FullscreenImageCarouselItemProps",
        attributes: [
            {
                name: "",
                description: (
                    <>
                        One of
                        <code>FullscreenImageCarouselImageItemProps</code> or
                        <code>FullscreenImageCarouselCustomItemProps</code>
                    </>
                ),
            },
        ],
    },
    {
        name: "FullscreenImageCarouselImageItemProps",
        attributes: [
            {
                name: "type",
                description: (
                    <>
                        Discriminant for the item type. Must be{" "}
                        <code>&quot;image&quot;</code> or omitted
                    </>
                ),
            },
            {
                name: "src",
                description: "The image src",
                mandatory: true,
                propTypes: ["string"],
            },
            {
                name: "alt",
                description:
                    "Descriptive text to be set on the image for screen readers",
                propTypes: ["string"],
            },
            {
                name: "thumbnailSrc",
                description: (
                    <>
                        The thumbnail image src. If not specified, the image{" "}
                        <code>src</code> will be used. If neither are valid, a
                        placeholder is shown
                    </>
                ),
                propTypes: ["string"],
            },
        ],
    },
    {
        name: "FullscreenImageCarouselCustomItemProps",
        attributes: [
            {
                name: "type",
                description: (
                    <>
                        Discriminant for the item type. Must be{" "}
                        <code>&quot;custom&quot;</code>
                    </>
                ),
                mandatory: true,
            },
            {
                name: "thumbnailSrc",
                description:
                    "The thumbnail image src. If not specified, a placeholder is shown",
                propTypes: ["string"],
            },
            {
                name: "itemLabel",
                description: (
                    <>
                        Label to describe the type of content (e.g.{" "}
                        <code>&quot;PDF&quot;</code>)
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "renderContent",
                description: "Custom render prop for the full slide area",
                mandatory: true,
                propTypes: ["() => React.ReactNode"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
