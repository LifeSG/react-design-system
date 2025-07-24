import { Container } from "./link-list.styles";
import { EagerLinkList } from "./components/link-list-eager";
import { LazyLinkList } from "./components/link-list-lazy";
import { LinkListProps } from "./types";

export const LinkList = <T,>(props: LinkListProps<T>): JSX.Element => {
    if (!props.loadMode || props.loadMode === "eager") {
        const {
            loadMode: _loadMode,
            items,
            style = "default",
            onItemClick,
            maxShown,
            customLabel,
            ...otherProps
        } = props;

        return (
            <Container {...otherProps}>
                <EagerLinkList
                    items={items}
                    maxShown={maxShown}
                    style={style}
                    onItemClick={onItemClick}
                    customLabel={customLabel}
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
                customLabel,
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
                        customLabel={customLabel}
                    />
                </Container>
            );
        }
    }

    return <></>;
};
