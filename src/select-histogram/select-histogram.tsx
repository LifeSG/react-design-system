import { useEffect, useRef, useState } from "react";
import { HistogramSlider } from "../histogram-slider";
import {
    DropdownListState,
    ExpandableElement,
} from "../shared/dropdown-list-v2";
import { ElementWithDropdown } from "../shared/dropdown-wrapper";
import { LabelContainer } from "../shared/dropdown-wrapper/dropdown-wrapper.styles";
import { InputBox } from "../shared/input-wrapper/input-wrapper";
import { Text } from "../text";
import { SimpleIdGenerator } from "../util";
import {
    HistogramSliderDropdownContainer,
    Label,
    PlaceholderLabel,
    Separator,
} from "./select-histogram.styles";
import { SelectHistogramSliderProps } from "./types";

export const SelectHistogram = ({
    placeholder = "Select",
    optionTruncationType = "end",
    error,
    alignment = "left",
    dropdownZIndex,
    histogramSlider,
    ...otherProps
}: SelectHistogramSliderProps): JSX.Element => {
    const {
        className,
        disabled,
        readOnly,
        interval,
        value,
        bins = [],
        onChange,
        onChangeEnd,
        rangeLabelPrefix,
        rangeLabelSuffix,
        renderRangeLabel,
        renderEmptyView,
    } = histogramSlider;
    // =============================================================================
    // CONST, STATE
    // =============================================================================
    const [selection, setSelection] = useState<[number, number]>(
        initSelection()
    );
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const [internalId] = useState<string>(() => SimpleIdGenerator.generate());
    const values = bins.map((item) => item.minValue);
    const minValue = Math.min(...values);

    const nodeRef = useRef<HTMLDivElement>();
    const selectorRef = useRef<HTMLButtonElement>();
    const labelContainerRef = useRef<HTMLDivElement>();

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
        selectorRef.current.focus();
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
            <Text.Body>
                {rangeLabelPrefix}
                {value}
                {rangeLabelSuffix}
            </Text.Body>
        );
    };

    const getDisplayValue = () => {
        return !values || values.length === 0 ? (
            <PlaceholderLabel
                truncateType={optionTruncationType}
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
        <LabelContainer ref={labelContainerRef}>
            {getDisplayValue()}
        </LabelContainer>
    );

    const renderElement = () => {
        return (
            <InputBox
                className={className}
                data-testid={"select-histogram-selector"}
                id="select-histogram-selector"
                ref={nodeRef}
                tabIndex={-1}
                $disabled={disabled}
                $readOnly={readOnly}
                $error={error}
            >
                <ExpandableElement
                    ref={selectorRef}
                    disabled={disabled}
                    expanded={showOptions}
                    listboxId={internalId}
                    readOnly={readOnly}
                    variant="default"
                >
                    {renderSelectorContent()}
                </ExpandableElement>
            </InputBox>
        );
    };

    const renderDropdown = ({ elementWidth }: { elementWidth: number }) => (
        <HistogramSliderDropdownContainer style={{ width: elementWidth }}>
            <HistogramSlider
                interval={interval}
                value={selection}
                bins={bins}
                onChange={onSliderChange}
                onChangeEnd={onSliderChangeEnd}
                showRangeLabels={false}
                renderEmptyView={renderEmptyView}
                {...histogramSlider}
                {...otherProps}
            />
        </HistogramSliderDropdownContainer>
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
                zIndex={dropdownZIndex}
            />
        </DropdownListState>
    );
};
