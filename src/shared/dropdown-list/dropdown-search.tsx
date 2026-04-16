import { CrossIcon } from "@lifesg/react-icons/cross";
import { MagnifierIcon } from "@lifesg/react-icons/magnifier";
import clsx from "clsx";
import type React from "react";
import { forwardRef } from "react";

import { ClickableIcon } from "../clickable-icon";
import { BasicInput } from "../input-wrapper";
import * as styles from "./dropdown-search.styles";
import type { DropdownVariantType } from "./types";

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
        <div
            className={clsx(
                styles.container,
                variant === "small"
                    ? styles.containerVariantSmall
                    : styles.containerVariantDefault
            )}
        >
            <label
                className={clsx(
                    styles.searchBox,
                    variant === "small" && styles.searchBoxVariantSmall
                )}
            >
                <MagnifierIcon aria-hidden className={styles.searchIcon} />
                <BasicInput
                    ref={ref}
                    value={value}
                    className={styles.searchInput}
                    {...otherProps}
                />
            </label>
            {value && (
                <ClickableIcon
                    aria-label="Clear search"
                    focusOutline="browser"
                    onClick={onClear}
                    className={styles.clearButton}
                >
                    <CrossIcon aria-hidden />
                </ClickableIcon>
            )}
        </div>
    );
};

export const DropdownSearch = forwardRef(Component);
