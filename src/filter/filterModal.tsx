import { FloatingFocusManager, useFloating } from "@floating-ui/react";
import { CrossIcon, FilterIcon } from "@lifesg/react-icons";
import { useRef, useState } from "react";
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
import { useFilterBase } from "./use-filter-base";
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
    ...props
}: FilterModalProps) => {
    const { handleClear, labels } = useFilterBase({
        onClear,
        customLabels,
        insets,
    });

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

    return (
        <FilterContext.Provider
            {...props}
            value={{ mode: "mobile", rootNode: nodeRef }}
        >
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
                                        onClick={handleClear}
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
