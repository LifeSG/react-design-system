import { MinusIcon } from "@lifesg/react-icons/minus";
import { PlusIcon } from "@lifesg/react-icons/plus";
import { animated, useSpring } from "@react-spring/web";
import type React from "react";
import { useState } from "react";
import { useResizeDetector } from "react-resize-detector";

import { inertValue } from "../../shared/accessibility";
import { Typography } from "../../typography";
import { useId } from "../../util";
import * as styles from "../link-list.styles";
import type {
    BaseProps,
    LinkListEagerProps,
    LinkListItemProps,
} from "../types";
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

    const id = useId();

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
        <button
            type="button"
            onClick={handleToggleButtonClick}
            data-testid="toggle-button"
            aria-expanded={showMinimised}
            aria-controls={id}
            className={styles.toggleButton}
        >
            <Typography.BodyMD
                as="span"
                weight="semibold"
                data-testid="toggle-button-label"
                className={styles.toggleButtonLabel}
            >
                {showMinimised
                    ? customLabels?.viewLess || "View less"
                    : customLabels?.viewMore || "View more"}
            </Typography.BodyMD>
            {showMinimised ? (
                <MinusIcon aria-hidden className={styles.toggleButtonIcon} />
            ) : (
                <PlusIcon aria-hidden className={styles.toggleButtonIcon} />
            )}
        </button>
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
                <animated.div
                    id={id}
                    style={expandableStyles}
                    data-testid="minimised-content"
                    inert={inertValue(!showMinimised)}
                    className={styles.expandable}
                >
                    <div ref={childRef} className={styles.expandableList}>
                        <LinkListItems
                            data-testid="link-list-items-minimised"
                            style={style}
                            items={itemsMinimised}
                            handleItemClick={handleListItemClick}
                        />
                    </div>
                </animated.div>
            )}
            {itemsMinimised.length > 0 && renderToggle()}
        </>
    );
};
