import React, { useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { useSpring } from "@react-spring/web";
import {
    BaseProps,
    LinkListEagerProps,
    LinkListItemProps,
} from "../internal-types";
import {
    Expandable,
    ExpandableChild,
    ToggleButton,
    ToggleButtonLabel,
    ViewLessIcon,
    ViewMoreIcon,
} from "../link-list.styles";
import { LinkListItems } from "./common";

type Props<T> = Omit<BaseProps<T>, "className" | "data-testid"> &
    Omit<LinkListEagerProps, "loadMode">;
export const EagerLinkList = <T,>({
    items,
    maxShown,
    style,
    onItemClick,
    customLabels,
}: Props<T>) => {
    // =============================================================================
    // CONST, STATE, REFS
    // =============================================================================
    const [showMinimised, setShowMinimised] = useState<boolean>(
        maxShown ? maxShown >= items.length : true
    );

    const itemsMinimised = maxShown ? items.slice(maxShown) : [];

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

    const handleToggleButtonClick = () => {
        setShowMinimised(!showMinimised);
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderToggle = () => (
        <ToggleButton
            type="button"
            onClick={handleToggleButtonClick}
            data-testid="toggle-button"
        >
            <ToggleButtonLabel
                weight="semibold"
                data-testid="toggle-button-label"
            >
                {showMinimised
                    ? customLabels?.viewLess || "View less"
                    : customLabels?.viewMore || "View more"}
            </ToggleButtonLabel>
            {showMinimised ? <ViewLessIcon /> : <ViewMoreIcon />}
        </ToggleButton>
    );

    // React spring animation configuration
    const expandableStyles = useSpring({
        height: showMinimised ? resizeDetector.height : 0,
    });

    return (
        <>
            <LinkListItems
                data-testid="link-list-items-shown"
                items={maxShown ? items.slice(0, maxShown) : items}
                handleItemClick={handleListItemClick}
                style={style}
            />
            {itemsMinimised.length > 0 && (
                <Expandable
                    style={expandableStyles}
                    data-testid="minimised-content"
                >
                    <ExpandableChild ref={childRef} $border>
                        <LinkListItems
                            data-testid="link-list-items-minimised"
                            style={style}
                            items={itemsMinimised}
                            handleItemClick={handleListItemClick}
                        />
                    </ExpandableChild>
                </Expandable>
            )}
            {itemsMinimised.length > 0 && renderToggle()}
        </>
    );
};
