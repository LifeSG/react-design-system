import { useEffect, useRef, useState } from "react";
import { HistogramSlider } from "../histogram-slider";
import { ExpandableElement } from "../shared/dropdown-list-v2";
import {
    DropdownRenderProps,
    ElementWithDropdown,
} from "../shared/dropdown-wrapper";
import { LabelContainer } from "../shared/dropdown-wrapper/dropdown-wrapper.styles";
import { InputBox } from "../shared/input-wrapper/input-wrapper";
import { Typography } from "../typography";
import { SimpleIdGenerator } from "../util";
import {
    HistogramSliderDropdownContainer,
    Label,
    PlaceholderLabel,
    Separator,
} from "./select-histogram.styles";
import { SelectHistogramProps } from "./types";

export const SelectHistogram = ({
    alignment = "left",
    className,
    disabled,
    dropdownZIndex,
    error,
    histogramSlider,
    id,
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
    const [internalId] = useState<string>(() => SimpleIdGenerator.generate());

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
            <PlaceholderLabel
                $truncateType={optionTruncationType}
                $variant="default"
            >
                {placeholder}
            </PlaceholderLabel>
        ) : (
            <Label>
                {renderSelector(selection[0])}
                <Separator>-</Separator>
                {renderSelector(selection[1])}
            </Label>
        );
    };

    const renderSelectorContent = () => (
        <LabelContainer ref={labelContainerRef} $disabled={disabled}>
            {getDisplayValue()}
        </LabelContainer>
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
                $focused={focused}
                $disabled={disabled}
                $readOnly={readOnly}
                $error={error}
            >
                <ExpandableElement
                    ref={selectorRef}
                    disabled={disabled}
                    expanded={showOptions}
                    listboxId={internalId}
                    popupRole="dialog"
                    readOnly={readOnly}
                    variant="default"
                >
                    {renderSelectorContent()}
                </ExpandableElement>
            </InputBox>
        );
    };

    const renderDropdown = ({
        elementWidth,
        styles,
        setFloatingRef,
        getFloatingProps,
    }: DropdownRenderProps) => (
        <HistogramSliderDropdownContainer
            style={{ ...styles, width: elementWidth }}
            ref={setFloatingRef}
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
        </HistogramSliderDropdownContainer>
    );

    return (
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
    );
};
