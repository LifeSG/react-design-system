import { CrossIcon } from "@lifesg/react-icons/cross";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "../button/button";
import { Overlay } from "../overlay/overlay";
import { MediaWidths } from "../spec/media-spec";
import { FilterItem } from "./filter-item";
import {
    DesktopContainer,
    DesktopView,
    FilterBody,
    FilterButton,
    FilterClearButton,
    FilterFooter,
    FilterHeader,
    FilterHeaderButton,
    FilterTitle,
    MobileContainer,
    MobileView,
    StyledFilterIcon,
} from "./filter.styles";
import { FilterProps } from "./types";

export const FilterBase = ({
    items,
    toggleFilterButtonLabel = "Filters",
    headerTitle = "Filters",
    clearButtonDisabled = false,
    onDismiss,
    onDone,
    onClear,
}: FilterProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const isMobile = useMediaQuery({
        maxWidth: MediaWidths.mobileL,
    });
    const [visible, setVisible] = useState(false);

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
    const renderFilterItems = (mode: "default" | "mobile") =>
        items.map((item, index) => {
            return (
                <FilterItem
                    key={index}
                    {...item}
                    mode={mode}
                    first={index === 0}
                />
            );
        });

    const renderMobile = () => {
        return (
            <>
                <FilterButton styleType="light" onClick={handleShowFilter}>
                    <StyledFilterIcon /> {toggleFilterButtonLabel}
                </FilterButton>
                {
                    <Overlay show={isMobile && visible} disableTransition>
                        <MobileContainer>
                            <FilterHeader>
                                <FilterHeaderButton
                                    onClick={handleDismissFilter}
                                    focusOutline="browser"
                                    focusHighlight={false}
                                >
                                    <CrossIcon />
                                </FilterHeaderButton>
                                <FilterTitle weight="semibold">
                                    {headerTitle}
                                </FilterTitle>
                                <FilterClearButton
                                    styleType="link"
                                    onClick={handleClearClick}
                                    disabled={clearButtonDisabled}
                                >
                                    Clear
                                </FilterClearButton>
                            </FilterHeader>
                            <FilterBody>
                                {renderFilterItems("mobile")}
                            </FilterBody>
                            <FilterFooter>
                                <Button.Default onClick={handleDoneClick}>
                                    Done
                                </Button.Default>
                            </FilterFooter>
                        </MobileContainer>
                    </Overlay>
                }
            </>
        );
    };

    const renderDesktop = () => {
        return (
            <DesktopContainer>
                <FilterHeader>
                    <FilterTitle weight="semibold">Filters</FilterTitle>
                    <FilterClearButton
                        styleType="link"
                        onClick={handleClearClick}
                        disabled={clearButtonDisabled}
                    >
                        Clear
                    </FilterClearButton>
                </FilterHeader>
                {renderFilterItems("default")}
            </DesktopContainer>
        );
    };

    return (
        <>
            <MobileView>{renderMobile()}</MobileView>
            <DesktopView>{renderDesktop()}</DesktopView>
        </>
    );
};

export const Filter = Object.assign(FilterBase, {});
