import { MagnifierIcon } from "@lifesg/react-icons/magnifier";
import { css } from "@linaria/core";
import clsx from "clsx";
import isEmpty from "lodash/isEmpty";
import { type ComponentPropsWithoutRef, useState } from "react";
import type { Mode } from "src/filter";
import { Filter } from "src/filter";
import { Form } from "src/form";
import { Colour } from "src/theme";
import { Typography } from "src/typography";

interface Props<T> {
    value: T | undefined;
    onChange: (val: T) => void;
}

const searchIcon = css`
    color: ${Colour["icon"]};
`;

const defaultFilterItem = css`
    padding: 0 1.25rem 1.5rem;
`;

const nonDefaultFilterItem = css`
    padding: 1.5rem 1.25rem;
`;

type FilterItemProps = ComponentPropsWithoutRef<typeof Filter.Item> & {
    mode: Mode;
};

export const StyledFilterItem = ({
    mode,
    className,
    ...props
}: FilterItemProps) => {
    const modeClassName =
        mode === "default" ? defaultFilterItem : nonDefaultFilterItem;

    return (
        <Filter.Item {...props} className={clsx(modeClassName, className)} />
    );
};

export const SearchFilter = ({ value, onChange }: Props<string>) => {
    return (
        <Form.InputGroup
            placeholder="Search with keyword"
            addon={{
                type: "custom",
                attributes: {
                    children: <MagnifierIcon className={searchIcon} />,
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

export const useFilters = <T extends Record<string, unknown>>(
    initialState: T
) => {
    const [currentFilters, setCurrentFilters] = useState(initialState);
    const [draftFilters, setDraftFilters] = useState(initialState);
    const clearButtonDisabled = Object.values(draftFilters).every((filter) =>
        isEmpty(filter)
    );

    const updateFilter = (mode: Mode, filterKey: string) => (val: unknown) => {
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
