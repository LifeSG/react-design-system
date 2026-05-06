import { FloatingFocusManager, useFloating } from "@floating-ui/react";
import { CrossIcon, FilterIcon } from "@lifesg/react-icons";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

import { Overlay } from "../overlay";
import { inertValue } from "../shared/accessibility";
import { useApplyStyle } from "../theme";
import * as filterStyles from "./filter.styles";
import { FilterContext } from "./filter-context";
import * as styles from "./filter-modal.styles";
import type { FilterModalProps } from "./types";

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
    ...otherProps
}: FilterModalProps) => {
    const { context, refs } = useFloating();
    const nodeRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);

    const [visible, setVisible] = useState(false);

    useApplyStyle(headerRef, {
        [styles.tokens.filterHeader.insetTop]: insets?.top
            ? `${insets.top}px`
            : null,
    });

    useApplyStyle(footerRef, {
        [filterStyles.tokens.filterFooter.insetBottom]: insets?.bottom
            ? `${insets.bottom}px`
            : null,
    });

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
            <div {...otherProps}>
                <styles.FilterButton
                    data-testid="filter-show-button"
                    styleType={toggleFilterButtonStyle}
                    onClick={handleShowFilter}
                    type="button"
                    icon={<FilterIcon />}
                >
                    {labels.toggle}
                </styles.FilterButton>
            </div>
            <Overlay show={visible} disableTransition>
                <styles.FloatingWrapper inert={inertValue(!visible)}>
                    <FloatingFocusManager context={context} disabled={!visible}>
                        <styles.MobileOverlayContainer
                            data-id="filter-mobile"
                            data-testid="filter-mobile"
                            ref={refs.setFloating}
                        >
                            <styles.MobileContainer ref={nodeRef} tabIndex={0}>
                                <styles.FilterHeader
                                    ref={headerRef}
                                    className={clsx(
                                        insets?.top &&
                                            "filterHeaderWithInsetTop"
                                    )}
                                >
                                    <filterStyles.FilterHeaderButton
                                        onClick={handleDismiss}
                                        focusOutline="browser"
                                        focusHighlight={false}
                                        aria-label={`close ${labels.title}`}
                                    >
                                        <CrossIcon />
                                    </filterStyles.FilterHeaderButton>
                                    <styles.FilterTitle>
                                        {labels.title}
                                    </styles.FilterTitle>
                                    <styles.FilterClearButton
                                        styleType="link"
                                        type="button"
                                        onClick={() => onClear?.()}
                                        disabled={clearButtonDisabled}
                                        aria-label={`clear ${labels.title}`}
                                    >
                                        {labels.clear}
                                    </styles.FilterClearButton>
                                </styles.FilterHeader>
                                <filterStyles.FilterBody>
                                    {children}
                                </filterStyles.FilterBody>
                                <filterStyles.FilterFooter
                                    ref={footerRef}
                                    className={clsx(
                                        insets?.bottom &&
                                            "filterFooterWithInsetBottom"
                                    )}
                                >
                                    <filterStyles.FilterDoneButton
                                        onClick={handleDone}
                                    >
                                        {labels.done}
                                    </filterStyles.FilterDoneButton>
                                </filterStyles.FilterFooter>
                            </styles.MobileContainer>
                        </styles.MobileOverlayContainer>
                    </FloatingFocusManager>
                </styles.FloatingWrapper>
            </Overlay>
        </FilterContext.Provider>
    );
};

FilterModal.displayName = "Filter.Modal";
