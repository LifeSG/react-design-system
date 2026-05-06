import type { ComponentProps } from "react";
import { forwardRef } from "react";
import type { Components } from "react-virtuoso";

interface VirtuosoContext {
    listProps: React.HTMLAttributes<HTMLDivElement>;
    listItemProps: React.HTMLAttributes<HTMLDivElement>;
}

type VirtuosoListProps = Exclude<
    Components<unknown, VirtuosoContext>["List"],
    undefined
>;

type VirtuosoItemProps = Exclude<
    Components<unknown, VirtuosoContext>["Item"],
    undefined
>;

const List = (
    props: ComponentProps<VirtuosoListProps>,
    ref: React.Ref<HTMLDivElement>
) => {
    const { context, ...otherProps } = props;
    return <div ref={ref} {...context?.listProps} {...otherProps} />;
};

export const VirtuosoList = forwardRef(List);

const Item = (
    props: ComponentProps<VirtuosoItemProps>,
    ref: React.Ref<HTMLDivElement>
) => {
    const { context, item: _item, ...otherProps } = props;

    return <div ref={ref} {...context?.listItemProps} {...otherProps} />;
};

export const VirtuosoItem = forwardRef(Item);
