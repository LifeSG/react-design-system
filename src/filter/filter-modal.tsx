import { FloatingFocusManager, useFloating } from "@floating-ui/react";
import { CrossIcon, FilterIcon } from "@lifesg/react-icons";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

import { Button } from "../button";
import { Overlay } from "../overlay";
import { inertValue } from "../shared/accessibility";
import { ClickableIcon } from "../shared/clickable-icon";
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
    className,
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
            <div className={className} {...otherProps}>
                <Button
                    className={styles.filterButton}
                    data-testid="filter-show-button"
                    styleType={toggleFilterButtonStyle}
                    onClick={handleShowFilter}
                    type="button"
                    icon={<FilterIcon />}
                >
                    {labels.toggle}
                </Button>
            </div>
            <Overlay show={visible} disableTransition>
                <div
                    className={styles.floatingWrapper}
                    inert={inertValue(!visible)}
                >
                    <FloatingFocusManager context={context} disabled={!visible}>
                        <div
                            className={styles.mobileOverlayContainer}
                            data-id="filter-mobile"
                            data-testid="filter-mobile"
                            ref={refs.setFloating}
                        >
                            <div
                                className={styles.mobileContainer}
                                ref={nodeRef}
                                tabIndex={0}
                            >
                                <div
                                    ref={headerRef}
                                    className={clsx(
                                        styles.filterHeader,
                                        insets?.top &&
                                            styles.filterHeaderWithInsetTop
                                    )}
                                >
                                    <ClickableIcon
                                        className={
                                            filterStyles.filterHeaderButton
                                        }
                                        onClick={handleDismiss}
                                        focusOutline="browser"
                                        focusHighlight={false}
                                        aria-label={`close ${labels.title}`}
                                    >
                                        <CrossIcon />
                                    </ClickableIcon>
                                    <h2 className={styles.filterTitle}>
                                        {labels.title}
                                    </h2>
                                    <Button
                                        className={styles.filterClearButton}
                                        styleType="link"
                                        type="button"
                                        sizeType="small"
                                        onClick={() => onClear?.()}
                                        disabled={clearButtonDisabled}
                                        aria-label={`clear ${labels.title}`}
                                    >
                                        {labels.clear}
                                    </Button>
                                </div>
                                <div className={filterStyles.filterBody}>
                                    {children}
                                </div>
                                <div
                                    ref={footerRef}
                                    className={clsx(
                                        filterStyles.filterFooter,
                                        insets?.bottom &&
                                            filterStyles.filterFooterWithInsetBottom
                                    )}
                                >
                                    <Button
                                        className={
                                            filterStyles.filterDoneButton
                                        }
                                        onClick={handleDone}
                                    >
                                        {labels.done}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </FloatingFocusManager>
                </div>
            </Overlay>
        </FilterContext.Provider>
    );
};

FilterModal.displayName = "Filter.Modal";
