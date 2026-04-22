import { useState } from "react";
import { SimpleIdGenerator } from "../util";
import { Label, Section } from "./menu-section.styles";
import { MenuSectionProps } from "./types";

/**
 * A labeled group of items within a `Menu.Content`.
 *
 * Optionally renders a divider above the section. Use to visually separate related menu actions.
 * @example
 * ```tsx
 * <Menu.Section label="Account">
 *     <Menu.Item label="Profile" />
 * </Menu.Section>
 * ```
 */
export const MenuSection = ({
    children,
    label,
    showDivider = true,
    "data-testid": testId = "menu-section",
    ...otherProps
}: MenuSectionProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [internalId] = useState(() => SimpleIdGenerator.generate());

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <Section
            $showDivider={showDivider}
            data-testid={testId}
            aria-labelledby={internalId}
            {...otherProps}
        >
            {label && (
                <Label weight="semibold" id={internalId}>
                    {label}
                </Label>
            )}
            {children}
        </Section>
    );
};

MenuSection.displayName = "Menu.Section";
