import React from "react";
import { forwardRef } from "react";
import {
    CancelIcon,
    Container,
    SearchIcon,
    SearchInput,
} from "./dropdown-search.styles";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
    value: string /** override to cast type */;
    onClear?: () => void | undefined;
}

const Component = (
    props: Props,
    ref: React.Ref<HTMLInputElement>
): JSX.Element => {
    const { onClear, ...otherProps } = props;
    return (
        <Container key="search">
            <SearchIcon type="search" />
            <SearchInput ref={ref} {...otherProps} />
            {otherProps.value && (
                <div onClick={onClear}>
                    <CancelIcon type="cross" />
                </div>
            )}
        </Container>
    );
};

export const DropdownSearch = forwardRef(Component);
