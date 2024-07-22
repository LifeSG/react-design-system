import { CrossIcon } from "@lifesg/react-icons/cross";
import React, { forwardRef } from "react";
import { DropdownVariantType } from "../dropdown-list/types";
import {
    ClearButton,
    Container,
    SearchBox,
    SearchIcon,
    SearchInput,
} from "./dropdown-search.styles";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
    value: string /** override to cast type */;
    variant?: DropdownVariantType | undefined;
    onClear?: (() => void) | undefined;
}

const Component = (
    { value, variant, onClear, ...otherProps }: Props,
    ref: React.Ref<HTMLInputElement>
): JSX.Element => {
    return (
        <Container>
            <SearchBox>
                <SearchIcon $variant={variant} aria-hidden />
                <SearchInput
                    ref={ref}
                    value={value}
                    $variant={variant}
                    {...otherProps}
                />
            </SearchBox>
            {value && (
                <ClearButton
                    aria-label="Clear search"
                    focusOutline="browser"
                    onClick={onClear}
                    $variant={variant}
                >
                    <CrossIcon aria-hidden />
                </ClearButton>
            )}
        </Container>
    );
};

export const DropdownSearch = forwardRef(Component);
