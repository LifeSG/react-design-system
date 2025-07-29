import { useState } from "react";
import { SimpleIdGenerator } from "../util";
import { Label, Section } from "./menu-section.styles";
import { MenuSectionProps } from "./types";

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
            role="group"
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
