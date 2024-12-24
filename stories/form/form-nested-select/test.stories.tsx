// TODO: to be removed

import type { Meta } from "@storybook/react";
import { useState } from "react";
import { NestedDropdownList } from "../../../src/shared/dropdown-list-v2/nested-dropdown-list";
import isEqual from "lodash/isEqual";

const meta: Meta = {
    title: "Test",
};

export default meta;

const selected = false; // update this to test pre-selected behaviour
const initialKeyPath = ["1", "20", "300", "2000"];

export const Single = {
    render: () => {
        const [selectedKeyPath, setSelectedKeyPath] = useState(
            selected ? initialKeyPath : undefined
        );
        return (
            <div style={{ width: "23rem" }}>
                <NestedDropdownList
                    selectedKeyPaths={selectedKeyPath ? [selectedKeyPath] : []}
                    onSelectItem={(item) => setSelectedKeyPath(item.keyPath)}
                    listItems={options}
                />
            </div>
        );
    },
};

export const SingleExpanded = {
    render: () => {
        const [selectedKeyPath, setSelectedKeyPath] = useState(
            selected ? initialKeyPath : undefined
        );
        return (
            <div style={{ width: "23rem" }}>
                <NestedDropdownList
                    selectedKeyPaths={selectedKeyPath ? [selectedKeyPath] : []}
                    onSelectItem={(item) => setSelectedKeyPath(item.keyPath)}
                    listItems={options}
                    mode="expand"
                />
            </div>
        );
    },
};

export const SingleCollapsed = {
    render: () => {
        const [selectedKeyPath, setSelectedKeyPath] = useState(
            selected ? initialKeyPath : undefined
        );
        return (
            <div style={{ width: "23rem" }}>
                <NestedDropdownList
                    selectedKeyPaths={selectedKeyPath ? [selectedKeyPath] : []}
                    onSelectItem={(item) => setSelectedKeyPath(item.keyPath)}
                    listItems={options}
                    mode="collapse"
                />
            </div>
        );
    },
};

export const SingleWithSearch = {
    render: () => {
        const [selectedKeyPath, setSelectedKeyPath] = useState(
            selected ? initialKeyPath : undefined
        );
        return (
            <div style={{ width: "23rem" }}>
                <NestedDropdownList
                    selectedKeyPaths={selectedKeyPath ? [selectedKeyPath] : []}
                    onSelectItem={(item) => setSelectedKeyPath(item.keyPath)}
                    enableSearch
                    listItems={optionsForSearch}
                />
            </div>
        );
    },
};

export const SingleWithSelectableCategory = {
    render: () => {
        const [selectedKeyPath, setSelectedKeyPath] = useState(
            selected ? initialKeyPath : undefined
        );
        return (
            <div style={{ width: "23rem" }}>
                <NestedDropdownList
                    selectedKeyPaths={selectedKeyPath ? [selectedKeyPath] : []}
                    onSelectItem={(item) => setSelectedKeyPath(item.keyPath)}
                    selectableCategory
                    listItems={options}
                />
            </div>
        );
    },
};

export const Multi = {
    render: () => {
        const [selectedKeyPaths, setSelectedKeyPaths] = useState(
            selected ? [initialKeyPath] : []
        );
        const handleSelectItem = (keyPath: string[]) => {
            const index = selectedKeyPaths.findIndex((selectedKeyPath) =>
                isEqual(selectedKeyPath, keyPath)
            );
            if (index >= 0) {
                setSelectedKeyPaths([
                    ...selectedKeyPaths.slice(0, index),
                    ...selectedKeyPaths.slice(index + 1),
                ]);
            } else {
                setSelectedKeyPaths([...selectedKeyPaths, keyPath]);
            }
        };
        return (
            <div style={{ width: "23rem" }}>
                <NestedDropdownList
                    selectedKeyPaths={selectedKeyPaths}
                    onSelectItem={(item) => handleSelectItem(item.keyPath)}
                    multiSelect
                    listItems={options}
                />
            </div>
        );
    },
};

