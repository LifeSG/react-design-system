import { MagnifierIcon } from "@lifesg/react-icons/magnifier";
import isEmpty from "lodash/isEmpty";
import { useState } from "react";
import { Filter, Mode } from "src/filter";
import { Form } from "src/form";
import { Colour } from "src/theme";
import { Typography } from "src/typography";
import styled from "styled-components";

interface Props<T> {
    mode: Mode;
    value: T;
    onChange: (val: T) => void;
}

const SearchIcon = styled(MagnifierIcon)`
    color: ${Colour["icon"]};
`;

export const StyledFilterItem = styled(Filter.Item)<{ $mode: Mode }>`
    padding: ${(props) =>
        props.$mode === "default" ? "0 1.25rem 1.5rem" : "1.5rem 1.25rem"};
`;

export const SearchFilter = ({ value, onChange }: Props<string>) => {
    return (
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
    );
};

export const DateFilter = ({ value, onChange }: Props<string>) => {
    return <Form.DateInput value={value} onChange={(date) => onChange(date)} />;
};

export const TextFilter = () => {
    return (
        <Typography.BodyMD>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            venenatis neque felis, ac tempor erat iaculis et. Nam elementum at
            lectus et dapibus. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Integer aliquam placerat
            ullamcorper. Sed ut pulvinar felis. Praesent vulputate ex quis
            tellus dictum laoreet. Aliquam condimentum libero ut sagittis
            interdum. Fusce auctor pharetra lorem eu rhoncus. Integer
            consectetur in odio sed vestibulum. Nunc imperdiet ligula non eros
            faucibus, non aliquam dui aliquet.
        </Typography.BodyMD>
    );
};

export const useFilters = <T extends Record<string, any>>(initialState: T) => {
    const [currentFilters, setCurrentFilters] = useState(initialState);
    const [draftFilters, setDraftFilters] = useState(initialState);
    const clearButtonDisabled = Object.values(draftFilters).every((filter) =>
        isEmpty(filter)
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
        setCurrentFilters(initialState);
        setDraftFilters(initialState);
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
