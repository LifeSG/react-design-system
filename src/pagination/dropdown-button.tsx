import { CaretDownIcon } from "@lifesg/react-icons/caret-down";
import React, { useEffect, useRef, useState } from "react";

import {
    DropdownSelectOption,
    DropdownWrapper,
    Label,
    LabelDropdownDivider,
    PageSizeDropDownButton,
} from "./dropdown-button.styles";
import { DropdownProps } from "./types";
import { DropdownList } from "../shared/dropdown-list/dropdown-list";

const Component = ({
    id,
    "data-testid": dataTestId,
    className,
    pageSize = 10,
    onPageSizeChange,
}: DropdownProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================

    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [selected, setSelected] = useState();
    const [pageSizeLocal, setPageSize] = useState<number>(pageSize);
    const ref = useRef<HTMLDivElement>(null);

    const options = [
        { value: 10, label: "10 / page" },
        { value: 20, label: "20 / page" },
        { value: 30, label: "30 / page" },
    ];
    // =============================================================================
    // EFFECTS
    // =============================================================================

    useEffect(() => {
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

    const handleListItemClick = (item) => {
        setSelected(item);
        setPageSize(item.value);
        setShowDropdown(false);
        if (onPageSizeChange) {
            onPageSizeChange(item.value);
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
            aria-label="Pagination"
        >
            <PageSizeDropDownButton onClick={handleDropdownButtonClick}>
                <Label>{pageSizeLocal}</Label>
                <LabelDropdownDivider> / </LabelDropdownDivider>
                <Label>page</Label>
                <CaretDownIcon />
            </PageSizeDropDownButton>

            {showDropdown && renderOptionList()}
        </DropdownWrapper>
    );
};
export const DropdownButton = React.forwardRef(Component);
