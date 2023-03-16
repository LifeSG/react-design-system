import { MagnifierIcon } from "@lifesg/react-icons/magnifier";
import React, { useState } from "react";
import styled from "styled-components";
import { Color } from "../../src/color";
import { Mode } from "../../src/filter";
import { Form } from "../../src/form";

interface Props<T> {
    mode: Mode;
    value: T;
    onChange: (val: T) => void;
}

const SearchIcon = styled(MagnifierIcon)`
    color: ${Color.Neutral[3]};
`;

export const SearchFilter = ({ mode, value, onChange }: Props<string>) => {
    return (
        <div style={{ marginTop: mode === "default" ? "-1rem" : undefined }}>
            <Form.InputGroup
                placeholder="Search with keyword"
                addon={{
                    type: "custom",
                    attributes: {
                        children: <SearchIcon />,
                    },
                }}
                value={value}
                onChange={(e) => {
                    onChange(e.target.value);
                }}
            />
        </div>
    );
};

export const DateFilter = ({ value, onChange }: Props<string>) => {
    return <Form.DateInput value={value} onChange={(date) => onChange(date)} />;
};

export const useFilters = () => {
    const INITIAL_STATE = {
        search: "",
        cat1: "",
    };

    const [currentFilters, setCurrentFilters] = useState(INITIAL_STATE);
    const [draftFilters, setDraftFilters] = useState(INITIAL_STATE);
    const clearButtonDisabled = Object.values(draftFilters).every(
        (filter) => !filter
    );

    const updateFilter = (mode: Mode, filterKey: string) => (val) => {
        if (mode === "default") {
            setCurrentFilters((filters) => ({
                ...filters,
                [filterKey]: val,
            }));
        }
        setDraftFilters((filters) => {
            return {
                ...filters,
                [filterKey]: val,
            };
        });
    };

    const saveFilters = () => {
        setCurrentFilters(draftFilters);
    };

    const dismissFilters = () => {
        setDraftFilters(currentFilters);
    };

    const clearFilters = () => {
        setCurrentFilters(INITIAL_STATE);
        setDraftFilters(INITIAL_STATE);
    };

    return {
        currentFilters,
        draftFilters,
        clearButtonDisabled,
        updateFilter,
        saveFilters,
        dismissFilters,
        clearFilters,
    };
};