export const MultiWithSearch = {
    render: () => {
        const [selectedKeyPaths, setSelectedKeyPaths] = useState(
            selected ? [initialKeyPath] : []
        );
        const handleSelectItem = (keyPath: string[]) => {
            const index = selectedKeyPaths.findIndex((selectedKeyPath) =>
                isEqual(selectedKeyPath, keyPath)
            );
            if (index >= 0) {
                setSelectedKeyPaths([
                    ...selectedKeyPaths.slice(0, index),
                    ...selectedKeyPaths.slice(index + 1),
                ]);
            } else {
                setSelectedKeyPaths([...selectedKeyPaths, keyPath]);
            }
        };
        return (
            <div style={{ width: "23rem" }}>
                <NestedDropdownList
                    selectedKeyPaths={selectedKeyPaths}
                    onSelectItem={(item) => handleSelectItem(item.keyPath)}
                    multiSelect
                    enableSearch
                    listItems={optionsForSearch}
                />
            </div>
        );
    },
};

const options = [
    {
        label: "1",
        value: "1",
        key: "1",
        subItems: [
            {
                label: "1.1",
                value: "1.1",
                key: "10",
            },
            {
                label: "1.2",
                value: "1.2",
                key: "20",
                subItems: [
                    {
                        label: "1.2.1",
                        value: "1.2.1",
                        key: "100",
                    },
                    {
                        label: "1.2.2",
                        value: "1.2.2",
                        key: "200",
                        subItems: [
                            {
                                label: "1.2.2.1",
                                value: "1.2.2.1",
                                key: "1000",
                            },
                            {
                                label: "1.2.2.2",
                                value: "1.2.2.2",
                                key: "2000",
                            },
                        ],
                    },
                    {
                        label: "1.2.3",
                        value: "1.2.3",
                        key: "300",
                        subItems: [
                            {
                                label: "1.2.3.1",
                                value: "1.2.3.1",
                                key: "1000",
                            },
                            {
                                label: "1.2.3.2",
                                value: "1.2.3.2",
                                key: "2000",
                            },
                        ],
                    },
                ],
            },
            {
                label: "1.3",
                value: "1.3",
                key: "30",
                subItems: [
                    {
                        label: "1.3.1",
                        value: "1.3.1",
                        key: "100",
                    },
                ],
            },
        ],
    },
    {
        label: "2",
        value: "2",
        key: "2",
        subItems: [
            {
                label: "2.1",
                value: "2.1",
                key: "10",
            },
            {
                label: "2.2",
                value: "2.2",
                key: "20",
                subItems: [
                    {
                        label: "2.2.1",
                        value: "2.2.1",
                        key: "100",
                    },
                    {
                        label: "2.2.2",
                        value: "2.2.2",
                        key: "200",
                    },
                ],
            },
        ],
    },
    {
        label: "3",
        value: "3",
        key: "3",
    },
];

const optionsForSearch = [
    {
        label: "Perishables",
        value: "1",
        key: "1",
        subItems: [
            {
                label: "Banana milk",
                value: "1.1",
                key: "10",
            },
            {
                label: "Fruits",
                value: "1.2",
                key: "20",
                subItems: [
                    {
                        label: "Avocado",
                        value: "1.2.1",
                        key: "100",
                    },
                    {
                        label: "Berries",
                        value: "1.2.2",
                        key: "200",
                        subItems: [
                            {
                                label: "Banana",
                                value: "1.2.2.1",
                                key: "1000",
                            },
                            {
                                label: "Blueberry",
                                value: "1.2.2.2",
                                key: "2000",
                            },
                        ],
                    },
                    {
                        label: "Not berries",
                        value: "1.2.3",
                        key: "300",
                        subItems: [
                            {
                                label: "Strawberry",
                                value: "1.2.3.1",
                                key: "1000",
                            },
                            {
                                label: "Raspberry",
                                value: "1.2.3.2",
                                key: "2000",
                            },
                        ],
                    },
                ],
            },
            {
                label: "Cooking oil",
                value: "1.3",
                key: "30",
            },
            {
                label: "Skimmed milk",
                value: "1.4",
                key: "40",
            },
        ],
    },
    {
        label: "Toiletries",
        value: "2",
        key: "2",
        subItems: [
            {
                label: "Toilet paper",
                value: "2.1",
                key: "10",
            },
            {
                label: "Shampoo",
                value: "2.2",
                key: "20",
            },
        ],
    },
    {
        label: "Cats conserve energy by sleeping more than most animals, especially as they grow older",
        value: "3",
        key: "3",
    },
];
