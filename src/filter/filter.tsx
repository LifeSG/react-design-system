import { CrossIcon } from "@lifesg/react-icons/cross";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Overlay } from "../overlay/overlay";
import { MediaWidths } from "../spec/media-spec";
import { FilterItemCheckbox } from "./addons/filter-item-checkbox";
import { FilterContext } from "./filter-context";
import { FilterItem } from "./filter-item";
import { FilterItemPage } from "./filter-item-page";
import {
    DesktopContainer,
    FilterBody,
    FilterButton,
    FilterClearButton,
    FilterDoneButton,
    FilterFooter,
    FilterHeader,
    FilterHeaderButton,
    FilterTitle,
    MobileContainer,
    MobileOverlayContainer,
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
    const mobileNodeRef = useRef<HTMLDivElement>(null);
    const desktopNodeRef = useRef<HTMLDivElement>(null);
    const isMobile = useMediaQuery({
        maxWidth: MediaWidths.tablet,
    });

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (!isMobile) {
            handleDismissFilter();
        }
    }, [isMobile]);

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
                    type="button"
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
                <FilterButton
                    data-testid="filter-show-button"
                    styleType="light"
                    onClick={handleShowFilter}
                    type="button"
                >
                    <StyledFilterIcon /> {toggleFilterButtonLabel}
                </FilterButton>
                <Overlay show={visible} disableTransition>
                    <MobileOverlayContainer>
                        <MobileContainer
                            data-testid="filter-mobile"
                            ref={mobileNodeRef}
                        >
                            {renderHeader("mobile")}
                            <FilterBody>{renderChildren("mobile")}</FilterBody>
                            <FilterFooter>
                                <FilterDoneButton
                                    onClick={handleDoneClick}
                                    type="button"
                                >
                                    Done
                                </FilterDoneButton>
                            </FilterFooter>
                        </MobileContainer>
                    </MobileOverlayContainer>
                </Overlay>
            </>
        );
    };

    const renderDesktop = () => {
        return (
            <DesktopContainer data-testid="filter-desktop" ref={desktopNodeRef}>
                {renderHeader("default")}
                {renderChildren("default")}
            </DesktopContainer>
        );
    };

    return (
        <div {...otherProps}>
            {isMobile ? (
                <FilterContext.Provider
                    value={{ mode: "mobile", rootNode: mobileNodeRef }}
                >
                    {renderMobile()}
                </FilterContext.Provider>
            ) : (
                <FilterContext.Provider
                    value={{ mode: "default", rootNode: desktopNodeRef }}
                >
                    {renderDesktop()}
                </FilterContext.Provider>
            )}
        </div>
    );
};

export const Filter = Object.assign(FilterBase, {
    Item: FilterItem,
    Page: FilterItemPage,
    Checkbox: FilterItemCheckbox,
});
