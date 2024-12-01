import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Pagination } from "src/pagination";
import { CurrentPage } from "./doc-elements";

type Component = typeof Pagination;

const meta: Meta<Component> = {
    title: "Navigation/Pagination",
    component: Pagination,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        const [selectedPage, setSelected] = useState(1);
        return (
            <Pagination
                onPageChange={(selected) => setSelected(selected)}
                activePage={selectedPage}
                totalItems={50}
            />
        );
    },
};

export const WithManyPages: StoryObj<Component> = {
    render: (_args) => {
        const [selectedPage, setSelected] = useState(5);
        return (
            <>
                <CurrentPage page={selectedPage} />
                <Pagination
                    onPageChange={(selected) => setSelected(selected)}
                    activePage={selectedPage}
                    totalItems={500}
                />
            </>
        );
    },
};

export const WithFirstAndLastNav: StoryObj<Component> = {
    render: (_args) => {
        const [selectedPage, setSelected] = useState(5);
        return (
            <>
                <CurrentPage page={selectedPage} />
                <Pagination
                    onPageChange={(selected) => setSelected(selected)}
                    activePage={selectedPage}
                    totalItems={600}
                    showFirstAndLastNav
                />
            </>
        );
    },
};

export const WithPageSizeChanger: StoryObj<Component> = {
    render: (_args) => {
        const [selectedPage, setSelected] = useState(5);
        return (
            <>
                <CurrentPage page={selectedPage} />
                <Pagination
                    onPageChange={(selected) => setSelected(selected)}
                    onPageSizeChange={(page) => setSelected(page)}
                    activePage={selectedPage}
                    totalItems={400}
                    showPageSizeChanger
                />
            </>
        );
    },
};

export const WithCustomPageSizeOptions: StoryObj<Component> = {
    render: (_args) => {
        const [selectedPage, setSelected] = useState(5);
        const pageOptions = [
            { value: 5, label: "5 / page" },
            { value: 10, label: "10 / page" },
            { value: 20, label: "20 / page" },
            { value: 30, label: "30 / page" },
            { value: 50, label: "50 / page" },
        ];
        return (
            <>
                <CurrentPage page={selectedPage} />
                <Pagination
                    onPageChange={(selected) => setSelected(selected)}
                    onPageSizeChange={(page) => setSelected(page)}
                    activePage={selectedPage}
                    totalItems={600}
                    pageSizeOptions={pageOptions}
                    showFirstAndLastNav
                    showPageSizeChanger
                />
            </>
        );
    },
};
