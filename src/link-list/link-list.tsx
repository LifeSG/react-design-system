import { EagerLinkList } from "./components/link-list-eager";
import { LazyLinkList } from "./components/link-list-lazy";
import { Container } from "./link-list.styles";
import { LinkListProps } from "./types";

/**
 * Which renders a grouped list of navigational
 * anchor links with optional eager or lazy loading of items.
 * @example
 * ```tsx
 * <LinkList
 *   items={[{ title: "Home", href: "/" }, { title: "About", href: "/about" }]}
 * />
 * ```
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
            ...otherProps
        } = props;

        return (
            <Container {...otherProps}>
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
                ...otherProps
            } = props;

            return (
                <Container {...otherProps}>
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
