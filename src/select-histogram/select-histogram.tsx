import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

import { HistogramSlider } from "../histogram-slider";
import { DropdownListState, ExpandableElement } from "../shared/dropdown-list";
import type { DropdownRenderProps } from "../shared/dropdown-wrapper";
import { ElementWithDropdown } from "../shared/dropdown-wrapper";
import * as dropdownWrapperStyles from "../shared/dropdown-wrapper/dropdown-wrapper.styles";
import { InputBox } from "../shared/input-wrapper";
import { Typography } from "../typography";
import { useId } from "../util";
import * as styles from "./select-histogram.styles";
import type { SelectHistogramProps } from "./types";

/**
 * A form input that displays the selected range and reveals a histogram slider in a dropdown.
 *
 * Use `SelectHistogram` when users need to select a numeric range against a data distribution.
 */
export const SelectHistogram = ({
    alignment = "left",
    className,
    disabled,
    dropdownZIndex,
    error,
    histogramSlider,
    id,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
    "aria-invalid": ariaInvalid,
    onBlur,
    onChange,
    onChangeEnd,
    optionTruncationType = "end",
    placeholder = "Select",
    rangeLabelPrefix,
    rangeLabelSuffix,
    readOnly,
    renderRangeLabel,
    value,
    dropdownRootNode,
    ...otherProps
}: SelectHistogramProps): JSX.Element => {
    const {
        interval,
        bins = [],
        renderEmptyView,
        ariaLabels,
    } = histogramSlider;
    // =============================================================================
    // CONST, STATE
    // =============================================================================
    const values = bins.map((item) => item.minValue);
    const minValue = Math.min(...values);
    const [selection, setSelection] = useState<[number, number]>(
        initSelection()
    );
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const [focused, setFocused] = useState<boolean>(false);
    const internalId = useId();

    const nodeRef = useRef<HTMLDivElement>(null);
    const selectorRef = useRef<HTMLButtonElement>(null);
    const labelContainerRef = useRef<HTMLDivElement>(null);

    const testId = otherProps["data-testid"] || "select-histogram";
    // =========================================================================
    // EFFECTS
    // =========================================================================
    useEffect(() => {
        if (value !== selection) {
            setSelection(initSelection());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleOpen = () => {
        setShowOptions(true);
    };

    const handleClose = () => {
        setShowOptions(false);
    };

    const handleDismiss = () => {
        selectorRef.current?.focus();
        setShowOptions(false);
    };

    const onSliderChange = (values: [number, number]) => {
        setSelection(values);
        onChange?.(values);
    };

    const onSliderChangeEnd = (values: [number, number]) => {
        setSelection(values);
        onChangeEnd?.(values);
    };

    const handleNodeFocus = () => {
        if (!focused && !showOptions) {
            setFocused(true);
        }
    };

    const handleNodeBlur = (e: React.FocusEvent) => {
        if (
            focused &&
            !showOptions &&
            nodeRef.current &&
            !nodeRef.current.contains(e.relatedTarget as Node)
        ) {
            setFocused(false);
            onBlur?.();
        }
    };
    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    function initSelection(): [number, number] {
        return value ?? [minValue, minValue + interval];
    }

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderSelector = (value: number) => {
        if (renderRangeLabel) {
            return renderRangeLabel(value);
        }

        return (
            <Typography.BodyBL>
                {rangeLabelPrefix}
                {value}
                {rangeLabelSuffix}
            </Typography.BodyBL>
        );
    };

    const getDisplayValue = () => {
        return !values || values.length === 0 ? (
            <div
                className={clsx(
                    styles.placeholderLabel,
                    optionTruncationType !== "middle" &&
                        styles.placeholderLabelTruncateEnd
                )}
            >
                {placeholder}
            </div>
        ) : (
            <div className={styles.label}>
                {renderSelector(selection[0])}
                <div className={styles.separator}>-</div>
                {renderSelector(selection[1])}
            </div>
        );
    };

    const renderSelectorContent = () => (
        <div
            className={dropdownWrapperStyles.labelContainer}
            ref={labelContainerRef}
            data-disabled={disabled || undefined}
        >
            {getDisplayValue()}
        </div>
    );

    const renderElement = () => {
        return (
            <InputBox
                className={className}
                data-testid={testId}
                id={id}
                ref={nodeRef}
                tabIndex={-1}
                onFocus={handleNodeFocus}
                onBlur={handleNodeBlur}
                focused={focused}
                disabled={disabled}
                readOnly={readOnly}
                error={error}
            >
                <ExpandableElement
                    ref={selectorRef}
                    disabled={disabled}
                    expanded={showOptions}
                    listboxId={internalId}
                    popupRole="dialog"
                    readOnly={readOnly}
                    variant="default"
                    aria-labelledby={ariaLabelledBy}
                    aria-describedby={ariaDescribedBy}
                    aria-invalid={ariaInvalid}
                >
                    {renderSelectorContent()}
                </ExpandableElement>
            </InputBox>
        );
    };

    const renderDropdown = ({
        elementWidth,
        styles: floatingStyles,
        setFloatingRef,
        getFloatingProps,
    }: DropdownRenderProps) => (
        <div
            className={styles.histogramSliderDropdownContainer}
            style={{ ...floatingStyles, width: elementWidth }}
            ref={setFloatingRef}
            data-testid={`${testId}-dropdown`}
            {...getFloatingProps()}
        >
            <HistogramSlider
                interval={interval}
                value={selection}
                bins={bins}
                onChange={onSliderChange}
                onChangeEnd={onSliderChangeEnd}
                showRangeLabels={false}
                renderEmptyView={renderEmptyView}
                ariaLabels={ariaLabels}
            />
        </div>
    );

    return (
        <DropdownListState>
            <ElementWithDropdown
                enabled={!readOnly && !disabled}
                isOpen={showOptions}
                renderElement={renderElement}
                renderDropdown={renderDropdown}
                onOpen={handleOpen}
                onClose={handleClose}
                onDismiss={handleDismiss}
                clickToToggle
                offset={8}
                alignment={alignment}
                fitAvailableHeight
                customZIndex={dropdownZIndex}
                rootNode={dropdownRootNode}
            />
        </DropdownListState>
    );
};
