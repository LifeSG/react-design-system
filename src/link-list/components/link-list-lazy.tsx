import React, { useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { useSpring } from "react-spring";
import {
    BaseProps,
    LinkListItemProps,
    LinkListLazyProps,
} from "../internal-types";
import {
    Expandable,
    ExpandableChild,
    ToggleButton,
    ToggleButtonLabel,
    ViewMoreIcon,
} from "../link-list.styles";
import { ShownItems } from "./common";

type Props<T> = Omit<BaseProps<T>, "className" | "data-testid"> &
    Omit<LinkListLazyProps, "loadMode">;
export const LazyLinkList = <T,>({
    items,
    style,
    onItemClick,
    loadMore,
    onLoadMore,
}: Props<T>) => {
    // =============================================================================
    // CONST, STATE, REFS
    // =============================================================================
    const [, setIsLoading] = useState(false);

    const resizeDetector = useResizeDetector();
    const childRef = resizeDetector.ref;

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleListItemClick = (
        event: React.MouseEvent<HTMLAnchorElement>,
        item: LinkListItemProps<T>
    ) => {
        /**
         * Individual item's onClick will override
         * the onItemClick callback
         */
        if (item.onClick) {
            event.preventDefault();
            item.onClick(event);
        } else if (onItemClick) {
            event.preventDefault();
            onItemClick(item, event);
        }

        // Do nothing and let default event happen
    };

    const handleClickViewMore = async () => {
        setIsLoading(true);
        try {
            await onLoadMore();
        } catch (e) {
            // do nothing
        }
        setIsLoading(false);
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderViewMore = () => (
        <ToggleButton
            type="button"
            onClick={handleClickViewMore}
            data-testid="toggle-button"
        >
            <ToggleButtonLabel
                weight="semibold"
                data-testid="toggle-button-label"
            >
                View more
            </ToggleButtonLabel>
            <ViewMoreIcon />
        </ToggleButton>
    );

    // React spring animation configuration
    const expandableStyles = useSpring({
        height: resizeDetector.height,
    });

    return (
        <>
            <Expandable style={expandableStyles} data-testid="content">
                <ExpandableChild ref={childRef}>
                    <ShownItems
                        items={items}
                        handleItemClick={handleListItemClick}
                        style={style}
                    />
                    {/* TODO: handle loading state */}
                    {/* {isLoading && <></>} */}
                </ExpandableChild>
            </Expandable>
            {loadMore && renderViewMore()}
        </>
    );
};
