import React from "react";
import {
    CancelButton,
    CancelIcon,
    Container,
    SearchIcon,
    SearchInput,
} from "./dropdown-search.styles";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
    value: string;
    onClear?: () => void | undefined;
}

const Component = (
    props: Props,
    ref: React.Ref<HTMLInputElement>
): JSX.Element => {
    const { onClear, ...otherProps } = props;

    const renderClearButton = () => {
        if (otherProps.value) {
            return (
                <CancelButton
                    aria-label="Clear search"
                    focusOutline="browser"
                    onClick={onClear}
                >
                    <CancelIcon />
                </CancelButton>
            );
        }
    };

    return (
        <Container>
            <SearchIcon />
            <SearchInput ref={ref} {...otherProps} />
            {renderClearButton()}
        </Container>
    );
};

export const DropdownSearch = React.forwardRef(Component);
