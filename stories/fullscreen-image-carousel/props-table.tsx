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
                propTypes: ["CarouselItemProps[]"],
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
                propTypes: ["(item: CarouselItemProps, index: number) => void"],
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
        name: "CarouselItemProps",
        attributes: [
            {
                name: "src",
                description: (
                    <>
                        The image src. Required for{" "}
                        <code>ImageCarouselItemProps</code>. Not available on{" "}
                        <code>CustomCarouselItemProps</code>
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "alt",
                description: (
                    <>
                        Descriptive text to be set on the image for screen
                        readers. Only applicable for{" "}
                        <code>ImageCarouselItemProps</code>
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "thumbnailSrc",
                description: (
                    <>
                        The thumbnail image src. If not specified, the image{" "}
                        <code>src</code> will be used. If neither is available,
                        a placeholder is shown
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "itemLabel",
                description: (
                    <>
                        Label for this item used in aria-labels (e.g.{" "}
                        <code>&quot;PDF&quot;</code>). Defaults to{" "}
                        <code>&quot;image&quot;</code>. When any item sets this,
                        carousel-level aria-labels switch to generic wording.
                        Only applicable for <code>CustomCarouselItemProps</code>
                    </>
                ),
                propTypes: ["string"],
            },
            {
                name: "renderContent",
                description: (
                    <>
                        Render prop for the full slide area. When provided, the
                        item is treated as a{" "}
                        <code>CustomCarouselItemProps</code> and the consumer
                        owns the entire slide content (e.g. an iframe, embed, or
                        custom viewer). Zoom controls are hidden for custom
                        slides
                    </>
                ),
                propTypes: ["() => React.ReactNode"],
            },
        ],
    },
];

export const PropsTable = () => <ApiTable sections={DATA} />;
