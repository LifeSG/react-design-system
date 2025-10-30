import { FloatingFocusManager, useFloating } from "@floating-ui/react";
import { CrossIcon, FilterIcon } from "@lifesg/react-icons";
import { useEffect, useRef, useState } from "react";
import { Overlay } from "src/overlay";
import { inertValue } from "src/shared/accessibility";
import { FilterContext } from "./filter-context";
import {
    FilterBody,
    FilterButton,
    FilterClearButton,
    FilterDoneButton,
    FilterFooter,
    FilterHeader,
    FilterHeaderButton,
    FilterTitle,
    FloatingWrapper,
    MobileContainer,
    MobileOverlayContainer,
} from "./filter.styles";
import { FilterModalProps } from "./types";

export const FilterModal = ({
    customLabels,
    onClear,
    onDone,
    onDismiss,
    onModalOpen,
    toggleFilterButtonStyle = "light",
    clearButtonDisabled = false,
    insets,
    children,
    toggleFilterButtonLabel: _toggleFilterButtonLabel,
    headerTitle: _headerTitle,
    doneButtonLabel: _doneButtonLabel,
}: FilterModalProps) => {
    const { context, refs } = useFloating();
    const nodeRef = useRef<HTMLDivElement>(null);

    const [visible, setVisible] = useState(false);

    const handleShow = () => setVisible(true);
    const handleDismiss = () => {
        setVisible(false);
        onDismiss?.();
    };
    const handleDone = () => {
        setVisible(false);
        onDone?.();
    };

    const handleShowFilter = () => {
        handleShow();
        onModalOpen?.();
    };

    const labels = {
        toggle:
            customLabels?.toggleFilterButtonLabel ||
            _toggleFilterButtonLabel ||
            "Filters",
        title: customLabels?.headerTitle || _headerTitle || "Filters",
        done: customLabels?.doneButtonLabel || _doneButtonLabel || "Done",
        clear: customLabels?.clearButtonLabel || "Clear",
    };

    useEffect(() => {
        if (visible) {
            nodeRef.current?.focus();
        }
    }, [visible]);

    return (
        <FilterContext.Provider value={{ mode: "mobile", rootNode: nodeRef }}>
            <FilterButton
                data-testid="filter-show-button"
                styleType={toggleFilterButtonStyle}
                onClick={handleShowFilter}
                type="button"
                icon={<FilterIcon />}
            >
                {labels.toggle}
            </FilterButton>
            <Overlay show={visible} disableTransition>
                <FloatingWrapper inert={inertValue(!visible)}>
                    <FloatingFocusManager context={context} disabled={!visible}>
                        <MobileOverlayContainer
                            data-id="filter-mobile"
                            data-testid="filter-mobile"
                            ref={refs.setFloating}
                        >
                            <MobileContainer ref={nodeRef} tabIndex={0}>
                                <FilterHeader $insetTop={insets?.top}>
                                    <FilterHeaderButton
                                        onClick={handleDismiss}
                                        focusOutline="browser"
                                        focusHighlight={false}
                                        aria-label={`close ${labels.title}`}
                                    >
                                        <CrossIcon />
                                    </FilterHeaderButton>
                                    <FilterTitle>{labels.title}</FilterTitle>
                                    <FilterClearButton
                                        styleType="link"
                                        type="button"
                                        onClick={() => onClear?.()}
                                        disabled={clearButtonDisabled}
                                        aria-label={`clear ${labels.title}`}
                                    >
                                        {labels.clear}
                                    </FilterClearButton>
                                </FilterHeader>
                                <FilterBody>{children}</FilterBody>
                                <FilterFooter $insetBottom={insets?.bottom}>
                                    <FilterDoneButton onClick={handleDone}>
                                        {labels.done}
                                    </FilterDoneButton>
                                </FilterFooter>
                            </MobileContainer>
                        </MobileOverlayContainer>
                    </FloatingFocusManager>
                </FloatingWrapper>
            </Overlay>
        </FilterContext.Provider>
    );
};

FilterModal.displayName = "Filter.Modal";
