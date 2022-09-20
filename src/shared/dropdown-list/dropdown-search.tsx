import React from "react";
import { forwardRef } from "react";
import { Container, SearchIcon, SearchInput } from "./dropdown-search.styles";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
    value: string /** override to cast type */;
}

const Component = (
    props: Props,
    ref: React.Ref<HTMLInputElement>
): JSX.Element => {
    return (
        <Container key="search">
            <SearchIcon type="search" />
            <SearchInput ref={ref} {...props} />
        </Container>
    );
};

export const DropdownSearch = forwardRef(Component);
