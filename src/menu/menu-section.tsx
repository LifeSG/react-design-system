import { Children, useMemo } from "react";
import { useId } from "../util";
import { Label, List, SectionWrapper } from "./menu-section.styles";
import { MenuSectionProps } from "./types";

export const MenuSection = ({
    children,
    label,
    showDivider = true,
    columns,
    "data-testid": testId = "menu-section",
    ...otherProps
}: MenuSectionProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const internalId = useId();
    // clamp to 1 column so a non-positive `columns` never yields a negative grid-template-rows count
    const gridRows = useMemo(
        () =>
            columns !== undefined
                ? Math.ceil(Children.count(children) / Math.max(1, columns))
                : undefined,
        [columns, children]
    );

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <SectionWrapper $showDivider={showDivider}>
            {label && (
                <Label weight="semibold" id={internalId}>
                    {label}
                </Label>
            )}
            <List
                $columns={columns}
                $gridRows={gridRows}
                data-testid={testId}
                aria-labelledby={internalId}
                {...otherProps}
            >
                {children}
            </List>
        </SectionWrapper>
    );
};

MenuSection.displayName = "Menu.Section";
