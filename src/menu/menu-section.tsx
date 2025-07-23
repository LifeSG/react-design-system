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
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <Section
            $showDivider={showDivider}
            data-testid={testId}
            {...otherProps}
        >
            {label && <Label weight="semibold">{label}</Label>}
            {children}
        </Section>
    );
};

MenuSection.displayName = "Menu.Section";
