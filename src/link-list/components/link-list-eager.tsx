import React, { useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { useSpring } from "react-spring";
import {
    BaseProps,
    LinkListEagerProps,
    LinkListItemProps,
} from "../internal-types";
import {
    Expandable,
    ExpandableChild,
    Item,
    ToggleButton,
    ToggleButtonLabel,
    ViewLessIcon,
    ViewMoreIcon,
} from "../link-list.styles";
import { ItemContent, ShownItems } from "./common";

type Props<T> = Omit<BaseProps<T>, "className" | "data-testid"> &
    Omit<LinkListEagerProps, "loadMode">;
export const EagerLinkList = <T,>({
    items,
    maxShown,
    style,
    onItemClick,
    customLabel,
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
    const renderMinimisedItems = () => {
        return itemsMinimised.map((item, index) => {
            const {
                title,
                description,
                onClick: _onClick, // deconstruct since we are handling it
                secondaryDescription,
                ...otherProps
            } = item;
            return (
                <Item
                    key={`list-item-minimised-${index}`}
                    data-testid={`list-item-minimised-${index}`}
                    onClick={(event) => handleListItemClick(event, item)}
                    {...otherProps}
                >
                    <ItemContent
                        index={index}
                        title={title}
                        description={description}
                        secondaryDescription={secondaryDescription}
                        style={style}
                    />
                </Item>
            );
        });
    };

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
                    ? customLabel?.viewLess || "View less"
                    : customLabel?.viewMore || "View more"}
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
            <ShownItems
                items={maxShown ? items.slice(0, maxShown) : items}
                handleItemClick={handleListItemClick}
                style={style}
            />
            {itemsMinimised.length > 0 && (
                <Expandable
                    style={expandableStyles}
                    data-testid="minimised-content"
                >
                    <ExpandableChild ref={childRef}>
                        {renderMinimisedItems()}
                    </ExpandableChild>
                </Expandable>
            )}
            {itemsMinimised.length > 0 && renderToggle()}
        </>
    );
};
