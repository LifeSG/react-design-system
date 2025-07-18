import React, { forwardRef } from "react";
import {
    CancelButton,
    Container,
    SearchIcon,
    SearchInput,
} from "./dropdown-search.styles";
import { DropdownVariantType } from "./types";
import { CrossIcon } from "@lifesg/react-icons";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
    value: string /** override to cast type */;
    onClear?: () => void | undefined;
    variant?: DropdownVariantType | undefined;
}

const Component = (
    props: Props,
    ref: React.Ref<HTMLInputElement>
): React.JSX.Element => {
    const { onClear, ...otherProps } = props;

    return (
        <Container key="search">
            <SearchIcon $variant={props.variant} />
            <SearchInput ref={ref} $variant={props.variant} {...otherProps} />
            {otherProps.value && (
                <CancelButton
                    aria-label="Clear search"
                    focusOutline="browser"
                    onClick={onClear}
                    $variant={props.variant}
                >
                    <CrossIcon />
                </CancelButton>
            )}
        </Container>
    );
};

export const DropdownSearch = forwardRef(Component);
