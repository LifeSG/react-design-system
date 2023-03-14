import { MagnifierIcon } from "@lifesg/react-icons/magnifier";
import React, { useState } from "react";
import { Button } from "../../src/button";
import { Checkbox } from "../../src/checkbox";
import { Mode } from "../../src/filter";
import { Form } from "../../src/form";

const CheckboxWithLabel = ({
    checked,
    children,
    onChange,
}: {
    checked: boolean;
    children: React.ReactNode;
    onChange: () => void;
}) => {
    return (
        <label
            style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.5rem",
                padding: "0 0.5rem",
            }}
        >
            <Checkbox
                displaySize="small"
                checked={checked}
                onChange={onChange}
            />
            <span style={{ marginLeft: "0.5rem" }}>{children}</span>
        </label>
    );
};

interface Props<T> {
    mode: Mode;
    value: T;
    onChange: (val: T) => void;
}

export const SearchFilter = ({ mode, value, onChange }: Props<string>) => {
    return (
        <Form.InputGroup
            placeholder="Search with keyword"
            addon={{
                type: "custom",
                attributes: {
                    children: <MagnifierIcon />,
                },
            }}
            value={value}
            onChange={(e) => {
                onChange(e.target.value);
            }}
        />
    );
};

export const CheckboxFilter = ({
    value,
    onChange,
}: Props<Record<string, boolean>>) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <>
            {Array(expanded ? 8 : 5)
                .fill(null)
                .map((_, i) => {
                    const opt = `opt${i + 1}`;
                    return (
                        <CheckboxWithLabel
                            key={i}
                            checked={value[opt]}
                            onChange={() =>
                                onChange({ ...value, [opt]: !value[opt] })
                            }
                        >
                            Label {i + 1}
                        </CheckboxWithLabel>
                    );
                })}
            <Button.Small
                styleType="link"
                onClick={() => setExpanded(!expanded)}
            >
                View {expanded ? "less" : "more"}
            </Button.Small>
        </>
    );
};

export const useFilters = () => {
    const INITIAL_STATE = {
        search: "",
        cat1: {
            opt1: false,
            opt2: false,
            opt3: false,
            opt4: false,
            opt5: false,
            opt6: false,
            opt7: false,
            opt8: false,
        },
    };

    const [currentFilters, setCurrentFilters] = useState(INITIAL_STATE);
    const [draftFilters, setDraftFilters] = useState(INITIAL_STATE);
    const [predraftFilters, setPredraftFilters] = useState(INITIAL_STATE);
    const clearButtonDisabled = Object.entries(draftFilters).every(
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
        setPredraftFilters(draftFilters);
    };

    const dismissFilters = () => {
        setDraftFilters(currentFilters);
    };

    const clearFilters = () => {
        setCurrentFilters(INITIAL_STATE);
        setDraftFilters(INITIAL_STATE);
    };

    const dismissItemFilter = () => {
        setDraftFilters(predraftFilters);
    };

    const saveItemFilter = () => {
        setPredraftFilters(draftFilters);
    };

    return {
        currentFilters,
        draftFilters,
        clearButtonDisabled,
        updateFilter,
        saveFilters,
        dismissFilters,
        clearFilters,
        dismissItemFilter,
        saveItemFilter,
    };
};
