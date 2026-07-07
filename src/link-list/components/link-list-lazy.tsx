import { PlusIcon } from "@lifesg/react-icons/plus";
import { animated, useSpring } from "@react-spring/web";
import clsx from "clsx";
import type React from "react";
import { useState } from "react";
import { useResizeDetector } from "react-resize-detector";

import { ComponentLoadingSpinner } from "../../shared/component-loading-spinner";
import { Colour } from "../../theme";
import { Typography } from "../../typography";
import type {
    BaseProps,
    LinkListItemProps,
    LinkListLazyProps,
} from "../internal-types";
import * as styles from "../link-list.styles";
import { LinkListItems } from "./common";

type Props<T> = Omit<BaseProps<T>, "className" | "data-testid"> &
    Omit<LinkListLazyProps, "loadMode">;
export const LazyLinkList = <T,>({
    items,
    style,
    onItemClick,
    loadMore,
    onLoadMore,
    customLabels,
}: Props<T>) => {
    // =============================================================================
    // CONST, STATE, REFS
    // =============================================================================
    const [isLoading, setIsLoading] = useState(false);

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
        if (isLoading) return;

        setIsLoading(true);
        try {
            await onLoadMore();
        } catch {
            // do nothing
        }
        setIsLoading(false);
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderToggle = () => {
        const label = isLoading
            ? "Loading..."
            : customLabels?.viewMore || "View more";

        return (
            <button
                type="button"
                onClick={handleClickViewMore}
                data-testid="toggle-button"
                aria-disabled={isLoading}
                className={clsx(
                    styles.toggleButton,
                    isLoading && styles.toggleButtonLoading
                )}
            >
                <Typography.BodyMD
                    as="span"
                    weight="semibold"
                    data-testid="toggle-button-label"
                    aria-busy={isLoading}
                    className={styles.toggleButtonLabel}
                >
                    {label}
                </Typography.BodyMD>

                {isLoading ? (
                    <ComponentLoadingSpinner color={Colour["text-disabled"]} />
                ) : (
                    <PlusIcon aria-hidden className={styles.toggleButtonIcon} />
                )}
            </button>
        );
    };

    // React spring animation configuration
    const expandableStyles = useSpring({
        height: resizeDetector.height,
    });

    return (
        <>
            <animated.div
                style={expandableStyles}
                data-testid="content"
                className={styles.expandable}
            >
                <div ref={childRef}>
                    <LinkListItems
                        data-testid="link-list-items"
                        items={items}
                        handleItemClick={handleListItemClick}
                        style={style}
                    />
                </div>
            </animated.div>
            {loadMore && renderToggle()}
        </>
    );
};
