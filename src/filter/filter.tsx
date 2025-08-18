import { CrossIcon, FilterIcon } from "@lifesg/react-icons";
import { useContext, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ThemeContext } from "styled-components";
import { Overlay } from "../overlay/overlay";
import { Breakpoint } from "../theme";
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
} from "./filter.styles";
import { FilterProps, Mode } from "./types";
import { FloatingFocusManager, useFloating } from "@floating-ui/react";

const FilterBase = ({
    customLabels,
    toggleFilterButtonLabel: _toggleFilterButtonLabel,
    headerTitle: _headerTitle,
    doneButtonLabel: _doneButtonLabel,
    toggleFilterButtonStyle = "light",
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
    const toggleFilterButtonLabel =
        customLabels?.toggleFilterButtonLabel ||
        _toggleFilterButtonLabel ||
        "Filters";
    const headerTitle = customLabels?.headerTitle || _headerTitle || "Filters";
    const doneButtonLabel =
        customLabels?.doneButtonLabel || _doneButtonLabel || "Done";

    const [visible, setVisible] = useState(false);
    const mobileNodeRef = useRef<HTMLDivElement>(null);
    const desktopNodeRef = useRef<HTMLDivElement>(null);
    const theme = useContext(ThemeContext);
    const mobileBreakpoint = Breakpoint["lg-max"]({ theme });
    const isMobile = useMediaQuery({ maxWidth: mobileBreakpoint });
    const { context, refs } = useFloating();

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (!isMobile) {
            handleDismissFilter();
        }
    }, [isMobile]);

    useEffect(() => {
        if (visible && isMobile) {
            mobileNodeRef.current?.focus();
        }
    }, [visible, isMobile]);

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
                        aria-label={`close ${headerTitle}`}
                    >
                        <CrossIcon />
                    </FilterHeaderButton>
                )}
                <FilterTitle>{headerTitle}</FilterTitle>
                <FilterClearButton
                    styleType="link"
                    type="button"
                    onClick={handleClearClick}
                    disabled={clearButtonDisabled}
                    aria-label={`clear ${headerTitle}`}
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
                    styleType={toggleFilterButtonStyle}
                    onClick={handleShowFilter}
                    type="button"
                    icon={<FilterIcon />}
                >
                    {toggleFilterButtonLabel}
                </FilterButton>
                <Overlay show={visible} disableTransition>
                    <FloatingFocusManager context={context} initialFocus={-1}>
                        <MobileOverlayContainer
                            data-id="filter-mobile"
                            data-testid="filter-mobile"
                            ref={refs.setFloating}
                        >
                            <MobileContainer ref={mobileNodeRef} tabIndex={0}>
                                {renderHeader("mobile")}
                                <FilterBody>
                                    {renderChildren("mobile")}
                                </FilterBody>
                                <FilterFooter>
                                    <FilterDoneButton
                                        onClick={handleDoneClick}
                                        type="button"
                                    >
                                        {doneButtonLabel}
                                    </FilterDoneButton>
                                </FilterFooter>
                            </MobileContainer>
                        </MobileOverlayContainer>
                    </FloatingFocusManager>
                </Overlay>
            </>
        );
    };

    const renderDesktop = () => {
        return (
            <DesktopContainer
                data-id="filter-desktop"
                data-testid="filter-desktop"
                ref={desktopNodeRef}
            >
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

FilterBase.displayName = "Filter";

export const Filter = Object.assign(FilterBase, {
    Item: FilterItem,
    Page: FilterItemPage,
    Checkbox: FilterItemCheckbox,
});
