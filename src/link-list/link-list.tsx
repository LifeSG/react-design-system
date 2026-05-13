import clsx from "clsx";

import { EagerLinkList } from "./components/link-list-eager";
import { LazyLinkList } from "./components/link-list-lazy";
import { Container } from "./link-list.styles";
import type { LinkListProps } from "./types";

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
            <Container {...otherProps} className={clsx(className)}>
                <EagerLinkList
                    items={items}
                    maxShown={maxShown}
                    style={style}
                    onItemClick={onItemClick}
                    customLabels={customLabels}
                />
            </Container>
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
                <Container {...otherProps} className={clsx(className)}>
                    <LazyLinkList
                        items={items}
                        style={style}
                        onItemClick={onItemClick}
                        loadMore={loadMore}
                        onLoadMore={onLoadMore}
                        customLabels={customLabels}
                    />
                </Container>
            );
        }
    }

    return <></>;
};
