import { CrossIcon } from "@lifesg/react-icons/cross";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Overlay } from "../overlay/overlay";
import { MediaWidths } from "../spec/media-spec";
import { FilterItemCheckbox } from "./addons/filter-item-checkbox";
import { FilterContext } from "./filter-context";
import { FilterItem } from "./filter-item";
import { FilterItemPage } from "./filter-item-page";
import {
    DesktopContainer,
    DesktopView,
    FilterBody,
    FilterButton,
    FilterClearButton,
    FilterDoneButton,
    FilterFooter,
    FilterHeader,
    FilterHeaderButton,
    FilterTitle,
    MobileContainer,
    MobileView,
    StyledFilterIcon,
} from "./filter.styles";
import { FilterProps, Mode } from "./types";

const FilterBase = ({
    toggleFilterButtonLabel = "Filters",
    headerTitle = "Filters",
    clearButtonDisabled = false,
    onClear,
    onDismiss,
    onDone,
    children,
    ...otherProps
}: FilterProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [visible, setVisible] = useState(false);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useMediaQuery(
        {
            maxWidth: MediaWidths.mobileL,
        },
        undefined,
        (isMobile) => {
            if (!isMobile) {
                handleDismissFilter();
            }
        }
    );

    // =========================================================================
    // EVENT HANDLERS
    // =========================================================================
    const handleShowFilter = () => {
        setVisible(true);
    };

    const handleDismissFilter = () => {
        setVisible(false);
        if (onDismiss) {
            onDismiss();
        }
    };

    const handleDoneClick = () => {
        setVisible(false);
        if (onDone) {
            onDone();
        }
    };

    const handleClearClick = () => {
        if (onClear) {
            onClear();
        }
    };

    // =========================================================================
    // RENDER FUNCTIONS
    // =========================================================================
    const renderChildren = (mode: Mode) => {
        return typeof children === "function" ? children(mode) : children;
    };

    const renderHeader = (mode: Mode) => {
        return (
            <FilterHeader>
                {mode === "mobile" && (
                    <FilterHeaderButton
                        onClick={handleDismissFilter}
                        focusOutline="browser"
                        focusHighlight={false}
                        aria-label="Dismiss"
                    >
                        <CrossIcon />
                    </FilterHeaderButton>
                )}
                <FilterTitle weight="semibold">{headerTitle}</FilterTitle>
                <FilterClearButton
                    styleType="link"
                    onClick={handleClearClick}
                    disabled={clearButtonDisabled}
                >
                    Clear
                </FilterClearButton>
            </FilterHeader>
        );
    };

    const renderMobile = () => {
        return (
            <>
                <FilterButton styleType="light" onClick={handleShowFilter}>
                    <StyledFilterIcon /> {toggleFilterButtonLabel}
                </FilterButton>
                <Overlay show={visible} disableTransition>
                    <MobileContainer>
                        {renderHeader("mobile")}
                        <FilterBody>{renderChildren("mobile")}</FilterBody>
                        <FilterFooter>
                            <FilterDoneButton onClick={handleDoneClick}>
                                Done
                            </FilterDoneButton>
                        </FilterFooter>
                    </MobileContainer>
                </Overlay>
            </>
        );
    };

    const renderDesktop = () => {
        return (
            <DesktopContainer>
                {renderHeader("default")}
                {renderChildren("default")}
            </DesktopContainer>
        );
    };

    return (
        <div {...otherProps}>
            <MobileView>
                <FilterContext.Provider value={{ mode: "mobile" }}>
                    {renderMobile()}
                </FilterContext.Provider>
            </MobileView>
            <DesktopView>
                <FilterContext.Provider value={{ mode: "default" }}>
                    {renderDesktop()}
                </FilterContext.Provider>
            </DesktopView>
        </div>
    );
};

export const Filter = Object.assign(FilterBase, {
    Item: FilterItem,
    Page: FilterItemPage,
    Checkbox: FilterItemCheckbox,
});
