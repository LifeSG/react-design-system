import clsx from "clsx";

import { EagerLinkList } from "./components/link-list-eager";
import { LazyLinkList } from "./components/link-list-lazy";
import * as styles from "./link-list.styles";
import type { LinkListProps } from "./types";

// @catalog
/**
 * A list of anchor links with optional truncation or lazy loading.
 *
 * Use `LinkList` to display a set of navigable links with titles and optional
 * descriptions.
 */
export const LinkList = <T,>(props: LinkListProps<T>): JSX.Element => {
    if (!props.loadMode || props.loadMode === "eager") {
        const {
            loadMode: _loadMode,
            items,
            style = "default",
            onItemClick,
            maxShown,
            customLabels,
            className,
            ...otherProps
        } = props;

        return (
            <div {...otherProps} className={clsx(styles.container, className)}>
                <EagerLinkList
                    items={items}
                    maxShown={maxShown}
                    style={style}
                    onItemClick={onItemClick}
                    customLabels={customLabels}
                />
            </div>
        );
    }
    if (props.loadMode === "lazy") {
        {
            const {
                loadMode: _loadMode,
                items,
                style = "default",
                onItemClick,
                loadMore,
                onLoadMore,
                customLabels,
                className,
                ...otherProps
            } = props;

            return (
                <div
                    {...otherProps}
                    className={clsx(styles.container, className)}
                >
                    <LazyLinkList
                        items={items}
                        style={style}
                        onItemClick={onItemClick}
                        loadMore={loadMore}
                        onLoadMore={onLoadMore}
                        customLabels={customLabels}
                    />
                </div>
            );
        }
    }

    return <></>;
};
