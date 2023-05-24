import { CaretDownIcon } from "@lifesg/react-icons/caret-down";
import React, { useEffect, useRef, useState } from "react";

import {
    DropDownButton,
    DropdownSelectOption,
    DropdownWrapper,
    Label,
} from "./dropdown-button.styles";
import { DropdownItemProps, DropdownProps } from "./types";
import { DropdownList } from "../shared/dropdown-list/dropdown-list";

const Component = ({
    id,
    "data-testid": dataTestId,
    className,
    selectedItem,
    options,
    labelExtractor,
    onSelectItem,
}: DropdownProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================

    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [selected, setSelected] = useState<DropdownItemProps>();
    const [selectedOption, setSelectedOption] = useState<string>();
    const ref = useRef<HTMLDivElement>(null);

    // =============================================================================
    // EFFECTS
    // =============================================================================

    useEffect(() => {
        if (selectedItem) {
            setSelectedOption(labelExtractor(selectedItem));
        }
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onBlur();
            }
        };
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const onBlur = () => {
        setShowDropdown(false);
    };
    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleDropdownButtonClick = () => {
        setShowDropdown(!showDropdown);
    };

    const handleListItemClick = (item: DropdownItemProps) => {
        setSelected(item);
        setSelectedOption(labelExtractor(item));
        setShowDropdown(false);
        if (onSelectItem) {
            onSelectItem(item);
        }
    };
    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderOptionList = () => {
        if (options && options.length > 0) {
            return (
                <DropdownSelectOption>
                    <DropdownList
                        listItems={options}
                        onSelectItem={handleListItemClick}
                        visible={showDropdown}
                        data-testid="dropdown-list"
                        selectedItems={selected ? [selected] : []}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                    />
                </DropdownSelectOption>
            );
        }
    };

    return (
        <DropdownWrapper
            ref={ref}
            className={className}
            id={id || "dropdown-button-wrapper"}
            data-testid={dataTestId || "dropdown-button"}
            aria-label="dropdown-button"
        >
            <DropDownButton
                onClick={handleDropdownButtonClick}
                $selected={showDropdown}
            >
                <Label>{selectedOption}</Label>
                <CaretDownIcon />
            </DropDownButton>

            {showDropdown && renderOptionList()}
        </DropdownWrapper>
    );
};
export const DropdownButton = React.forwardRef(Component);
