"use client";
import { DateInput } from "@lifesg/react-design-system/date-input";
import { Filter } from "@lifesg/react-design-system/filter";
import { Input } from "@lifesg/react-design-system/input";
import { useState } from "react";

type MobileFilterProps = {
    mode: "mobile";
    onChange: (value: string) => void;
    value?: string;
};

function SearchFilter({ onChange, value = "" }: MobileFilterProps) {
    return (
        <Input
            data-testid="search-filter"
            placeholder="Search"
            value={value}
            onChange={(event) => onChange(event.currentTarget.value)}
        />
    );
}

function DateFilter({ onChange, value = "" }: MobileFilterProps) {
    return (
        <DateInput
            data-testid="date-filter"
            value={value}
            onChange={onChange}
        />
    );
}

export default function Story() {
    const [searchValue, setSearchValue] = useState("");
    const [dateValue, setDateValue] = useState("");

    return (
        <Filter.Modal
            onClear={() => {
                setSearchValue("");
                setDateValue("");
            }}
            onDismiss={() => {}}
            onDone={() => {}}
            customLabels={{
                headerTitle: "Filter Modal",
                toggleFilterButtonLabel: "Open filters",
                doneButtonLabel: "Apply",
            }}
        >
            <Filter.Item title="Search" data-testid="item-search">
                <SearchFilter
                    mode="mobile"
                    onChange={setSearchValue}
                    value={searchValue}
                />
            </Filter.Item>
            <Filter.Item title="Date" data-testid="item-date">
                <DateFilter
                    mode="mobile"
                    onChange={setDateValue}
                    value={dateValue}
                />
            </Filter.Item>
        </Filter.Modal>
    );
}
