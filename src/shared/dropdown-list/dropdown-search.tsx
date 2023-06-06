import React, { forwardRef } from "react";
import {
    CancelButton,
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
            <SearchIcon />
            <SearchInput ref={ref} {...otherProps} />
            {otherProps.value && (
                <CancelButton
                    aria-label="Clear search"
                    focusOutline="browser"
                    type="reset"
                    onClick={onClear}
                >
                    <CancelIcon />
                </CancelButton>
            )}
        </Container>
    );
};

export const DropdownSearch = forwardRef(Component);
